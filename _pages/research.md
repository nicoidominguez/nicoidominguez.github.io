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

{% for post in site.research reversed %} {% include archive-single.html %} {% endfor %}

<h2> Working Papers </h2>
<div>
	{% assign research_sorted = site.research | sort: "order_paper" %}
	{% for paper in research_sorted %}
	{% if paper.pubstatus == "mimeo" %}
			
		<div>
		<ul>	
			<li style= "font-weight: bold;"><a href ="{{ paper.url }}">{{ paper.title }}</a></li>
			{% if paper.coauthors %}
				<i>With
				{% assign coauthors = paper.coauthors | join: ',' | strip | split: ', ' %}
				{% assign last = coauthors | last %}
				{% assign first = coauthors | first %}
				{% for author in coauthors %}
					{% assign authordata = site.data.authors[author] %}
					{% if author == last and author == first %}
						{% if authordata.webpage  != "no" %}
							<a href="{{ authordata.webpage }}">{{ author }}</a>
						{% else %}
							{{ author }}
						{% endif %}
					{% elsif author == last and author != first %}
						{% if authordata.webpage != "no" %}
							and
							<a href="{{ authordata.webpage }}">{{ author }}</a>
						{% else %}
							and
							{{ author }}
						{% endif %}
					{% elsif author != last and author == first %}
						{% if authordata.webpage  != "no" %}
							<a href="{{ authordata.webpage }}">{{ author }}</a>,
						{% else %}
							{{ author | append:',' }}
						{% endif %}
					{%	elsif author != last and author != first %}
						{% if authordata.webpage  != "no" %}
							<a href="{{ authordata.webpage }}">{{ author }}</a>,
						{% else %}
							{{ author | append:',' }}
						{% endif %}
					{% endif %}
				{% endfor %}
				</i>
			{% endif %}
				
			{% if paper.link != 'no' %}
			<div class = "pdf">
				<u><a href="{{ paper.link }}" target="_blank"> [{{ paper.journal }}] </a></u>
			</div>
			{% endif %}
					
			
			{% if  paper.funding  != 'no' %}
			<div class ="conferences">
				<i>Project financed by grant from {{ paper.funding }}</i>
			</div>
			{% endif %}
						
			{% if  paper.presented  != 'no' %}
			<div class ="conferences">
				<i>Presented in: {{ paper.presented }}</i>
			</div>
			{% endif %}						
					
		</ul>	
		</div>
	{% endif %}	
	{% endfor %}
</div>


<h2> Work in progress </h2>

<div>
	{% assign research_sorted = site.research | sort: "order_paper" %}
	{% for paper in research_sorted %}
	{% if paper.pubstatus == "inprogress" %}
			
		<div>
		<ul>	
			<li style= "font-weight: bold;"><a href ="{{ paper.url }}">{{ paper.title }}</a></li>
			{% if paper.coauthors %}
				<i>With
				{% assign coauthors = paper.coauthors | join: ',' | strip | split: ', ' %}
				{% assign last = coauthors | last %}
				{% assign first = coauthors | first %}
				{% for author in coauthors %}
					{% assign authordata = site.data.authors[author] %}
					{% if author == last and author == first %}
						{% if authordata.webpage  != "no" %}
							<a href="{{ authordata.webpage }}">{{ author }}</a>
						{% else %}
							{{ author }}
						{% endif %}
					{% elsif author == last and author != first %}
						{% if authordata.webpage != "no" %}
							and
							<a href="{{ authordata.webpage }}">{{ author }}</a>
						{% else %}
							and
							{{ author }}
						{% endif %}
					{% elsif author != last and author == first %}
						{% if authordata.webpage  != "no" %}
							<a href="{{ authordata.webpage }}">{{ author }}</a>,
						{% else %}
							{{ author | append:',' }}
						{% endif %}
					{%	elsif author != last and author != first %}
						{% if authordata.webpage  != "no" %}
							<a href="{{ authordata.webpage }}">{{ author }}</a>,
						{% else %}
							{{ author | append:',' }}
						{% endif %}
					{% endif %}
				{% endfor %}
				</i>
			{% endif %}
			
			
			{% if paper.pdf != 'no' %}
			<div class = "pdf">
				<u>{{ paper.pdf }}</u>
			</div>
			{% endif %}
				
				
			{% if paper.title == 'The Direct and Indirect Effects of Messages on Tax Compliance: Experimental Evidence from Peru' %}
			<div class = "pdf">
				<u><a href="{{ "/assets/pdfs/taxes_rct_messages.pdf" | prepend: site.baseurl | prepend: site.url }}" target="_blank"> [R&R in Journal of Economic Behavior and Organization - Latest version here] </a></u>
			</div>
			{% endif %}
			
			{% if paper.title == 'Transit Infrastructure and Couples&apos; Commuting Choices in General Equilibrium' %}
			<div class = "pdf">
				<u><a href="{{ "/assets/pdfs/lima_couples_urban.pdf" | prepend: site.baseurl | prepend: site.url }}" target="_blank"> [Preliminary draft here] </a></u>
			</div>
			{% endif %}
			
			{% if  paper.funding  != 'no' %}
			<div class ="conferences">
				<i>Project financed by grant from {{ paper.funding }}</i>
			</div>
			{% endif %}
			
			{% if  paper.presented  != 'no' %}
			<div class ="conferences">
				<i>Presented in: {{ paper.presented }}</i>
			</div>
			{% endif %}						
					
		</ul>	
		</div>
	{% endif %}	
	{% endfor %}
</div>
