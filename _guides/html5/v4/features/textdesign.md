---
layout: guides/content
title: &title Text Design # title as shown in the menu and
description: The Text Design Tool merges input text with typography, creating stunning designs for a multitude of use-cases.
menuitem: *title
order: 4
platform: html5
version: v4
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->

{% capture image_desktop %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg
{% endcapture %}

{% assign images = "" | split: "" | push: image_desktop %}
{% include image_carousel.html images=images %}

The Text Design Tool merges input text with typography, creating stunning designs for a multitude of use-cases. The tool lays out input text according to recipes crafted by professional designers upon a single tap. Furthermore, the creative can then be fine-tuned by choosing from 15 different text colors or by using the randomize functionality that shuffles the fonts, alignments and decorations. It’s even possible to create a mask that lets the background image shine through.

# Specifying which text design layouts are available

In order to enable or disable specific layouts, simply pass the `availableLayouts` option to
the text design controls. This option should be an array of focus identifiers. In the snippet below 
all text design layouts are enabled:

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      textdesign: {
        availableLayouts: [
            'imgly_text_design_blocks',
            'imgly_text_design_rotated',
            'imgly_text_design_blocks_light',
            'imgly_text_design_equal_width',
            'imgly_text_design_masked',
            'imgly_text_design_celebrate',
            'imgly_text_design_sunshine',
            'imgly_text_design_masked_badge',
            'imgly_text_design_blocks_condensed',
            'imgly_text_design_celebrate_simple',
            'imgly_text_design_equal_width_fat',
            'imgly_text_design_watercolor',
            'imgly_text_design_particles',
            'imgly_text_design_masked_speech_bubble',
            'imgly_text_design_masked_speech_bubble_comic'
          ]
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
