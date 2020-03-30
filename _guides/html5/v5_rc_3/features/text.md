---
layout: guides/content
title: &title Text # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 ships with a robust tool that provides all necessary functions for quickly adding text. Learn how to add custom fonts.
menuitem: *title
order: 8
platform: html5
version: v5_rc_3
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->

{% capture image_advanced_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_advanced_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-light/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-light/{{page.title | downcase}}.png
{% endcapture %}

{% assign images = "" | split: "" | push: image_advanced_dark | push: image_advanced_light | push: image_basic_dark | push: image_basic_light %}
{% include image_carousel.html images=images %}

A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of PhotoEditor SDK provides all necessary functions for quickly adding text to any picture. The corresponding font library can easily be exchanged or expanded.

## Specifying the available fonts

In order to enable or disable specific fonts, simply pass the `fonts` option to the text tool configuration. The fonts will be displayed in the order mentioned by the configuration. Here is the list of default fonts.

```js
const editor = new PhotoEditorSDKUI({
  text: {
    fonts: [
      { identifier: "imgly_font_open_sans_bold" },
      { identifier: "imgly_font_aleo_bold" },
      { identifier: "imgly_font_amaticsc" },
      { identifier: "imgly_font_bernier_regular" },
      { identifier: "imgly_font_cheque_regular" },
      { identifier: "imgly_font_gagalin_regular" },
      { identifier: "imgly_font_hagin_caps_thin" },
      { identifier: "imgly_font_intro_inline" },
      { identifier: "imgly_font_lobster" },
      { identifier: "imgly_font_nexa_script" },
      { identifier: "imgly_font_ostrich_sans_black" },
      { identifier: "imgly_font_ostrich_sans_bold" },
      { identifier: "imgly_font_panton_blackitalic_caps" },
      { identifier: "imgly_font_panton_lightitalic_caps" },
      { identifier: "imgly_font_perfograma" },
      { identifier: "imgly_font_trash_hand" },
    ]
  },
})
```

## Adding custom fonts

You can add new fonts to the existing list of items using same configuration interface as above.


### Text Metrics

Due to the lack of support for font measurement and precise layouting, the SDK relies on font metrics from the fonts used in the editor. These are provided for all default fonts and can be easily added along with your custom fonts.

**WARNING**: If you do not provide font metrics for your custom font, the SDK will issue a warning during load and you may experience cut off or jumping text. To quickly collect the required metrics, we recommend the [Opentype Font Inspector](https://opentype.js.org/font-inspector.html). Just upload your font file and extract `unitsPerEm` from the _Font Header table_, as well as `ascender` and `descender` from the _Horizontal Header Table_.

### Adding web fonts

You can simply add system fonts by specifying their font family, which you would also use in CSS, add the variation's `provider` option and set it to `file`. We recommend adding the web fonts as `woff` files, which have the widest browser support.

```js
const editor = new PhotoEditorSDKUI({
  text: {
    fonts: [
      ...,
      {
        identifier: 'custom-font',
        fontFamily: 'Custom Font',
        fontWeight: '400',
        textMetrics: {
          unitsPerEm: 2048,
          ascender: 1919,
          descender: -409,
        },
        fontURI: '..', // path to the font, relative to the font asset directory
        format: 'woff',
        provider: 'file'
      }
    ]
  },
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

### Adding google fonts

The `fonts` option also allows you to add custom fonts from Google Fonts. To do this, add the variation's `provider` option and set it to `google`. This will cause the UI to pre-load the font from Google Fonts.

```js
const editor = new PhotoEditorSDKUI({
  text: {
    fonts: [
      ...,
      {
        identifier: 'google-roboto',
        fontFamily: 'Roboto',
        fontWeight: '400',
        provider: 'google',
      }
    ]
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Localization

You can override all the labels used in text tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/localization), below are the default text localization lables.

```js
new PhotoEditorSDKUI({
  //...,
  custom: {
    languages: {
      en: {
        //...,
          text: {
            title: 'Text',
            controls: {
              buttonNew: 'New Text',
              // Relevant for AdvancedUI
              dropdownFontFamily: 'Font Family',
              dropdownFontStyle: 'Font Style',
              selectAlignment: 'Alignment',
              selectFontColor: 'Font Color',
              selectBackgroundColor: 'Background Color',
              sliderLineSpacing: 'Line Spacing',
               // Relevant for BasicUI
              tabColor: 'Color',
              tabBgColor: 'Bg Color',
              tabAlignment: 'Alignment',
              tabLineHeight: 'Line Height',
              tabFontStyle: 'Font Style',
            },
            canvasControls: {
              placeholderText: 'Write Something',
              buttonSave: 'Done',
              buttonClose: 'Close',
              inputText: 'Text Input',
            },
            canvasActions: {
              buttonEdit: 'Edit',
              buttonDelete: 'Delete',
              buttonBringToFront: 'Move to top',
              buttonDuplicate: 'Duplicate',
            },
            history: {
              add: 'Text',
              edit: 'Text edit',
              resize: 'Text resize',
              position: 'Text position',
              alignment: 'Text alignment',
              textColor: 'Text color',
              backgroundColor: 'Text background color',
              fontFamily: 'Font family',
              fontStyle: 'Font style',
              lineSpacing: 'Line spacing',
              width: 'Text width',
              delete: 'Text delete',
              order: 'Text order',
            },
          }
      }
    }
  }
})

```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}