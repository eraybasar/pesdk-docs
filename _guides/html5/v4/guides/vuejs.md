---
layout: guides/content
title: &title Vue.js # title as shown in the menu and
description: Learn how to get started with the PhotoEditor SDK and Vue.js and how to swiftly integrate the SDK into an Vue application with this Quick Start.

platform: html5
version: v4
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor
  - html5
  - vuejs
published: true
---


![Logo]({{ site.baseurl }}/assets/images/quickstarts/vuejs/logo.png){: height="150px" .center-image}


# Getting Started with Vue.js

> PhotoEditor SDK Vue.js wrapper

The source code of the plugin can be found [here](https://github.com/imgly/pesdk-wrapper-vuejs).

## 🔧 Installation

```bash
yarn add vue-pesdk photoeditorsdk react react-dom
```

`photoeditorsdk`, `react` and `react-dom` are peerDependencies and are needed to render the PhotoEditorSdk Ui.
In addition you need the PhotoEditorSDK assets. You can either get them [here](https://github.com/imgly/pesdk-html5-build/tree/master/assets) or copy it from your `node_modules` into your public asset folder. And set the `assetPath` prop to this folder.

If you scaffold your project with Vue CLI you can just cp the asset folder from `node_modules`.
```bash
cp -r node_modules/photoeditorsdk/assets/ ~/projects/your-project/static/
```

## 👈 Usage

Import the PhotoEditorSDK css styles and the vue-sdk component.


```html
<template>
  <PhotoEditor
    asset-path="/static"
    license="{"owner": ...}"
    image-path="/static/example.jpg"
  />
</template>

<script>
  import 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.min.css'
  import 'photoeditorsdk/css/PhotoEditorSDK.UI.ReactUI.min.css'
  import PhotoEditor from 'vue-pesdk'

  export default {
    components: { PhotoEditor }
  }
</script>
```

## 📒 Props

| prop | default | type | required | description
|---|---|---|---|---|
| ui | 'react' | String | no | Select if you want to use the DesktopUi or ReactUi. Supported values are `react` and `desktop`.
| license | '' | String | **yes** | Your PhotoEditorSdk license
| imagePath | '' | String | **yes** | Path to the image that will be rendered initially
| assetPath | 'static' | String | no | Path to your assets. Where the PhotoEditorSdk assets are stored
| assetResolver |  | String | no | A function that gets called for every asset. Can turn an asset path into another path. Useful for stuff like Rails’ asset pipeline.
| editorOptions |  | Object | no | Extended configuration options for the editor object https://docs.photoeditorsdk.com/guides/html5/v4/introduction/configuration
| options |  | Object | no | Extended configuration options https://docs.photoeditorsdk.com/guides/html5/v4/introduction/configuration

## Getting Started

The idea behind this wrapper is to simplify the usage of the PhotoEditorSDK inside Vue. We try to minimize the configuration and maximize the possibilities.
Because of that you have only 3 important and required props, `license`, `imagePath` and `assetPath` to get the editor running.

You have however to either download or copy the PhotoEditorSDk assets to your public asset folder. You can either get them [here](https://github.com/imgly/pesdk-html5-build/tree/master/assets) or copy it from your `node_modules`.

If you need more configuration possibilites, you can pass all the mentioned [options](https://docs.photoeditorsdk.com/guides/html5/v4/introduction/configuration) to the `editorOptions` or `options` prop.

Furthermore, the editor instance is saved as a Vue Instance Property so you can access the editor instance inside your parent component with `this.$pesdk` after the editor is mounted.

## 📺 Examples

### Basic Example

```html
<template>
  <PhotoEditor
    asset-path="/assets"
    :license="PesdkLicense"
    image-path="/assets/example.jpg"
  />
</template>

<script>
  import PhotoEditor from 'vue-pesdk'
  import PesdkLicense from './myLicense' // Needs to be passed as a string

  export default {
    components: { PhotoEditor },
  }
</script>
```

### Listen to Events

You can listen to various events in the [PhotoEditorSdk](https://docs.photoeditorsdk.com/guides/html5/v4/concepts/events)
You can simply attach an `.on()` event to the editor instance.

```html
<template>
  <PhotoEditor
    asset-path="/assets"
    :license="$options.license"
    image-path="/assets/example.jpg"
  />
</template>

<script>
  import PhotoEditor from 'vue-pesdk'
  import PesdkLicense from './myLicense.json'

  export default {
    components: { PhotoEditor },
    license: JSON.strigify(PesdkLicense), // This is optional way to store non-reactive data in vue.
    mounted () {
      this.$pesdk.on('export', (result) => {
        console.log('User clicked export, resulting image / dataurl:')
        console.log(result)
      })
    }
  }
</script>
```

### Specifying which focus modes are available

Like mentioned earlier you can pass in all configuration options like here: https://docs.photoeditorsdk.com/guides/html5/v4/features/focus

```html
<template>
  <PhotoEditor
    asset-path="/assets"
    :license="$options.license"
    :editorOptions="customOptions"
    :options="{logLevel: 'tracce'}"
    image-path="/assets/example.jpg"
  />
</template>

<script>
  import PhotoEditor from 'vue-pesdk'
  import PesdkLicense from './myLicense.json'

  export default {
    components: { PhotoEditor },
    license: JSON.strigify(PesdkLicense), // This is optional.
    data: () => ({
      customOptions: {
        controlsOptions: {
          focus: {
            availableModes: ['radial', 'mirrored', 'linear', 'gaussian']
          }
        }
      }
    })
  }
</script>
```
