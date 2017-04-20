---
layout: guides/android/v3_1/content
title: &title Export # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Exporting

To export the resulting image as an `Image` object or as a data url, you can use the [`export`](http://static.photoeditorsdk.com/docs/android/PhotoEditorSDK.html#export)
method:

```js
sdk.export(
  PhotoEditorSDK.RenderType.IMAGE, // Export as `Image` object
  PhotoEditorSDK.ImageFormat.JPEG, // Export as JPEG
  0.8 // JPEG quality: 80%
).then((image) => {
  document.body.appendChild(image)
})
```

See the API documentation for available [`RenderTypes`](http://static.photoeditorsdk.com/docs/android/PhotoEditorSDK.html#.RenderType)
and [`ImageFormats`](http://static.photoeditorsdk.com/docs/android/PhotoEditorSDK.html#.ImageFormat)
