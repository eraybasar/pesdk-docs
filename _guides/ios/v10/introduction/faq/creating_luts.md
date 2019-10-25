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
order: 8
title: "Lookup tables: How can I create custom filters?"
---

We do not recommend using Lightroom to generate lookup tables (LUTs) for custom filters as most of its settings (e.g. shadows, highlights, clarity, dehaze, sharpening and more) cannot be captured accurately with LUTs.

We advice to exclusively use "adjustment layers" in for example Photoshop or Affinity Photo, to create your color mappings.
Please make sure to export the modified identity LUT PNG-files as uncompressed PNG-files to avoid artifacts due to lossy image compression.
