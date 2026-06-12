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

document.addEventListener("DOMContentLoaded", () => {
  if (typeof determineComputedTheme === "function" && typeof setThemeSetting === "function") {
    bindDirectThemeToggle();
  }

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
