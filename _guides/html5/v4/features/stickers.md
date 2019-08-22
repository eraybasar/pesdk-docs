---
layout: guides/content
title: &title Stickers # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 ships with a preset sticker library containing emoticons and shapes. Learn how to add custom sticker packages to the library.
menuitem: *title
order: 5
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
{% capture image_react %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}_react.jpg
{% endcapture %}

{% assign images = "" | split: "" | push: image_desktop | push: image_react %}
{% include image_carousel.html images=images %}

The PhotoEditor SDK ships with a categorized sticker library whose UI is optimized for exploration and discovery. You can easily leverage the API to complement the library with your custom sticker packages.

## Adding custom stickers

You can add custom sticker categories and stickers by passing them using the `categories` option which should follow our [__Stickers JSON Schema__](#stickers-json-schema).

If `replaceCategories` is set to true, all default categories and stickers are removed. If it is set to `false`, your additional categories and stickers are appended.

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      sticker: {
        categories: [
          {
            identifier: 'some_category',
            defaultName: 'Some Category',
            metaData: {
              backgroundImage: 'stickers/background.png'
            },
            stickers: [
              {
                identifier: 'custom_sticker',
                defaultName: 'Custom Sticker',
                images: {
                  mediaThumb: {
                    uri: 'stickers/thumb/customsticker.png',
                    width: 50,
                    height: 50
                  },
                  mediaBase: {
                    uri: 'stickers/base/customsticker.png',
                    width: 400,
                    height: 400
                  }
                }
              }
            ]
          }
        ],
        replaceCategories: true // `categories` replaces all other categories / stickers
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
const editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    controlsOptions: {
      sticker: {
        categories: [
          {
            identifier: 'some_category',
            defaultName: 'Some Category',
            metaData: {
              backgroundImage: 'stickers/background.png'
            },
            stickers: [
              {
                identifier: 'custom_sticker',
                defaultName: 'Custom Sticker',
                images: {
                  mediaThumb: {
                    uri: 'stickers/thumb/customsticker.png',
                    width: 50,
                    height: 50
                  },
                  mediaBase: {
                    uri: 'stickers/base/customsticker.png',
                    width: 400,
                    height: 400
                  }
                }
              }
            ]
          }
        ],
        replaceCategories: true // `categories` replaces all other categories / stickers
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

### Adding stickers during runtime

There are times when you may want to add stickers to the editor while it's stil
running. For instance a user may upload customized stickers while editing an image.
You can do this on DesktopUI by calling the `addStickers` method of the
[`PhotoEditorSDK.UI.DesktopUI.Editor`](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.Editor.html) class. For this you must have at least one
custom sticker category added in `controlsOptions.stickers`, like in the
previous example. Expanding on the last snippet:

{% capture first_snippet %}
DesktopUI
---
```js
const sticker = {
  identifier: 'other_custom_sticker',
  defaultName: 'Other Custom Sticker',
  images: {
    mediaThumb: {
      uri: 'stickers/thumb/other_customsticker.png',
      width: 50,
      height: 50
    },
    mediaBase: {
      uri: 'stickers/base/other_customsticker.png',
      width: 400,
      height: 400
    }
  }
}

editor.getEditor().addSticker('some_category', sticker)
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

This will add a new sticker called 'Other Custom Sticker' to the 'some_category' sticker
category.

## Specifying the available stickers

Per default, all existing stickers (including your own) are available to the user. To make only specific stickers available to the user, use the `availableStickers` option.


{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      sticker: {
        availableStickers: [
          'imgly_sticker_emoticons_alien',
          'imgly_sticker_emoticons_angel',
          'custom_sticker'
        ]
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
const editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    controlsOptions: {
      sticker: {
        availableStickers: [
          'imgly_sticker_emoticons_alien',
          'imgly_sticker_emoticons_angel',
          'custom_sticker'
        ]
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

### Stickers JSON Schema

In order to correctly use stickers in our UI, you need to follow our Stickers JSON Schema:

```json
{
  "version": "2.0",
  "categories": [{
    "identifier": "imgly_sticker_emoticons",
    "defaultName": "Emoticons",
    "metaData": {
      "backgroundImage": "stickers/background.png"
    },
    "stickers": [{
      "identifier": "imgly_sticker_emoticons_alien",
      "defaultName": "Alien Emoticon",
      "images": {
        "mediaThumb": {
          "uri": "https://xxxxxxxxxx",
          "width": 100,
          "height": 100
        },
        "mediaMedium": {
          "uri": "https://xxxxxxxxxx",
          "width": 500,
          "height": 500
        },
        "mediaBase": {
          "uri": "https://xxxxxxxxxx",
          "width": 2136,
          "height": 3216
        }
      }
    }, {
      "identifier": "imgly_sticker_emoticons_angel",
      "defaultName": "Angel Emoticon",
      "images": {
        "mediaThumb": {
          "uri": "https://xxxxxxxxxx",
          "width": 100,
          "height": 100
        },
        "mediaMedium": {
          "uri": "https://xxxxxxxxxx",
          "width": 500,
          "height": 500
        },
        "mediaBase": {
          "uri": "https://xxxxxxxxxx",
          "width": 2136,
          "height": 3216
        }
      }
    }]
  }]
}
```

## Enable color customization

By default, the sticker color cannot be changed in the UI. However, you can enable the option to add a tint color using the optional `tintMode` property of each sticker (Desktop UI only). 
The possible values are `none` (default), `solid` and  `colorized`.

Here is an example of the different tint modes (from left to right: `none`, `solid`, `colorized`):

![TintModes]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/sticker_tint_modes.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

{% capture first_snippet %}
DesktopUI
---
```js
const sticker = {
  identifier: 'imgly_sticker_emoticons_alien',
  defaultName: 'Alien Emoticon',
  tintMode: 'colorized' // Possible: 'none', 'solid', 'colorized'
  images: {
    ...
  }
}
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Enable non-uniform sticker resizing

By default, stickers keep their aspect ratio when they are being resized. However, you can also allow each individual sticker to resize freely,
by setting its `resizeMode` property to `unrestricted` (DesktopUI only):

{% capture first_snippet %}
DesktopUI
---
```js
const sticker = {
  identifier: 'my_custom_sticker_id',
  defaultName: 'My Sticker',
  resizeMode: 'unrestricted' // Possible: 'keepAspect', 'unrestricted'
  images: {
    ...
  }
}
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

It is also possible to easily override this property for the default stickers that are shipped with the PhotoEditor SDK using the editor configuration.
The following example does this for our square shape, which allows it to now be resized to any arbitrary rectangle:

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      sticker: {
        categories: [
          {
            identifier: 'imgly_sticker_shapes',
            stickers: [
              {
                identifier: 'imgly_sticker_shapes_badge_01',
                resizeMode: 'unrestricted'
              }
            ]
          }
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

## Enable smooth downscaling

Due to the nature of WebGL, downscaling images might result in pixelated images. You can avoid that by setting `smoothDownscaling` to `true`. Please note that this might impact performance of the editor, since the Editor now uses larger textures internally:


{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      sticker: {
        smoothDownscaling: true
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
const editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    controlsOptions: {
      sticker: {
        smoothDownscaling: true
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Rotation snapping

Our UI allows the user to freely rotate stickers, which is nice, but it can be hard to hit the right rotation (e.g. exactly 90 degrees). To fix this, we added a customizable snapping feature that can be configured using the `snapRotation` and `snapRotationTolerance` options:


{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      sticker: {
        // This value defines at what degrees rotation snapping should happen
        snapRotation: 90,

        // This value defines at what degrees *around* the `snapRotation` value snapping should happen
        snapRotationTolerance: 5
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
const editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    controlsOptions: {
      sticker: {
        // This value defines at what degrees rotation snapping should happen
        snapRotation: 90,

        // This value defines at what degrees *around* the `snapRotation` value snapping should happen
        snapRotationTolerance: 5
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-04{% endcapture %}
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
                  sticker: {
                    availableStickers: [
                      'imgly_sticker_emoticons_alien',
                      'imgly_sticker_emoticons_angel'
                    ],
                    snapRotation: 10,
                    snapRotationTolerance: 5,
                    smoothDownscaling: true
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