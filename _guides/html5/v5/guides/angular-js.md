---
layout: guides/content
title: &title Getting Started - Angular JS
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

We will be using [angular cli](https://cli.angular.io/) for simplicity.

##### Create a project

- Start a new project by following the `angular cli` prompts

```bash

ng new my-app
cd my-app
ng serve

```

- Then open `http://localhost:4200/` to see your app.

##### Installing peer dependencies

PhotoEditor SDK needs following peer dependencies:

1. React >= 16.3
2. React DOM >= 16.3
3. Styled Components >= 4.4

- Run `npm install --save react@16.3 react-dom@16.3 styled-components@4.4` to include them in the project.
- Run `npm install --save-dev @types/react@16.3 @types/react-dom@16.3` to include the types in the project.
- Add `"allowSyntheticDefaultImports": true` to the `compilerOptions` in `tsconfig.json` in order to compile React.

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

- Copy the contents from `node_modules/photoeditorsdk/assets` to `src/assets/photoeditorsdk`.

##### Creating an Editor component

Use the `angular cli` to generate the scaffold for your editor component.

```bash
ng generate component photo-editor
```

###### photo-editor.component.html

```html
<div #psdkContainer style="width: 100vw; height: 100vh;"></div>
```

###### photo-editor.component.ts

```ts
import { Component, AfterViewInit, ViewChild, Input } from "@angular/core";
import { PhotoEditorSDKUI } from "photoeditorsdk";

/* React Magic */
import * as React from "react";
import * as ReactDom from "react-dom";

declare global {
  interface Window {
    React: any;
    ReactDom: any;
  }
}

window.React = window.React || React;
window.ReactDom = window.ReactDom || ReactDom;

const license = "";

@Component({
  selector: "app-photo-editor",
  templateUrl: "./photo-editor.component.html",
})
export class PhotoEditorComponent implements AfterViewInit {
  constructor() {}

  @Input() src: string;
  @ViewChild("psdkContainer", { static: false }) container;

  editor;

  ngAfterViewInit() {
    this.instantiateEditor();
  }

  async instantiateEditor() {
    try {
      this.editor = await PhotoEditorSDKUI.init({
        license,
        container: this.container.nativeElement,
        image: this.src,
        assetBaseUrl: "/assets/photoeditorsdk",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
```

##### Add the component to the app

###### app.component.html

```html
<app-photo-editor
  src="https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg"
></app-photo-editor>
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
