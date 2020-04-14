---
layout: guides/content
title: &title Getting Started - Parcel JS
description: Getting started integration tutorial

platform: html5
version: v5
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

## Let's get started!

We will be using [parcel-js](https://parceljs.org/) for simplicity.

##### Create a project

- Start a new project in an empty directory by running `npm init`.
- A `package.json` file will be created, with minimal information about the project.

##### Installing peer dependencies

PhotoEditor SDK needs following peer dependencies:

1. React >= 16.3
2. React DOM >= 16.3
3. Styled Components >= 4.4

- Run `npm install --save react@16.3 react-dom@16.3 styled-components@4.4` to include them in the project.

##### Installing PhotoEditor SDK

- Run `npm install --save photoeditorsdk@5.0.0`.

You will be left with following structure in your `node_modules/photoeditorsdk/`

```bash
├── assets
│   ├── adjustment
│   ├── colorpicker
│   ├── controls
│   ├── filter
│   ├── focus
│   ├── font
│   ├── frame
│   ├── overlay
│   ├── sticker
│   ├── textdesign
│   └── transform
├── esm
└── cjs
```

The package contains three folders that you need to integrate to your project.

1. `assets`: It contains all assets required for the PhotoEditor, this includes for example assets for _frames_, _stickers_ and the _ui_.
1. `cjs`: It contains PhotoEditor SDK UI bundled as commonjs modules, will be loaded for older browser versions.
1. `esm`: It contains PhotoEditor SDK UI bundled as ECMAScript modules, will be loaded for supported modern browser versions.

- Create a `dist` folder.
- Copy the `assets` from `node_modules/photoeditorsdk` to `dist`.

##### Adding a container for PhotoEditor SDK

- Create a `index.html` in the root of the project.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body></body>
</html>
```

- Create a `<div>` tag as a container for the editor. The editor will adapt its size according to the dimensions of the container. For the sake of simplicity, specify the dimensions using inline styles.

```diff
<body>
+   <div role="PhotoEditor SDK" id="editor" style="width: 100vw; height: 100vh;"></div>
</body>
```

##### Initialize the editor

- Finally, in order to initialize the editor, instantiate the UI using JavaScript. Create a `index.js` in the root of the project.

```js
import { UIEvent, PhotoEditorSDKUI } from "photoeditorsdk";

PhotoEditorSDKUI.init({
  container: "#editor",
  image: "example.png", // Image url or Image path relative to assets directory
  license: "<your_license_key>",
}).then((editor) => {
  console.log("PhotoEditorSDK for Web is ready!");
  editor.on(UIEvent.CLOSE, () => {
    console.log("closed");
  });
});
```

- Include the `index.js` script in our html file

```diff
<body>
  <div role="PhotoEditor SDK" id="editor" style="width: 100vw; height: 100vh;"></div>
+   <script src="./index.js"></script>
</body>
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

<!-- <div class="important-notice"> -->
<div class="documentation__disclaimer">
<h4 id="cors">CORS</h4> 
If you are loading images from external sources (e.g. from an AWS bucket), you need to first configure <b>Cross-Origin Resource Sharing</b> for both the server and the image. <br><br>
Otherwise, you will see errors such as <br>
<b><em>Failed to execute 'texImage2D' on 'WebGLRenderingContext': The cross-origin image at [...] may not be loaded.</em></b> <br>
or <br>
<b><em> Unable to get image data from canvas because the canvas has been tainted. </em></b> <br>
<br>
Please follow the instructions on how to properly configure CORS <a href="{{site.baseurl}}/guides/html5/v5/introduction/faq/cors">here</a>.
</div>

## Ready to go!

This is all that is necessary to get PhotoEditor SDK up and running. Now all you have to do is launch a webserver.

- Run `npx parcel index.html`.
- Then open `http://localhost:1234/` to see yout app.

Note: (npx comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))

There you have it. PhotoEditor SDK for the Web is ready to use. Refer to the [configuration documentaion]({{site.baseurl}}/guides/html5/v5/introduction/configuration) for more configuration options.

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}
