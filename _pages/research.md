---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<h2> Working Papers </h2>
<div>
	{% assign research_sorted = site.research | sort: "order_paper" %}
	{% for paper in research_sorted %}
	{% if paper.pubstatus == "mimeo" %}
	{% include archive-single-papers.html %}
	{% endif %}	
	{% endfor %}
</div>

<h2> Work in progress </h2>

<div>
	{% assign research_sorted = site.research | sort: "order_paper" %}
	{% for paper in research_sorted %}
	{% if paper.pubstatus == "inprogress" %}			
	{% include archive-single-papers.html %}
	{% endif %}	
	{% endfor %}
</div>
