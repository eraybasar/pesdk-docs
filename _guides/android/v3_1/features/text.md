---
layout: guides/android/v3_1/content
title: &title Text # title as shown in the menu and 

menuitem: *title
order: 5
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---


# Text

The text tool allows users to add text to an image and customize the label to match their needs. After text has been added, users can reposition and scale the label, select a different font or color and change the alignment within the text rectangle.

## Fonts

The SDK comes with a predefined set of fonts, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the [GitHub repository](https://github.com/imgly/imgly-sdk-android-demo).

![Editor Fonts](/assets/images/android/imgly_editor_fonts.jpg){: width="360px"}

In order to change the available fonts or rearrange them, start with a default `ImglyConfig` as described in the [Configuration](/guides/android/v3_1/features/configuration) section and use the `getFontConfig()` method. This method returns
an `ArrayList` containing the default fonts. Use the `clear()` method to clear the list and re-fill
it with the fonts you like in any order you prefer or set a new list with  `setFontConfig()`.

```java
/* Step 1: Get the default configuration. */
ArrayList<FontConfig> fonts = config.getFontConfig();

/* Step 2: Clear the ArrayList. */
fonts.clear();

/*
 * Step 3: Add the fonts you like
 *
 * A FontConfig takes two parameters:
 *
 *   Parameter 1: Resource identifier of the font name or a String (String)
 *   Parameter 2: A File object or a String with the assets font path e.g. fonts/AbrahamLincoln.ttf
 */
fonts.add(new FontConfig("Geared Slab", "fonts/GearedSlab.ttf"));
fonts.add(new FontConfig("Geared Slab", "fonts/AbrahamLincoln.ttf"));
```
