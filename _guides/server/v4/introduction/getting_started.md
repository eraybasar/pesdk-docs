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

Install required dependencies via platform package manager

### Mac OSX
```shell
$ xcode-select --install
$ brew install libtiff jpeg libpng cairo libsvg librsvg giflib pango node
```

### Ubuntu
```shell
$ sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++
```

Install the [latest release](https://github.com/imgly/pesdk-server-build/releases/latest) via `npm`:

```bash
  # Install PhotoEditorSDK Server/Node
  npm install photoeditorsdk-server
  # or
  npm install -s git+https://git@github.com/imgly/pesdk-server-build.git
```

The npm package comes with the Server SDK and all its assets included.
Depending on your setup, you need to copy the asset folder from the npm package to any folder that is accessible to your code (e.g. `assets`).

```bash
  cp -r node_modules/photoeditorsdk-server/assets assets
```

Next, the sdk needs to be loaded and initialized:

{% capture first_snippet %}
NodeJS
---
```js
const PesdkServer = require('photoeditorsdk-server') // require the sdk

const pesdkServer = new PesdkServer({
  license: 'YOUR_LICENSE', // <-- Please replace this with your license. Please make sure this is in *string* format, not *object*.
  editor: {
    preferredRenderer: 'webgl', // or 'canvas'
    export: {
      format: 'image/jpeg',
      type: PesdkServer.SDK.RenderType.BUFFER
    }
  },
  assets: {
    baseUrl: '../node_modules/photoeditorsdk-server/assets' // <-- This should be the absolute path to your `assets` directory
  }
})

// example that converts the image to black and white
const configuration = {
  'version': '3.0.0',
  'operations': [
    {
      'type': 'filter',
      'options': {
        'intensity': 1,
        'identifier': 'imgly_lut_bw'
      }
    }
  ]
}

/** Variant 1: Load image data and call PesdkServer#setImage directly **/
const result = PesdkServer.ImageLoader.load('URI TO INPUT IMAGE')
  .then((inputImage) => {
    pesdkServer.setImage(inputImage)
    pesdkServer.render(configuration) // Apply the serialization to the input image
  })

/** Variant 2: Update image uri in serialization file **/
// serialization.image |= {}
// serialization.image.uri = 'URI TO INPUT IMAGE'
// const result = pesdkServer.render(serialization) // Apply the serialization to the input image

// Finally wait for the promise to be resolved and process the resulting output image buffer
result.then((outputImageBuffer) => {
  // do Something with the image data. e.g. write to file
  console.log('Done!')
}).catch((e) => {
  console.log(e)
})

```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


Starting here you can use the SDK in any NodeJS application. For more examples please take a look at the `examples` directory in our [GitHub repository](https://github.com/imgly/pesdk-server-build).