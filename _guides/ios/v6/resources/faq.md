---
layout: guides/content
title: &title FAQ # title as shown in the menu and
description: A collection of frequently asked questions for the PhotoEditor SDK for iOS including framework size, Swift, Delta updates, Bitcode and app thinning.
menuitem: *title
order: 0
platform: ios
version: v6
category:
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


## Library not loaded
If you see an issue like this one:
```bash
dyld: Library not loaded: @rpath/libswiftAVFoundation.dylib
  Referenced from: /Users/newmetl/Library/Developer/CoreSimulator/Devices/E2DE480D-05E4-47F7-9266-9598C787AA1F/data/Containers/Bundle/Application/7CA0CE63-7952-4EE5-92A4-81E85FCB7695/Test Integration.app/Frameworks/imglyKit.framework/imglyKit
  Reason: image not found
```
Then make sure that the build setting `Always Embed Swift Standard Libraries` is set to `Yes`.

## How do I get the source-code ?
We have a full-source license. Please [contact us](https://www.photoeditorsdk.com/pricing#contact) for details.
