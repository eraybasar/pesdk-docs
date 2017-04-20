---
layout: guides/android/v3_1/content
title: &title Events # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
# Events

The UI emits events that let you know what happens inside the editor. Most users use these events
for monitoring and analytics. You can listen to them by calling the UI's `on` method:

```js
const editor = new PhotoEditorSDK.UI.NightReact(/* ... */)
editor.on('export', (result) => {
  console.log('User clicked export, resulting image / dataurl:')
  console.log(result)
})
```

See the [documentation](http://static.photoeditorsdk.com/docs/android/PhotoEditorSDK.UI.NightReact.html#$subsection:events) for available UI events.

Some people use the `export` event to find out which operations the user has applied to the image:

```js
const editor = new PhotoEditorSDK.UI.NightReact(/* ... */)
editor.on('export', (result, editor) => {
  // User has clicked export, find out what operations he used
  const stack = editor.getOperationsStack()
  console.log('User used operations:')
  stack.forEach((operation) => {
    console.log(operation.constructor.identifier)
  })
})
```

Example output:

```text
User used operations:
orientation
crop
filter
border
sprite
```
