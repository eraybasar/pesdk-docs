---
layout: guides/content
title: &title Export to Server
description: By default, the PhotoEditor SDK for HTML5 exports to your user's device. Learn how to disable the automatic download and export to a server instead.

menuitem: *title
order: 0
platform: html5
version: v4-DesktopUI
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


To export the resulting image as an `Image` object or as a data url, you can use the [`export`](http://static.photoeditorsdk.com/docs/html5/PhotoEditorDesktopUI.html#export)
method:

```js
editor.export(
  PhotoEditorSDK.RenderType.IMAGE, // Export as `Image` object
  PhotoEditorSDK.ImageFormat.JPEG, // Export as JPEG
  0.8 // JPEG quality: 80%
).then((image) => {
  document.body.appendChild(image)
})
```

See the API documentation for available [`RenderTypes`](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.html#.RenderType)
and [`ImageFormats`](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.html#.ImageFormat)

When exporting using the `DATAURL` type, you can pass the resulting Data URL to a server:

```js
editor.export(
  PhotoEditorSDK.RenderType.DATAURL, // Export as `Image` object
  PhotoEditorSDK.ImageFormat.JPEG, // Export as JPEG
  0.8 // JPEG quality: 80%
).then((dataUrl) => {
  // Upload to server
})
```
