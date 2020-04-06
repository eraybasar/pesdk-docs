---
layout: guides/content
title: &title Events
description: Understanding how users engage with a product is critical to every business. Learn how to track your user's interactions with PhotoEditor SDK for HTML5.

menuitem: *title
order: 2
platform: html5
version: v5
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The UI emits events that let you know what happens inside the editor. Most users use these events
for dealing with data differently. You can listen to them by calling the UI's `on` method:


```js
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

const editor = new PhotoEditorSDKUI(/* ... */)

editor.on(UIEvent.EXPORT, (result) => {
  console.log('User clicked export, resulting image / dataurl:')
  console.log(result)
})
```

There are four main `UIEvents` available

```js
enum UIEvent {
  EXPORT = 'export', // will be fired when an image is exported
  CLOSE = 'close', // will be fired when the close button on editor UI is clicked
  HISTORY_CHANGE = 'historyChange', // will be fired when history changes
  EDITOR_READY = 'editorReady', // will be fired at the beginning when editor is ready
}
```

