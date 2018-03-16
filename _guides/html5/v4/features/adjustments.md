---
layout: guides/content
title: &title Adjustments # title as shown in the menu and
description: The Adjustment tool set of the PhotoEditor SDK for HTML5 offers essential and advanced editing functions like Brightness, Contrast, Saturation or Exposure.
menuitem: Adjustments
order: 2
platform: html5
version: v4
category:
  - guide
  - feature
tags:
  - photo editor
published: true # Either published or not
---

<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->

{% capture image_desktop %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg
{% endcapture %}
{% capture image_react %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}_react.jpg
{% endcapture %}

{% assign images = "" | split: "" | push: image_desktop | push: image_react %}
{% include image_carousel.html images=images %}

Our Adjustment tool is our swiss army knife for image optimization. It offers essential functions like brightness and contrast, while allowing more expert users to fine tune highlights, shadows and clarity.

# Specifying which adjustments are available

In order to enable or disable specific adjustments, simply pass the `availableAdjustments` option to
the adjustments controls. This option should be an array of adjustment identifiers of which the following
are available: `brightness`, `saturation`, `contrast`, `gamma`, `clarity`, `exposure`, `shadows`, `highlights`


{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      adjustments: {
        availableAdjustments: ['brightness', 'saturation', 'contrast']
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet  %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

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
                controlsOptions: {
                  adjustments: {
                    availableAdjustments: ['brightness', 'saturation', 'contrast']
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
