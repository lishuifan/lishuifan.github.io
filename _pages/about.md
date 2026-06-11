---
layout: about
title: about
permalink: /
subtitle: Ph.D. Student, College of Computer Science and Technology, Zhejiang University

profile:
  align: right
  image: lishui_fan_profile.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p><a href="mailto:flscode@zju.edu.cn">flscode@zju.edu.cn</a></p>
    <p>Hangzhou, China</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
site_stats:
  enabled: true

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
.post-header {
  margin-bottom: 1.15rem;
}

.post-title {
  margin-bottom: 0.35rem;
}

.post .desc {
  color: var(--global-text-color-light);
  line-height: 1.4;
}

.post > article > .profile {
  margin-bottom: 1rem;
}

.post > article > .profile figure {
  margin-bottom: 0.45rem;
}

.post > article > .profile img {
  border-radius: 6px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
}

.post > article > .profile .more-info {
  color: var(--global-text-color-light);
  font-family: inherit;
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0;
}

.post > article > .profile .more-info p {
  display: block;
  margin: 0 0 0.38rem;
}

.post > article > .clearfix p:first-child {
  line-height: 1.62;
  margin-bottom: 0.65rem;
  max-width: 700px;
}

.research-focus {
  color: var(--global-text-color-light);
  display: flex;
  flex-wrap: wrap;
  font-size: 0.86rem;
  gap: 0.25rem 0.9rem;
  margin: 0 0 1.25rem;
  max-width: 700px;
}

.research-focus span::before {
  color: var(--global-theme-color);
  content: "#";
  margin-right: 0.12rem;
}

.post > article h2 {
  font-size: 1.65rem;
  margin-bottom: 0.8rem;
  margin-top: 2rem;
}

