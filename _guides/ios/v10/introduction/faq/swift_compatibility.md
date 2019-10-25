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
order: 1
title: "Swift compatibility: Which Swift versions are supported?"
---

Swift's ABI is not yet stable, which means that a specific build of the SDK is bound to a specific build of Xcode. **In general the latest stable release of the PhotoEditor SDK requires the latest stable release of Xcode.** If you are required to use an older version of Xcode, you will unfortunately have to use an older version of PhotoEditor SDK as well.

We update the SDK very quickly after a new release of Xcode, so that a matching build is usually available within a couple of days at most. In most cases we also offer prereleases of the SDK, which can be used with prereleases of Xcode. Those prereleases are then available on [GitHub](http://github.com/imgly/pesdk-ios-build/releases) and named after the Xcode prerelease they were built with. Unfortunately we can't distribute prereleases via CocoaPods.
