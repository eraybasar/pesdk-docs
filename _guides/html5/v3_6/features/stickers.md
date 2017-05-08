---
layout: guides/content
title: &title Stickers # title as shown in the menu and

menuitem: *title
order: 5
platform: html5
version: v3_6
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

# {{ page.title }}

The PhotoEditor SDK ships with a categorized sticker library whose UI is optimized for exploration and discovery. You can easily leverage the API to complement the library with your custom sticker packages.

## Adding custom stickers

You can add custom sticker categories and stickers by passing them using the `categories` option
which should follow our [__Stickers JSON Schema__](#stickers-json-schema).

If `replaceCategories` is set to true, all default categories and stickers are removed. If it is
set to `false`, your additional categories and stickers are appended.

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    sticker: {
      categories: [
        {
          name: 'some-category',
          label: 'Some Category',
          stickers: [
            {
              name: 'custom-sticker',
              label: 'Custom Sticker',
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
})
```

## Disabling sticker ratio

In order to disable the fixed ratio, set the `fixedRatio` option to `false`:

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    sticker: {
      fixedRatio: false
    }
  }
})
```

## Providing stickers via an external JSON file

In order to easily manage your stickers via a server, you can make the UI load the stickers from an
external JSON file. Just pass the JSON url using the `stickersJSONPath` option. In order to load
stickers from another host, use the JSONP format by adding `callback=?` to the path.

The JSON response should follow our [__Stickers JSON Schema__](#stickers-json-schema).

If `replaceStickers` is set to true, all default stickers are
removed. If it is set to `false`, your additional stickers are appended.

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    sticker: {
      stickersJSONPath: 'https://www.photoeditorsdk.com/stickers.json?jsoncallback=?', // Treated as JSONP request
      replaceStickers: true // `additionalStickers` replaces all other stickers
    }
  }
})
```

## Specifying the available stickers

Per default, all existing stickers (including your own) are available to the user. To make only
specific stickers available to the user, use the `selectableStickers` option.

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    sticker: {
      selectableStickers: [
        'glasses-sun',
        'glasses-nerd',
        'custom-sticker'
      ]
    }
  }
})
```

### Stickers JSON Schema

In order to correctly use stickers in our UI, you need to follow our Stickers JSON Schema:

```json
{
  "version": "1.1",
  "categories": [{
    "name": "glasses",
    "label": "Glasses",
    "stickers": [{
      "name": "sticker0",
      "label": "Brown glasses",
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
      "name": "sticker1",
      "label": "Green glasses",
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
