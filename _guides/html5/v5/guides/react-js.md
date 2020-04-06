---
layout: guides/content
title: &title Getting Started - React JS
description: Getting srted integration tutorial

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

We will be using use [create-react-app](https://create-react-app.dev/docs/getting-started/) for simplicity.

##### Create a project

- Start a new project with `create-react-app`

```bash

npx create-react-app my-app
cd my-app
npm run start

```
Note: (npx comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))

- Then open `http://localhost:3000/` to see yout app.


##### Installing peer dependencies

PhotoEditor SDK needs following peer dependencies:
  1. React >= 16.3
  1. React DOM >= 16.3
  1. Styled Components >= 4.4

React and React DOM are already insalled using Create React App.

- Run `npm install --save styled-components@^4.4` to include Styled Components in the project.

##### Installing PhotoEditor SDK

- Run `npm install --save photoeditorsdk@5.0.0-rc-3`.

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

- Copy the `assets` from `node_modules/photoeditorsdk` to `public`.

##### Creating an Editor component

```js
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

export class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor()
  }
  async initEditor() {
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      image: '../example.jpg', // Image url or Image path relative to assets folder
      license: ''
    })
    console.log('PhotoEditorSDK for Web is ready!')
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log('Exported ', imageSrc)
    })
  }

  render() {
    return (<div role="PhotoEditor SDK" id="editor" style={{ width: '100vw', height: '100vh' }} />)
  }
}

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
There you have it. PhotoEditor SDK for the Web is ready to use. Refer to the [configuration documentaion]({{site.baseurl}}/guides/html5/v5/introduction/configuration) for more configuration options.

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}

