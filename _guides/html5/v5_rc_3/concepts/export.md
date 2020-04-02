---
layout: guides/content
title: &title Export to Server
description: By default, PhotoEditor SDK for HTML5 exports to your user's device. Learn how to disable the automatic download and export to a server instead.

menuitem: *title
order: 3
platform: html5
version: v5_rc_3
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

To export the resulting image as an `Image` object or as a data url, you can use the export method:

```js
editor.export({
   // you can specify the export configuration, this will override the configuration in config
  format: 'image/png', // Possible values: `image/png`, `image/jpeg`
  exportType: 'image', // Possible values: `image` or `data-url`
  quality: 0.9,
  enableDownload: true
}) /
  .then((image) => {
    document.body.appendChild(image)
  })
  .catch((err) => {
    console.err('An error has occured while exporting ', err)
  })
```

When exporting using the `data-url` format, you can pass the resulting Data URL to a server, decode it there and write it to a file.
