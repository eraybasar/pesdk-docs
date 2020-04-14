---
layout: guides/content
title: &title Getting Started - Vue JS
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

We will be using [vue cli](https://cli.vuejs.org/guide/creating-a-project.html) for simplicity.

##### Create a project

- Start a new project by folowing the `vue cli` prompts.

```bash

vue create my-app
cd my-app
npm run serve

```

- Then open `http://localhost:8080/` to see your app.

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

- Copy the `assets` from `node_modules/photoeditorsdk` to `public`.

##### Creating an Editor component

In `src/components` create the `PhotoEditor.vue` file.

```html
<template>
  <div ref="container" style="width: 100vw; height: 100vh;" />
</template>

<script>
import React from "react";
import ReactDom from "react-dom";
import Vue from "vue";
import { PhotoEditorSDKUI } from "photoeditorsdk";

window.React = window.React || React;
window.ReactDom = window.ReactDom || ReactDom;

const supportedUis = ["advanced", "basic"];
const supportedThemes = ["dark", "light"];

export default {
  name: "PhotoEditor",
  props: {
    layout: {
      type: String,
      default: "advanced",
      validator: (value) => supportedUis.some((type) => type === value),
    },
    theme: {
      type: String,
      default: "dark",
      validator: (value) => supportedThemes.some((type) => type === value),
    },
    license: {
      type: String,
      required: true,
      default: "",
    },
    imagePath: {
      type: String,
      required: true,
      default: "",
    },
    assetPath: {
      type: String,
      default: "assets",
    },
    options: {
      type: Object,
    },
  },
  data: () => ({
    editor: null,
    image: null,
  }),
  watch: {
    layout() {
      this.renderUi();
    },
  },
  created() {
    this.image = new Image();
    if (this.imagePath) {
      this.image.onload = this.renderUi.bind(this);
      this.image.src = this.imagePath;
    }
  },
  methods: {
    renderUi() {
      new PhotoEditorSDKUI.init({
        ...this.options,
        image: this.image,
        layout: this.layout,
        theme: this.theme,
        container: this.$refs.container,
        engine: {
          license: this.license,
        },
        assetBaseUrl: this.assetPath,
      }).then((editor) => {
        this.editor = editor;
        /**
         * Save the editor instance as a vue instance property
         * so you are able to access it from anywhere with
         * `this.$pesdk` and listen on events.
         */
        Vue.prototype.$pesdk = this.editor;
      });
    },
  },
};
</script>
```

Add the Component to the `App.vue` file.

```html
<template>
  <div id="app">
    <PhotoEditor :layout="layout" :license="license" :image-path="path" />
  </div>
</template>

<script>
import PhotoEditor from './components/PhotoEditor.vue';
// import { UIEvent } from 'photoeditorsdk';

const myLicense = ''; // replace this with the content of your license file

export default {
  name: 'App',
  components: {
    PhotoEditor
  },
  data: () => ({
    layout: 'advanced',
    license: myLicense,
    path: 'example.jpg'
  }),
  mounted() {
    this.$pesdk.on(UIEvent.EXPORT, result => {
      // eslint-disable-next-line
      console.log(result);
    });
    this.$pesdk.on(UIEvent.EDITOR_READY, () => {
      // You can also access the editor and call functions on it
      // directly if you need to.
      this.$pesdk.getEditor();
    });
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
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
