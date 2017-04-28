---
layout: guides/content
title: &title Text # title as shown in the menu and 

menuitem: *title
order: 5
platform: android
version: v4
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Text
A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.

The tool is implemented in the [`TextEditorTool`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/sdk/tools/TextEditorTool.html) class and displayed using the [`TextToolPanel`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/ui/panels/TextToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Adding and removing fonts

The SDK comes with a predefined set of fonts, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the {% include guides/android/demo-repository.md %}.

![Editor Fonts]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_editor_fonts.jpg){: height="400px" .center-image}

In order to change the available fonts or rearrange them, start with a default `ImglyConfig` as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section and use the `getFontConfig()` method. This method returns
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
