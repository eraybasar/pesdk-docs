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
editor.export(true) // you can specify, if you want to download the image, this will override the enabelDownload in config
  .then((image) => {
    document.body.appendChild(image)
  })
  .catch((err) => {
    console.err('An error has occured while exporting ', err)
  })
```

The export format (e.g. `data-url` or Image) and file format (e.g. PNG or JPEG) can be specified using the editor configuration. When exporting using the `data-url` format, you can pass the resulting Data URL to a server, decode it there and write it to a file.
