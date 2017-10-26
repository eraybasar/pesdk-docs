---
published: true # Either published or not
layout: guides/content
title: &title Changing Icons # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v8
category:
  - guide
  - customization
description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

tags: &tags # tags that are necessary
  - photo editor
---

You can register a block using the `PESDK.bundleImageBlock` property which gets called once for each icon that is used by the SDK. The block is passed with the name of the image and within the block, you should return your desired icon for the given name. Please note that the icons that you return should have the same dimensions as the default icons to ensure the best user experience.