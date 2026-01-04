---
layout: default
title: Publications
permalink: /publications/
---

<style>
  .pub-row {
  display: flex;
  align-items: center;
}

.publications {
  margin-top: 2rem;
}

.publications h1 {
  color: var(--theme-color);
  font-size: 2rem;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

.publications h2 {
  margin-bottom: 1rem;
}

.publications h2 span {
  font-size: 1.5rem;
}

.publications ol.bibliography {
  list-style: none;
  padding: 0;
  margin-top: 0;
}

.publications ol.bibliography li {
  min-height: 110px;
  margin-bottom: 0.5rem;
}

.publications ol.bibliography li .abbr {
  height: 8rem;
  margin-bottom: 0.5rem;
}

.publications ol.bibliography li .abbr abbr {
  display: inline-block;
  background-color: var(--theme-color);
  padding-left: 1rem;
  padding-right: 1rem;
  position: absolute;
  top: 8px;
  left: 16px;
}

.publications ol.bibliography li .abbr abbr a {
  color: white;
}

.publications ol.bibliography li .abbr abbr a:hover {
  text-decoration: none;
}

.publications ol.bibliography li .abbr .award {
  color: var(--theme-color) !important;
  border: 1px solid var(--theme-color);
}

.publications ol.bibliography li .title {
  font-weight: bolder;
}


.publications ol.bibliography li .teaser {
  border-radius: 8px;
  box-shadow: 3px 3px 6px #888;
  height: 123px;
  width: 270px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  object-fit: cover;
}
</style>


<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title" style="margin-bottom: 3px;"><a href="{{ link.url }}" class="text-accent">{{ link.title }}</a></div>
      <div class="author" style="margin-bottom: 3px;">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="tiny-btn" role="button" target="_blank">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="tiny-btn" role="button" target="_blank">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="tiny-btn" role="button" target="_blank">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="tiny-btn" role="button" target="_blank">BibTex</a>
      {% endif %}
      {% if link.notes %} 
        &nbsp;{{ link.notes }}
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

<small> <sup>*</sup> denotes equal contribution</small>
</ol>
</div>