---
layout: guides/content
title: &title Force Crop # title as shown in the menu and

menuitem: *title
order: 4
platform: html5
version: v5
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

You can force the user to crop the input image to one of a set of predefined ratios before
he can do any additional editing to it. This is can be done by passing the option `forceCrop` to the editor, and setting the transform categories of the transform tool to the desired allowed ratios:

```js
var editor = new PhotoEditorSDKUI({
  forceCrop: true,
  transform: {
    categories: {
      {
        identifier: 'imgly_transforms_common',
        items: [
          { identifier: 'imgly_transform_common_4-3' },
          { identifier: 'imgly_transform_common_16-9' }
        ]
      }
    }
  }
})
```
It will load transform tool as default, if the image ratio doesn't match any of the ratios provided in config.