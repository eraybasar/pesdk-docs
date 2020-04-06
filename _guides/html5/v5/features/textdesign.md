---
layout: guides/content
title: &title Text Design # title as shown in the menu and
description: The Text Design Tool merges input text with typography, creating stunning designs for a multitude of use-cases.
menuitem: *title
order: 9
platform: html5
version: v5
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->

{% capture image_advanced_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-dark/{{page.title | downcase | remove: " "}}.png
{% endcapture %}
{% capture image_advanced_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-light/{{page.title | downcase  | remove: " "}}.png
{% endcapture %}
{% capture image_basic_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-dark/{{page.title | downcase  | remove: " "}}.png
{% endcapture %}
{% capture image_basic_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-light/{{page.title | downcase  | remove: " "}}.png
{% endcapture %}

{% assign images = "" | split: "" | push: image_advanced_dark | push: image_advanced_light | push: image_basic_dark | push: image_basic_light %}
{% include image_carousel.html images=images %}

The text design tool merges input text with typography, creating stunning designs for a multitude of use-cases. The tool lays out input text according to recipes crafted by professional designers upon a single tap. Furthermore, the creative can then be fine-tuned by choosing from 15 different text colors or by using the randomize functionality that shuffles the fonts, alignments and decorations. It’s even possible to create a mask that lets the background image shine through.

## Specifying the available text design

This example shows the default text design tool configuration.
In order to enable or disable specific text design layouts, simply pass the `items` option to the text design tool configuration. The items will be displayed in the order mentioned by the configuration. Here is the list of default text design items.

```js
const editor = await PhotoEditorSDKUI.init({
  textdesign: {
    items: [
      { identifier: "imgly_text_design_blocks" },
      { identifier: "imgly_text_design_rotated" },
      { identifier: "imgly_text_design_blocks_light" },
      { identifier: "imgly_text_design_equal_width" },
      { identifier: "imgly_text_design_masked" },
      { identifier: "imgly_text_design_celebrate" },
      { identifier: "imgly_text_design_sunshine" },
      { identifier: "imgly_text_design_masked_badge" },
      { identifier: "imgly_text_design_blocks_condensed" },
      { identifier: "imgly_text_design_celebrate_simple" },
      { identifier: "imgly_text_design_equal_width_fat" },
      { identifier: "imgly_text_design_watercolor" },
      { identifier: "imgly_text_design_particles" },
      { identifier: "imgly_text_design_masked_speech_bubble" },
      { identifier: "imgly_text_design_masked_speech_bubble_comic" },
      { identifier: "imgly_text_design_multiline" },
    ]
  },
})
```

## Localization

You can override all the labels used in text design tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/localization), below are the default text design localization lables.

```js
await PhotoEditorSDKUI.init({
  //...,
  custom: {
    languages: {
      en: {
        //...,
        textdesign: {
          title: 'Text Design',
          controls: {
            buttonNew: 'New Text Design',
            buttonShuffle: 'Shuffle Text Design',
            selectColor: 'Text Color',
            tabColor: 'Color',
            tabShuffle: 'Shuffle',
          },
          canvasControls: {
            placeholderText: 'Write Something',
            buttonSave: 'Done',
            buttonClose: 'Schließen',
            inputText: 'Text Input',
          },
          canvasActions: {
            buttonEdit: 'Edit',
            buttonInvert: 'Text as Mask',
            buttonDelete: 'Delete',
            buttonBringToFront: 'Move to top',
            buttonDuplicate: 'Duplicate',
          },
          history: {
            add: 'Text design',
            edit: 'Text design edit',
            resize: 'Text design resize',
            position: 'Text design position',
            color: 'Text design color',
            shuffle: 'Text design shuffle',
            invert: 'Text design invert',
            padding: 'Text design padding',
            order: 'Text design order',
            delete: 'Text design delete',
          },
        }
      }
    }
  }
})
 

```
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
