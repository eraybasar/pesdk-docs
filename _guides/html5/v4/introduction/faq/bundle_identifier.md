---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: html5
version: v4
tags: &tags # tags that are necessary
  - photo editor
published: true
faq: true
faq-category: license
order: 1
title: Usage of Bundle Identifier or IP-address
---

You either have to add a bundle identifier or an IP-address. Please note here that you can only add an IP-address if no hostname has been added. The SDK checks the entered value using the `window.location.hostname` property and therefore, the value has to match. 

For the bundle identifier, you can use characters, special signs or numbers as you like. Additionally, you can add multiple bundle ID's of the same product for different development stages. To do so, just separate the different identifiers by using ','between each of them without blank lines in between. Please note that every new project and/or project needs a new subscription and is seen as an own entity.
