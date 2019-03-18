---
layout: guides/content
title: &title FAQ # title as shown in the menu and
description: A collection of frequently asked questions for the PhotoEditor SDK for HTML5 including browser support, known CORS issues and supported file formats.
menuitem: *title
order: 3
platform: html5
version: v4
category:
  - guide
  - introduction
  - faq
tags: &tags # tags that are necessary
  - photo editor
published: true # Either published or not
---

{% for page in site.guides %}
{% if page.faq == true and page.platform == 'html5' %}

[{{ page.title }}]({{ page.url }})

{% endif %}
{% endfor %}