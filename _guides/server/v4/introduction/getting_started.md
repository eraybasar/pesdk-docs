---
layout: guides/content
title: &title Getting started
description: A quick guide on how to easily get started with the PhotoEditor SDK for server. Your kick-off to delight your users with top-notch editing capabilities.
order: 1
menuitem: Getting Started
platform: server
version: v4
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

Install the [latest release](https://github.com/imgly/pesdk-server-build/releases/latest) via `npm`:

```bash
  npm install -s photoeditorsdk-server
  # or
  npm install -s git+https://git@github.com/imgly/photoeditorsdk-server-build.git
```

The npm package comes with the Server SDK and all its assets included.
However, you need to copy the asset folder from the npm package to any folder that is accessible to your code (e.g. `assets`).

```bash
  cp -r node_modules/photoeditorsdk-server/assets assets
```

Next, the sdk needs to be loaded and initialized:

{% capture first_snippet %}
NodeJS
---
```js
const PhotoEditorServer = require('photoeditorsdk-server') // require the sdk

const pesdkServer = new PhotoEditorServer({
  license: 'YOUR_LICENSE', // <-- Please replace this with your license. Please make sure this is in *string* format, not *object*.
  editor: {
    preferredRenderer: 'webgl',
    export: {
      format: 'image/jpeg',
      type: PhotoEditorServer.SDK.RenderType.BUFFER
    }
  },
  assets: {
    baseUrl: '/assets' // <-- This should be the absolute path to your `assets` directory
  }

})
```
{% endcapture %}

After the SDK was successfully initialized, the server sdk can be used to render the image from a `serialization`.

{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-SNIPPET-01{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

{% capture first_snippet %}
NodeJS
---
```js
const serialization = {
  "version": "3.0.0",
  "operations": [
    {
      "type": "filter",
      "options": {
        "intensity": 1,
        "identifier": "imgly_lut_bw"
      }
    }
  ],
  "meta": {
    "platform": "html5",
    "version": "4.2.0",
    "createdAt": "2018-01-30T12:43:59Z"
  },
  "image": {}
}

/** Variant 1: Load image data and call #setImage directly **/
const result = PhotoEditorServer.ImageLoader.load('URI TO INPUT IMAGE')
  .then((inputImage) => {
    pesdkServer.setImage(inputImage)
    pesdkServer.render(serialization) // Apply the serialization to the input image
  })


/** Variant 2: Update image uri in serialization file **/
serialization.image |= {}
serialization.image.uri = 'URI TO INPUT IMAGE'
const result = pesdkServer.render(serialization) // Apply the serialization to the input image


// Finally wait for the promise to be resolved and process the resulting output image buffer
result.then((outputImageBuffer) => {
    console.log('Done!')
  }).catch((e) => {
    console.log(e)
  })
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-SNIPPET-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Starting here you can use the SDK in any NodeJS server application.