.post > article .news .table-sm td,
.post > article .news .table-sm th {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.post > article .publications ol.bibliography li {
  margin-bottom: 1.25rem;
}

.post > article .publications ol.bibliography li .abbr {
  margin-bottom: 0.3rem;
}

.post > article .publications ol.bibliography li .abbr abbr.badge {
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

.post > article .publications .pub-rank-badge {
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

.site-stats {
  border-top: 1px solid var(--global-divider-color);
  margin-top: 2.3rem;
  padding-top: 1.3rem;
}

.site-stats__header {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.site-stats__header h2 {
  font-size: 1.3rem;
  margin: 0;
}

.site-stats__header p,
.site-stats__trend p {
  color: var(--global-text-color-light);
  font-size: 0.78rem;
  line-height: 1.45;
  margin: 0;
}

.site-stats__header p {
  max-width: 26rem;
  text-align: right;
}

.site-stats__grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 0.9rem;
}

.site-stats__metric {
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  min-width: 0;
  padding: 0.7rem 0.8rem;
}

.site-stats__value {
  color: var(--global-text-color);
  display: block;
  font-size: 1.18rem;
  font-weight: 650;
  line-height: 1.15;
}

.site-stats__label {
  color: var(--global-text-color-light);
  display: block;
  font-size: 0.72rem;
  line-height: 1.2;
  margin-top: 0.22rem;
  text-transform: lowercase;
}

.site-stats__trend {
  align-items: center;
  border: 1px dashed var(--global-divider-color);
  border-radius: 6px;
  display: grid;
  gap: 0.85rem;
  grid-template-columns: minmax(120px, 0.42fr) 1fr;
  padding: 0.75rem 0.85rem;
}

.site-stats__trend iframe {
  border: 0;
  border-radius: 6px;
  height: 260px;
  width: 100%;
}

.site-stats__trend-preview svg {
  display: block;
  height: 3.6rem;
  width: 100%;
}

.site-stats__trend-preview polyline {
  fill: none;
  stroke: var(--global-theme-color);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 4;
}

.site-stats__trend a {
  color: var(--global-theme-color);
  font-size: 0.84rem;
  font-weight: 650;
}

@media (min-width: 576px) {
  .post > article > .profile {
    max-width: 18%;
    width: 150px;
  }

  .post > article > .profile.float-right {
    margin-left: 2rem;
  }

  .post > article .publications ol.bibliography li .abbr {
    flex: 0 0 4.8rem;
    max-width: 4.8rem;
  }

  .post > article .publications ol.bibliography li .abbr + [id] {
    flex: 1 1 auto;
    max-width: calc(100% - 4.8rem);
  }
}

@media (max-width: 575.98px) {
  .post > article > .profile {
    float: none !important;
    margin: 0 auto 1.15rem;
    max-width: 58vw;
    width: 190px;
  }

  .post > article > .profile .more-info {
    font-size: 0.75rem;
    text-align: center;
  }

  .post > article > .clearfix p:first-child {
    line-height: 1.58;
    margin-bottom: 0.7rem;
    max-width: none;
  }

  .research-focus {
    font-size: 0.8rem;
    margin-bottom: 1.05rem;
  }

  .post > article h2 {
    font-size: 1.5rem;
    margin-top: 1.65rem;
  }

  .site-stats__header {
    align-items: flex-start;
    display: block;
  }

  .site-stats__header p {
    margin-top: 0.35rem;
    max-width: none;
    text-align: left;
  }

  .site-stats__grid {
    grid-template-columns: 1fr;
  }

  .site-stats__trend {
    grid-template-columns: 1fr;
  }

  .post > article .publications ol.bibliography li .abbr {
    flex: 0 0 auto;
    max-width: none;
    width: auto;
  }

  .post > article .publications ol.bibliography li .abbr abbr.badge {
    max-width: max-content;
    width: auto !important;
  }

}
</style>

I am a **third-year Ph.D. student** at the College of Computer Science and Technology, Zhejiang University, advised by **[Zhongxin Liu](https://zhongxin-liu.github.io/) and Shanping Li**. My research focuses on **large language models for code generation**, with broader interests in large language models, **code-change understanding**, and **coding agents**. I was fortunate to intern at **Alibaba Future Life Lab** and **ByteDance Douyin AI4SE**. Over the past two years, I have published or had accepted **four first-author CCF-A papers** in software engineering and related areas, including work in **ACM TOSEM**, **ASE**, and **ACL**.

<div class="research-focus">
  <span>Code generation</span>
  <span>Code-change understanding</span>
  <span>Coding agents</span>
  <span>LLM post-training</span>
</div>

<section class="site-stats" id="site-stats" aria-labelledby="site-stats-heading">
  <div class="site-stats__header">
    <h2 id="site-stats-heading">site statistics</h2>
    <p>Public counters are aggregate-only; detailed analytics stay private.</p>
  </div>

  <div class="site-stats__grid">
    <div class="site-stats__metric" id="busuanzi_container_site_pv">
      <span class="site-stats__value" id="busuanzi_value_site_pv">--</span>
      <span class="site-stats__label">site views</span>
    </div>
    <div class="site-stats__metric" id="busuanzi_container_site_uv">
      <span class="site-stats__value" id="busuanzi_value_site_uv">--</span>
      <span class="site-stats__label">visitors</span>
    </div>
    <div class="site-stats__metric" id="busuanzi_container_page_pv">
      <span class="site-stats__value" id="busuanzi_value_page_pv">--</span>
      <span class="site-stats__label">homepage views</span>
    </div>
  </div>

  <div class="site-stats__trend">
    {% if site.site_stats.goatcounter.dashboard_url %}
      {% if site.site_stats.goatcounter.embed %}
        <iframe
          title="Traffic trend dashboard"
          src="{{ site.site_stats.goatcounter.dashboard_url }}"
          loading="lazy"
          referrerpolicy="no-referrer"
        ></iframe>
      {% else %}
        <a href="{{ site.site_stats.goatcounter.dashboard_url }}" target="_blank" rel="external nofollow noopener"
          >Traffic trend dashboard</a
        >
      {% endif %}
    {% else %}
      <div class="site-stats__trend-preview" aria-hidden="true">
        <svg viewBox="0 0 320 72" role="img">
          <polyline points="4,58 48,49 92,53 136,38 180,42 224,27 268,31 316,18"></polyline>
        </svg>
      </div>
      <p>Trend dashboard is prepared for GoatCounter, but disabled until a private account is connected.</p>
    {% endif %}
  </div>
</section>

<script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

{% if site.site_stats.goatcounter.code %}

  <script
    data-goatcounter="https://{{ site.site_stats.goatcounter.code }}.goatcounter.com/count"
    async
    src="https://gc.zgo.at/count.js"
  ></script>

{% endif %}
