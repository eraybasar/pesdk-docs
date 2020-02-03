---
layout: guides/content
title: &title Text # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 ships with a robust tool that provides all necessary functions for quickly adding text. Learn how to add custom fonts.
menuitem: *title
order: 4
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

A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.

# Specifying the available fonts

This example shows the default text tool configuration.
In order to enable or disable specific fonts, simply pass the `items` option to the text tool controls. The items will be displyed in the order mentioned by the configuration.

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

You can add new fonts to the existing list of items using same configuration interface as above


# Text Metrics

Due to the lack of support for font measurement and precise layouting, the SDK relies on font metrics from the fonts used in the editor. These are provided for all default fonts and can be easily added along with your custom fonts.

**WARNING**: If you do not provide font metrics for your custom font, the SDK will issue a warning during load and you may experience cut off or jumping text. To quickly collect the required metrics, we recommend the [Opentype Font Inspector](https://opentype.js.org/font-inspector.html). Just upload your font file and extract `unitsPerEm` from the _Font Header table_, as well as `ascender` and `descender` from the _Horizontal Header Table_.

### Adding system fonts

You can simply add system fonts by specifying their font family, which you would also use in CSS, and the variations in which the font should be available.

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

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

### Adding google fonts

The `fonts` option also allows you to add custom fonts from Google Fonts. To do this, add the variation's `provider` option and set it to `google`. This will cause the UI to pre-load the font from Google Fonts.

---
```js
const editor = new PhotoEditorSDKUI({
  text: {
    fonts: [
      ...,
      {
        identifier: 'google-roboto',
        fontFamily: 'Roboto',
        fontWeight: '400',
        textMetrics: {
          unitsPerEm: 2048,
          ascender: 1919,
          descender: -409,
        },
        provider: 'google',
      }
    ]
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

### Adding web fonts

The `fonts` option also allows you to add custom web fonts. To do this, set the variaton's `provider` option to `file` and specify a `filePath`. If the `filePath` is relative, it will be fetched from the `assets/` directory. We recommend adding the web fonts as `.woff` files, which have the widest browser support.

```js
const editor = new PhotoEditorSDKUI({
  text: {
    fonts: [
      {
        identifier: 'this-is-brand-new',
        fontFamily: 'Gaga',
        fontWeight: '400',
        textMetrics: {
          unitsPerEm: 2048,
          ascender: 1919,
          descender: -409,
        },
        fontURI: './fonts/imgly_font_gagalin_regular.woff',
        format: 'woff',
        provider: 'file'
      }
    ]
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Localization

You can override all the labels used in text tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration), below are the default text localisation lables

```json
"text": {
    "title": "Text",
    "controls": {
      "buttonNew": "New Text",
      "dropdownFontFamily": "Font Family",
      "dropdownFontStyle": "Font Style",
      "selectAlignment": "Alignment",
      "selectFontColor": "Font Color",
      "selectBackgroundColor": "Background Color",
      "sliderLineSpacing": "Line Spacing",
      "tabColor": "Color",
      "tabBgColor": "Bg Color",
      "tabAlignment": "Alignment",
      "tabLineHeight": "Line Height",
      "tabFontStyle": "Font Style"
    },
    "canvasControls": {
      "placeholderText": "Write Something",
      "buttonSave": "Done",
      "buttonClose": "Close",
      "inputText": "Text Input"
    },
    "canvasActions": {
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "buttonBringToFront": "Move to top",
      "buttonDuplicate": "Duplicate"
    },
    "history": {
      "add": "Text",
      "edit": "Text edit",
      "resize": "Text resize",
      "position": "Text position",
      "alignment": "Text alignment",
      "textColor": "Text color",
      "backgroundColor": "Text background color",
      "fontFamily": "Font family",
      "fontStyle": "Font style",
      "lineSpacing": "Line spacing",
      "width": "Text width",
      "delete": "Text delete",
      "order": "Text order"
    }
  }
```


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
                  text: {
                    fonts: [
                      {
                        fontFamily: 'Shrikhand', // The font family name, defined by Google Fonts
                        variations: [
                          {
                            identifier: 'shrikhand',
                            provider: 'google',  // This loads the font from Google Fonts
                            textMetrics: { // For best rendering, you'll need to determine the metrics manually
                              unitsPerEm: 1000,
                              ascender: 1026,
                              descender: -432
                            }
                          }
                        ]
                      }
                    ]
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
