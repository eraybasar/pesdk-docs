---
layout: guides/content
title: &title Text # title as shown in the menu and

menuitem: *title
order: 4
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


A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.



## Adding custom fonts

You can add custom fonts by passing them using the `additionalFonts` option.

If `replaceFonts` is set to true, all default fonts are removed. If it is set to `false`, your
additional fonts are appended.

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
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
const editor = new PhotoEditorSDK.UI.ReactUI({
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
const editor = new PhotoEditorSDK.UI.ReactUI({
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
