---
layout: guides/content
title: &title Transform # title as shown in the menu and 

menuitem: *title
order: 3
platform: html5
version: v3_6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

# {{ page.title }}

Our transform section unifies cropping, flipping and rotation operations in one feature. The SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.
