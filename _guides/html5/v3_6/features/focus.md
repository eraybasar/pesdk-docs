---
layout: guides/content
title: &title Focus # title as shown in the menu and 

menuitem: *title
order: 0
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

The focus tool allows your users to add a radial or linear blur to their images which lets them mimic *Tile Shift* or *Bokeh* effects.
