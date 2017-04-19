---
layout: guides/android/v3_6/content
title: &title Fonts # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - android
version:
  - v3_6
category: 
  - guide
  - ui
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
# Fonts

## Adding custom fonts

You can add custom fonts by passing them using the `additionalFonts` option.

If `replaceFonts` is set to true, all default fonts are removed. If it is set to `false`, your
additional fonts are appended.

```js
const editor = new PhotoEditorSDK.UI.NightReact({
  controlsOptions: {
    text: {
      additionalFonts: [
        {
          name: 'comicsans',
          fontFamily: 'Comic Sans MS',
          fontWeight: 'normal'
        }
      ],
      replaceFonts: false
    }
  }
})
```

## Adding google fonts

The `additionalFonts` option also allows you to add custom fonts from Google Fonts:

```js
const editor = new PhotoEditorSDK.UI.NightReact({
  controlsOptions: {
    text: {
      additionalFonts: [
        {
          name: 'shrikhand',
          fontFamily: 'Shrikhand',
          provider: 'google' // This loads the font from Google Fonts
        }
      ],
      replaceFonts: false
    }
  }
})
```

## Specifying the available fonts

Per default, all existing fonts (including your own) are available to the user. To make only
specific fonts available to the user, use the `selectableFonts` option.

```js
const editor = new PhotoEditorSDK.UI.NightReact({
  controlsOptions: {
    text: {
      selectableFonts: [
        'helvetica',
        'verdana',
        'times-new-roman',
        'impact',
        'comicsans'
      ]
    }
  }
})
```
