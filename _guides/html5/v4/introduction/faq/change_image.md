---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: html5
version: v4
tags: &tags # tags that are necessary
  - photo editor
published: true
faq: true
faq-category: general
order: 0
title: Changing the current Image
---

You can change the currently loaded image with the [setImage]({{site.baseUrl}}/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.html#setImage) function. 

Make sure that your image has finished loading before you pass it to the editor. This also applies when creating the editor for the first time. 

The following example assumes that the editor has already been initialized and assigned to the `editor` variable.

{% capture first_snippet %}
DesktopUI
---
```js
var image = new Image()
image.onload = function () {
    editor.setImage(image)
}
// image.crossOrigin = 'Anonymous'  // Setup CORS accordingly if needed
image.src = '...'
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```js
var image = new Image()
image.onload = function () {
    editor.setImage(image)
}
// image.crossOrigin = 'Anonymous'  // Setup CORS accordingly if needed
image.src = '...'
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
