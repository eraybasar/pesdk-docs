---
layout: guides/content
title: &title Force Crop # title as shown in the menu and

menuitem: *title
order: 0
platform: html5
version: v4
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

You can force the user to crop the input image to one of a set of predefined ratios before
he can do any additional editing to it. This is can be done by passing the option `forceCrop` to the editor, and setting the `availableRatios` of the transform tool to the desired allowed ratios:

{% capture first_snippet %}
DesktopUI
---
```js
var editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    forceCrop: true,
    controlsOptions: {
      transform: {
         availableRatios: ['imgly_transform_common_4-3', 'imgly_transform_common_16-9']
      }
    }
  }
})
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```js
var editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    forceCrop: true,
    controlsOptions: {
      transform: {
         availableRatios: ['imgly_transform_common_4-3', 'imgly_transform_common_16-9']
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

All other tools, except the library, when enabled, are disabled until the user accepts a crop transform with one of the given values.

{% comment %}

## Interactive Example

Try the conceps above in the interactive editor below. You can edit the source code and see the results by clicking on the 'reload' button.

{% capture code %}
window.onload = function () {
        PhotoEditorSDK.Loaders.ImageLoader.load('{{ site.baseurl }}/assets/images/shared/test.png')
          .then((image) => {
            let container = document.getElementById('editor')
            let options = {
              container: container,
              license: PESDK_LICENSE_STRING,
              editor: {
                image: image,
                forceCrop: true,
                controlsOptions: {
                  transform: {
                    availableRatios: ['imgly_transform_common_4-3', 'imgly_transform_common_16-9']
                  }
                }
              },
              assets: {
                baseUrl: PESDK_ASSETS_URL
              }
            }
            let editor = new PhotoEditorSDK.UI.DesktopUI(options)
        })
      }
{% endcapture %}
{% capture identifier %}{{page.title}}-{{page.version}}-EXAMPLE-01{% endcapture %}
{% include pesdk_html5_editor.html code=code identifier=identifier %}

{% endcomment %}