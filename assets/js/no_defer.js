const directToggleThemeSetting = () => {
  const nextTheme = determineComputedTheme() === "dark" ? "light" : "dark";
  setThemeSetting(nextTheme);
};

const bindDirectThemeToggle = () => {
  const modeToggle = document.getElementById("light-toggle");

  if (!modeToggle || modeToggle.dataset.directThemeToggle === "true") {
    return;
  }

  modeToggle.dataset.directThemeToggle = "true";
  modeToggle.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      directToggleThemeSetting();
    },
    { capture: true }
  );
};

if (typeof determineComputedTheme === "function" && typeof setThemeSetting === "function") {
  toggleThemeSetting = directToggleThemeSetting;
  bindDirectThemeToggle();
}

const moveSiteStats = () => {
  const siteStats = document.getElementById("site-stats");
  const publications = document.querySelector(".post > article .publications");

  if (siteStats && publications && publications.nextElementSibling !== siteStats) {
    publications.insertAdjacentElement("afterend", siteStats);
  }
};

const formatSiteStatNumber = (value) => Number(value || 0).toLocaleString("en-US");

const renderSiteStatsTrend = () => {
  const historyElement = document.getElementById("site-stats-history");
  const chartElement = document.querySelector(".site-stats__trend-chart");
  const trendElement = document.querySelector(".site-stats__trend");
  const areaElement = document.getElementById("site-stats-trend-area");
  const lineElement = document.getElementById("site-stats-trend-line");
  const dotElement = document.getElementById("site-stats-trend-dot");
  const valueElement = document.getElementById("site-stats-trend-value");
  const noteElement = document.getElementById("site-stats-trend-note");
  const dateElement = document.getElementById("site-stats-trend-date");

  if (!historyElement || !chartElement || !areaElement || !lineElement || !dotElement || !valueElement || !noteElement || !dateElement) {
    return;
  }

  let history;
  try {
    history = JSON.parse(historyElement.textContent || "{}");
  } catch {
    history = {};
  }

  const samples = Array.isArray(history.samples)
    ? history.samples
        .map((sample) => ({
          date: sample.date,
          pagePv: Number(sample.page_pv || 0),
          sitePv: Number(sample.site_pv || 0),
          siteUv: Number(sample.site_uv || 0),
        }))
        .filter((sample) => sample.date && Number.isFinite(sample.sitePv) && sample.sitePv > 0)
    : [];

  if (samples.length === 0) {
    chartElement.classList.add("is-empty");
    trendElement?.classList.add("is-loading");
    valueElement.textContent = "waiting for first sample";
    noteElement.textContent = "Built from public aggregate counters and updated once per day.";
    dateElement.textContent = "No historical sample has been collected yet.";
    return;
  }

  chartElement.classList.remove("is-empty");
  trendElement?.classList.remove("is-loading");

  const values = samples.map((sample) => sample.sitePv);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const range = Math.max(maxValue - minValue, 1);
  const left = 6;
  const right = 314;
  const top = 12;
  const bottom = 74;
  const xStep = samples.length > 1 ? (right - left) / (samples.length - 1) : 0;
  const points = samples.map((sample, index) => {
    const x = samples.length > 1 ? left + xStep * index : (left + right) / 2;
    const y = bottom - ((sample.sitePv - minValue) / range) * (bottom - top);
    return { x, y, sample };
  });

  lineElement.setAttribute("points", points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" "));

  const areaPoints = [
    `${points[0].x.toFixed(1)},${bottom}`,
    ...points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`),
    `${points[points.length - 1].x.toFixed(1)},${bottom}`,
  ];
  areaElement.setAttribute("d", `M ${areaPoints.join(" L ")} Z`);

  const latestPoint = points[points.length - 1];
  dotElement.setAttribute("cx", latestPoint.x.toFixed(1));
  dotElement.setAttribute("cy", latestPoint.y.toFixed(1));

  const latest = samples[samples.length - 1];
  const previous = samples[samples.length - 2];
  const delta = previous ? latest.sitePv - previous.sitePv : 0;
  const deltaText = previous ? `${delta >= 0 ? "+" : ""}${formatSiteStatNumber(delta)} views since previous sample.` : "First daily sample recorded.";

  valueElement.textContent = `${formatSiteStatNumber(latest.sitePv)} views`;
  noteElement.textContent = `${deltaText} Aggregate only.`;
  dateElement.textContent = `Latest sample: ${latest.date}.`;
};

moveSiteStats();
renderSiteStatsTrend();

document.addEventListener("DOMContentLoaded", () => {
  if (typeof determineComputedTheme === "function" && typeof setThemeSetting === "function") {
    bindDirectThemeToggle();
  }

  moveSiteStats();
  renderSiteStatsTrend();

  const compatBootstrap = Boolean(window.alFolio && window.alFolio.compatBootstrap);
  const computedTheme =
    typeof window.determineComputedTheme === "function" ? window.determineComputedTheme() : document.documentElement.dataset.theme || "light";

  document.querySelectorAll("table").forEach((table) => {
    if (computedTheme === "dark") {
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
    }

    const insideExcludedParent =
      table.closest('[class*="news"]') ||
      table.closest('[class*="card"]') ||
      table.closest('[class*="archive"]') ||
      table.closest("pre") ||
      table.closest("code");

    if (!insideExcludedParent) {
      table.classList.add("table", "table-hover");
      table.parentElement?.classList.add("table-responsive");

      if (compatBootstrap) {
        table.setAttribute("data-toggle", "table");
      }
    }
  });
});
