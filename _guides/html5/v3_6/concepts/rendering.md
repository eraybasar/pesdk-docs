---
layout: guides/content
title: Rendering
description: Learn how to leverage the powerful rendering engine of the PhotoEditor SDK for HTML5 and how to wire it with your own custom UI or no UI at all.

menuitem: *title
order: 0
platform: html5
version: v3_6
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---


The SDK is the "back end" of the editor. It handles image rendering and image modification. If
you're interested in building your own UI, or not using a UI at all, this is the way to go.

Rendering using the SDK requires an input image as well as a `canvas` HTML element that it should
render to. Let's create the `canvas` element first:

```html
<canvas id="canvas" />
```

Now let's create an `Image`, load it, instantiate the SDK and render the image to the canvas:

```js
window.onload = function () {
  const canvas = document.getElementById('canvas')
  const image = new Image()
  image.addEventListener('load', () => {
    const sdk = new PhotoEditorSDK('webgl', {
      canvas: canvas,
      image: image
    })
    sdk.render()
  })
  image.src = 'image.png'
}
```

The canvas should now display your image.
