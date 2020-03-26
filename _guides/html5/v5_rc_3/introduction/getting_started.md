---
layout: guides/content
title: &title Getting Started
description: A quick guide on how to easily get started with PhotoEditor SDK for HTML5. Your kick-off to delight your users with top-notch editing capabilities.
order: 0
menuitem: *title
platform: html5
version: v5_rc_3
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

## Integration Tutorial


Integrating our editor into your web application is easy as pie. However, if you can't wait  to see the editor in action you can find a working demo integration [here](https://www.photoeditorsdk.com/html5-demo).

<div class="documentation__disclaimer">
<h4 id="license-terms">Using a Trial License</h4>
Make sure you have a standard license before adding it properly to your running project. A trial license is valid for only 30 days and will afterwards disable the export function for your customers. Your trial license should therefore be removed and substituted by a standard license. More information can be found <a href="{{site.baseUrl}}/guides/html5/v5_rc_3/introduction/faq/standard_or_trial_license">here</a>.
</div>

__Note:__ Since we're working with the latest web technologies, all code samples are using the
ECMAScript 6 standard. If you're using an older ECMAScript / JavaScript standard, please use
[Babel](http://babeljs.io/) to compile the examples to ES5.

## Let's get started!

We will be using use [parcel-js](https://parceljs.org/) for simplicity.

##### Create a project

- Start a new project in an empty directory by running `npm init`.
- A `package.json` file will be created, with minimal information about the project.

##### Installing peer dependencies

PhotoEditor SDK needs following peer dependencies:
  1. React >= 16.3
  1. React DOM >= 16.3
  1. Styled Components >= 4.4


- Run `npm install --save react@^16.3 react-dom@^16.3 styled-components@^4.4` to include them in the project.


##### Installing PhotoEditor SDK

- Run `npm install photoeditorsdk@~5.0.0`.

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
1. `assets`: It contains all assets required for the PhotoEditor, this includes for example assets for *frames*, *stickers* and the *ui*.
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  </body>
  </html>
```
- Create a `<div>` tag as a container for the editor. The editor will adapt its size according to the dimensions of the container. For the sake of simplicity, specify the dimensions using inline styles.

```diff
<body>
+   <div id="editor" style="width: 100vw; height: 100vh;"></div>
</body>
```

##### Initialize the editor

- Finally, in order to initialize the editor, instantiate the UI using JavaScript. Create a `index.js` in the root of the project.

```js
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'
import imagePath from './example.png' // image path to be loaded

window.onload = () => {
  const image = new Image()
  image.onload = function () {
    const editor = new PhotoEditorSDKUI({
      container: document.getElementById("editor"),
      image: image,
      engine: {
        license: ""
      }
    })
    editor.on(UIEvent.EDITOR_READY, () => {
      console.log('PhotoEditor SDK for Web is ready!')
    })
  }
  image.crossOrigin = 'Anonymous'  // Setup CORS accordingly if needed
  image.src = imagePath
}

```

- Include the `index.js` script in our html file

```diff
<body>
  <div id="editor" style="width: 100vw; height: 100vh;"></div>
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
Please follow the instructions on how to properly configure CORS <a href="{{site.baseurl}}/guides/html5/v5_rc_3/introduction/faq/cors">here</a>.
</div>

## Ready to go!
This is all that is necessary to get PhotoEditor SDK up and running. Now all you have to do is launch a webserver.

- Run `npx parcel index.html`.
- Now open `http://localhost:1234/` in your browser.


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}


In any case, you can find a working demo integration [here](https://www.photoeditorsdk.com).

## Questions ?

This guide shows you how to integrate our editor into your own application. If you run into any error messages or other problems during this process or should you have further questions about the editor itself, then please take a look at our [FAQ]({{site.baseurl}}/guides/html5/v5_rc_3/introduction/faq/overview) page, which offers answers to the most common questions and errors you might run into.

If the [FAQ]({{site.baseurl}}/guides/html5/v5_rc_3/introduction/faq/overview) page doesn't answer your questions, please [contact us](https://support.photoeditorsdk.com) and we will be more than happy to help!

Moreover, if you are looking for examples with other JavaScript frameworks, visit the [demo]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/introduction/demos) listing page.