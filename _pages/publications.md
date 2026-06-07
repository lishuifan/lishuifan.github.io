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
</style>

<div class="publications">

{% bibliography %}

</div>
