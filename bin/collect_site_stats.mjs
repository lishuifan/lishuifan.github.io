import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const historyPath = path.join(root, "_data", "site_stats_history.json");
const siteUrl = process.env.SITE_STATS_URL || "https://lishuifan.github.io/";
const maxSamples = Number.parseInt(process.env.SITE_STATS_MAX_SAMPLES || "90", 10);

const parseCounter = (value) => {
  const numeric = Number.parseInt(String(value || "").replace(/[^\d]/g, ""), 10);
  if (!Number.isFinite(numeric)) {
    throw new Error(`Invalid counter value: ${value}`);
  }
  return numeric;
};

const shanghaiDate = () => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Shanghai",
    year: "numeric",
  })
    .formatToParts(new Date())
    .reduce((acc, part) => ({ ...acc, [part.type]: part.value }), {});

  return `${parts.year}-${parts.month}-${parts.day}`;
};

const readHistory = () => {
  if (!fs.existsSync(historyPath)) {
    return { source: "busuanzi", updated_at: null, samples: [] };
  }

  return JSON.parse(fs.readFileSync(historyPath, "utf8"));
};

const writeHistory = (history) => {
  fs.writeFileSync(historyPath, `${JSON.stringify(history, null, 2)}\n`);
};

const launchOptions = { headless: true };
if (process.env.PLAYWRIGHT_CHROME_CHANNEL) {
  launchOptions.channel = process.env.PLAYWRIGHT_CHROME_CHANNEL;
}

const browser = await chromium.launch(launchOptions);
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.route("**/*", (route) => {
  const type = route.request().resourceType();
  if (["image", "font", "media"].includes(type)) {
    return route.abort();
  }

  return route.continue();
});

const url = new URL(siteUrl);
url.searchParams.set("stats-sample", Date.now().toString());

try {
  await page.goto(url.toString(), { timeout: 60000, waitUntil: "commit" });
  await page.waitForFunction(
    () => {
      const ids = ["busuanzi_value_site_pv", "busuanzi_value_site_uv"];
      return ids.every((id) => {
        const value = document.getElementById(id)?.textContent?.trim();
        return value && value !== "--";
      });
    },
    null,
    { timeout: 60000 }
  );

  const counters = await page.evaluate(() => ({
    page_pv: document.getElementById("busuanzi_value_page_pv")?.textContent?.trim(),
    site_pv: document.getElementById("busuanzi_value_site_pv")?.textContent?.trim(),
    site_uv: document.getElementById("busuanzi_value_site_uv")?.textContent?.trim(),
  }));

  const sample = {
    date: shanghaiDate(),
    page_pv: counters.page_pv ? parseCounter(counters.page_pv) : parseCounter(counters.site_pv),
    site_pv: parseCounter(counters.site_pv),
    site_uv: parseCounter(counters.site_uv),
  };

  const history = readHistory();
  const samples = Array.isArray(history.samples) ? history.samples : [];
  const nextSamples = samples.filter((entry) => entry.date !== sample.date).concat(sample);
  nextSamples.sort((a, b) => a.date.localeCompare(b.date));

  const nextHistory = {
    source: "busuanzi",
    updated_at: new Date().toISOString(),
    samples: nextSamples.slice(-maxSamples),
  };

  writeHistory(nextHistory);
  console.log(`Recorded ${sample.date}: site_pv=${sample.site_pv}, site_uv=${sample.site_uv}, page_pv=${sample.page_pv}`);
} finally {
  await browser.close();
}
