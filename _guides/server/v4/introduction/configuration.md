---
layout: guides/content
title: &title Configuration
description: The PhotoEditor SDK for server can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: Configuration
order: 2
platform: server
version: v4
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

<!--Check PhotoEditorSDK.Server.js in the sourcecode -->

You can easily configure the editor to disable specific tools, hide buttons etc. by adding properties
to the `options` object passed to the Server:

{% capture first_snippet %}
Server
---
```js
{
  license: 'INSERT YOUR LICENSE HERE AS STRING ', // String - Your license (Required)
  logLevel: 'warn', // String - `trace`, `info`, `warn`, `error` or `log`. Defaults to `warn`.
  assets: {
    baseUrl: '../../photoeditorsdk-server/assets' //
  },
  // editor configuration
  editor: {
    preferredRenderer: 'webgl', // String - Defaults to `webgl`. Available are `webgl` and `canvas`.
    smoothUpscaling: false, // Boolean - Toggles smooth downscaling of images and sprites. Might have a negative impact on performance, therefor default is `false`.
    smoothDownscaling: false, // Boolean - Toggles smooth upscaling of images and sprites. Might have a negative impact on performance, therefor default is `false`.
    transparent: false, // Boolean - Should the canvas background be transparent. Defaults to `false`
    export: {
      format: 'image/jpeg', // String -
      type: PhotoEditorServer.SDK.RenderType.BUFFER
    }
  }
}
```
{% endcapture %}


{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_tabbed_block.html snippets=snippets identifier=identifier %}
