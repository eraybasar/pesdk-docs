---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: android
version: v6_5
tags: &tags # tags that are necessary
  - photo editor
published: true
faq: true
faq-category: errors
order: 0
title: Android App using AndroidX crashes
---

We did look into this issue and discovered that this issue is not related to the SDK itself, as it is a bug within AndroidX itself.
Unfortunately, Google has not been able to fixed this issue yet.
Please find a reference for this here: https://issuetracker.google.com/issues/119582492. Currently, we are trying to work around, but unfortunately, at this stage, we can’t give you an estimate when this will happen.
We currently recommend to not migrate to AndroidX to avoid even more hiccups. However, please note that we are doing everything in our power to resolve this as soon as possible.
