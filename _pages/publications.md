---
layout: page
permalink: /publications/
title: publications
description: Publications and preprints on LLM-based code generation and software engineering.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<style>
.publications ol.bibliography li .abbr {
  margin-bottom: 0.3rem;
}

.publications ol.bibliography li .abbr abbr.badge {
  border-radius: 4px !important;
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 650;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  min-width: 3.35rem;
  padding: 0.15rem 0.45rem;
  width: auto !important;
}

.publications .pub-rank-badge {
  border: 1px solid var(--global-theme-color);
  border-radius: 999px;
  color: var(--global-theme-color);
  display: inline-flex;
  font-size: 0.66rem;
  font-weight: 650;
  letter-spacing: 0;
  line-height: 1;
  margin-right: 0.35rem;
  padding: 0.11rem 0.36rem;
  transform: translateY(-0.05rem);
  vertical-align: middle;
}

@media (min-width: 576px) {
  .publications ol.bibliography li .abbr {
    flex: 0 0 4.8rem;
    max-width: 4.8rem;
  }

  .publications ol.bibliography li .abbr + [id] {
    flex: 1 1 auto;
    max-width: calc(100% - 4.8rem);
  }
}

@media (max-width: 575.98px) {
  .publications ol.bibliography li .abbr {
    flex: 0 0 auto;
    max-width: none;
    width: auto;
  }

  .publications ol.bibliography li .abbr abbr.badge {
    max-width: max-content;
    width: auto !important;
  }
}
</style>

<div class="publications">

{% bibliography %}

</div>
