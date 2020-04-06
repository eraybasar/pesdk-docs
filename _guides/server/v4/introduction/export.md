---
layout: guides/content
title: &title Export
description: Learn how to change the export options on runtime.

menuitem: *title
order: 3
platform: server
version: v4
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

With version `v.4.23.0` of the Server it is now possible to change the export options on runtime.

```diff
- pesdkServer.render(configuration)
+ pesdkServer.deserialize(configuration).then(() => pesdkServer.export(false, options)) 
```

Available Options:
* `options` Object
  * `format` String - The mime type of the exported image. Defaults to `image/png`. Available formats vary by browser.
  * `type` PhotoEditorSDK.RenderType - Specifies the export type (image or data url)
  * `download` Boolean - Should a download dialog be displayed on export?
  * `fileBasename` String - The base file name, defaults to `photoeditorsdk-export`
  * `quality` Number - JPEG quality, defaults to 0.8
