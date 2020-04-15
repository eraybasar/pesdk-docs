---
layout: guides/content
title: &title Getting Started - Rails
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

We will be using [rails](https://guides.rubyonrails.org/getting_started.html) for simplicity.

##### Create a project

- Start a new project by following the `rails` prompts

```bash
rails new my-app
cd my-app
rails s
```

- Then open `http://localhost:3000/` to see your app.

##### Installing peer dependencies

PhotoEditor SDK needs following peer dependencies:

1. React >= 16.3
2. React DOM >= 16.3
3. Styled Components >= 4.4

- Run `yarn add react@16.3 react-dom@16.3 styled-components@4.4` to include them in the project.

##### Installing PhotoEditor SDK

- Run `yarn add photoeditorsdk@5.0.0`.

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

Use the `rails` to generate the scaffold for your controller.

```bash
rails generate controller home index
```

Then file can be accessed with `http://localhost:3000/home/index`.

###### `app/views/home/index.html.erb`

```html
<!-- PESDK Demo Integration -->
<div
  id="pesdk"
  style="width: 100vmin; height: 75vmin; padding: 0px; margin: 0px"
></div>
```

###### `app/javascript/packs/application.js`

```js
...
import { PhotoEditorSDKUI } from 'photoeditorsdk'

window.onload = function () {
  PhotoEditorSDKUI.init({
    license: 'license-string', // <-- Please replace this with the content of your license file. The JSON-object must be in string format.
    container: '#pesdk',
    image: './example.jpg'
  })
}
...
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
