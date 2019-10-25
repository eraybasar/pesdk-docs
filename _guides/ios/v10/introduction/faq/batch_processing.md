---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: ios
version: v10
tags: &tags # tags that are necessary
  - photo editor
published: true
faq: true
faq-category: general
order: 7
title: "Batch processing: Is it possible to edit a series of images at once?"
---

PhotoEditor SDK for iOS currently does not support batch processing. However, by using the serialization option (that is reapplying a predefined series of editing operations to the same or another image) you may offer your users templating. To enable this option please refer to our documentation regarding [serialization]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/serialization).
