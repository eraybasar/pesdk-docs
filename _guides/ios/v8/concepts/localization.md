---
layout: guides/content
title: &title Localization # title as shown in the menu and
description: The PhotoEditor SDK for iOS can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.
menuitem: *title
order: 0
platform: ios
version: v8
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---ished: true # Either published or not
---


The PhotoEditor SDK is fully localizable. We provide an English fallback localization, that will be used when no matching localization is found. To determine the matching language PhotoEditor SDK uses `NSLocale.preferredLanguages`.
To add support for a language, please refer to Apple's localization guidelines.
We also provide two properties to customize your localization, `PESDK.localizationDictionary` and `PESDK.localizationBlock`.
