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
faq-category: errors
order: 0
title: "Issue: 'Library not loaded'"
---

If you see an issue like this one:
```bash
dyld: Library not loaded: @rpath/PhotoEditorSDK.framework/PhotoEditorSDK
  Referenced from: /Users/username/Library/Developer/CoreSimulator/Devices/E2DE480D-05E4-47F7-9266-9598C787AA1F/data/Containers/Bundle/Application/7CA0CE63-7952-4EE5-92A4-81E85FCB7695/TestIntegration.app/TestIntegration
  Reason: image not found
```
Please make sure, that the "Embed" setting of the `PhotoEditorSDK.framework` is set to `Embed & Sign` in the "General" → "Frameworks, Libraries, and Embedded Content" section of your app target.

If you see an issue like this one:
```
dyld: Library not loaded: @rpath/ImglyKit.framework/ImglyKit
  Referenced from: /Users/username/Library/Developer/CoreSimulator/Devices/E2DE480D-05E4-47F7-9266-9598C787AA1F/data/Containers/Bundle/Application/7CA0CE63-7952-4EE5-92A4-81E85FCB7695/TestIntegration.app/Frameworks/PhotoEditorSDK.framework/PhotoEditorSDK
  Reason: image not found
```
Please make sure, that the "Embed" setting of the `ImglyKit.framework` is set to `Embed & Sign` in the "General" → "Frameworks, Libraries, and Embedded Content" section of your app target.

If you see an issue like this one:
```bash
dyld: Library not loaded: @rpath/libswiftAVFoundation.dylib
  Referenced from: /Users/username/Library/Developer/CoreSimulator/Devices/E2DE480D-05E4-47F7-9266-9598C787AA1F/data/Containers/Bundle/Application/7CA0CE63-7952-4EE5-92A4-81E85FCB7695/TestIntegration.app/Frameworks/PhotoEditorSDK.framework/PhotoEditorSDK
  Reason: image not found
```
Please make sure, that the build setting `Always Embed Swift Standard Libraries` is set to `YES`.
