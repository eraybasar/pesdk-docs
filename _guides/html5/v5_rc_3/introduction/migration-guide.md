---
layout: guides/content
title: &title Migration Guide
description: PhotoEditor SDK for HTML5 can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: *title
order: 4
platform: html5
version: v5_rc_3
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

This is a reference for upgrading your site from PhotoEditor SDK v4 to v5. While there's a lot covered here, you probably won't need to do everything for your site. We'll do our best to keep things easy to follow, and as sequential as possible so you can quickly get rocking on v5!

We will be supporting two UIs as before, but we are now moving away from the terminology DesktopUI and ReactUI, instead now they are called AdvancedUI and BasicUI. Refer to the [UIs]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/ui) documentation for more information.

## Update dependencies

You need to update your `package.json` file in order to use the latest version of `phototeditorsdk`.

```diff
  "dependencies": {
-    "photoeditorsdk": "^4.20.0"
+    "photoeditorsdk": "~5.0.0"
  }
```

Update the React and React DOM Version. It was increased from `^15.0.0` to `^16.3.0`. This allows us to rely on the Context API. It also needs to have a new peer dependency `styled-components@^4.4.0`


```diff
  "dependencies": {
-    "react": "^15.0.0"
-    "react-dom": "^15.0.0"
+    "react": "^16.3.0"
+    "react-dom": "^16.3.0"
+    "styled-components": "^4.4.0"
  }
```
## Handling breaking changes
### Updating imports
```diff
- import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
- import Styles from 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
+ import { PhotoEditorSDKUI } from 'photoeditorsdk'

```

If you are directly rendering a React component

```diff
- import PhotoEditorUI from 'photoeditorsdk/desktop-ui'
+ import { PhotoEditorSDKUIComponent } from 'photoeditorsdk'
```


### Updating configuration

While we tried to minimize the number of breaking changes and make it backward compatible as much as possible, we believe that some breaking changes in the configuration were required.

However, to make the migration easier we have written some mapper scripts, input your v4 configuration here and get the configuration or localization for v5 automatically generated.

You can use our converter [here]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/converter/config).

```diff
- const editor = new PhotoEditorUI(config)
+ const editor = new PhotoEditorSDKUI(config)

```

If you are directly rendering the React component

```diff
- <PhotoEditorUI.ReactComponent {...config} />
+ <PhotoEditorSDKUIComponent {...config} />
```

Although the mapper maps your old configuration to the new one, we highly recommend you to go and check the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) documentation. There are now a lot of new configurations and customizations available.

### Handling events

Renaming UI events. Some of the previously supported events are now deprecated. Refer to the [events]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/events) documentation for more information.

```diff
+  import { UIEvent } from 'photoeditorsdk'

-  editor.on(PhotoEditorUI.Events.EDITOR_READY, () => {
+  editor.on(UIEvent.EDITOR_READY, () => {

```

If you are directly rendering the React component, handling of the event is done in the similar way.

```diff
+  import { UIEvent } from 'photoeditorsdk'

public componentDidMount() {
  const ui = this.pesdk.current.ui
-  ui.on(PhotoEditorUI.Events.EDITOR_READY, () => {
+  ui.on(UIEvent.EDITOR_READY, () => {

}
```

## Canvas Renderer
Hitherto we supported two rendering engines for PhotoEditor SDK UI i.e., WebGL and Canvas. Considering browser support we will here-forth be supporting only WebGL.
