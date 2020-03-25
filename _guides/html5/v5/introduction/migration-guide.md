---
layout: guides/content
title: &title Migration Guide
description: The PhotoEditor SDK for HTML5 can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: *title
order: 4
platform: html5
version: v5
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

This is a reference for upgrading your site from PhotoEditorSDK v4 to v5. While there's a lot covered here, you probably won't need to do everything for your site. We'll do our best to keep things easy to follow, and as sequential as possible so you can quickly get rocking on v5!

## Update dependancies

You need to update your package.json to use the latest version of `phototeditorsdk`.

```json
{
  "dependencies": {
    "photoeditorsdk": "~5.0.0"
  }
}
```

Update React Version, React version was was increased from `react@^15.0.0` to `react@^16.3.0`. This allows us to rely on the Context API. It also needs to have a new peer dependancy `styled-components@^4.4.0`


## Handling breaking changes
### Updating imports
```js
- import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
- import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
+ import { PhotoEditorSDKUI } from 'photoeditorsdk'

```

if you are directly rendering the react component
```js
- import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
+ import { PhotoEditorSDKUIComponent } from 'photoeditorsdk'
```


### Updating configuration

You can use our [Converter]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/converter/config).

You can use our [Language Converter]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/converter/language).

While we tried to minimize the number of breaking changes and make it backward compatible as much as possible, we believe that some breaking changes in the configuration were required. However, to make the migration easier we have written some mapper scripts, input your configuration or localization here and get the configuration or localization for v5.

```js
- const editor = new PhotoEditorUI(config)
+ const editor = new PhotoEditorSDKUI(config)

```

if you are directly rendering the react component

```js
- <PhotoEditorUI.ReactComponent {...this.config} />
+ <PhotoEditorSDKUIComponent {...this.config} />
```

Although the mapper maps your old configuration to the new one, we highly recommend you to go and check the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) documentation. There's whole lot of new configurations and customizations are available.

### Handling events

Renaming UI events. Some of the previously supported events are now deprecated. Refer to the [events]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/concepts/events) documentation for more information.

```js
+ import { UIEvent } from 'photoeditorsdk'

- editor.on(PhotoEditorUI.Events.EDITOR_READY, () => {
+ editor.on(UIEvent.EDITOR_READY, () => {

})
```

if you are directly rendering the react component, handling of the event is done the same way.

```js
public componentDidMount() {
  const ui = this.pesdk.current.ui
  ui.on(PhotoEditorUI.Events.EDITOR_READY, () => {

  })
}
```

## Canvas Renderer
Hitherto we supported two rendering engines for PhotoEditor SDK UI i.e., WebGL and Canvas. Considering browser support we will here-forth be supporting only WebGL.