---
layout: guides/content
title: &title Localization # title as shown in the menu and
description: The PhotoEditor SDK for Android can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.
menuitem: *title
order: 1
platform: android
version: v6_3
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


You can easily add more languages by adding/overwriting string resources.

> __HINT__: This is not only true for strings. You can exchange all localized resources (e.g. add icons for different languages).

For more information take a look at the [Developer Guides](http://developer.android.com/guide/topics/resources/localization.html).

## Right-to-left \(RTL\) languages

If you want to incorporate a right-to-left language on a device running Android 4.2 or later, our SDK automatically mirrors the layout. If you want to test it, all you have to do is change the language on your device to a right-to-left language or turn on the "Force RTL layout" option in [Developer options](https://developer.android.com/studio/debug/dev-options.html#enable).

## Using the localization editor

Copy and paste the downloaded files (just the files, not the folder) into the `res` folder of your own app. Afterwards, open your project in Android Studio.

Open `res/values/string.xml` (if the file doesn't exist, you will have to create it) and click `Edit translations for all locales in the translations editor.` -> `Open editor`.

![Strings]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_strings.png)

Now you're able to edit all texts and translate them into other languages.

![Editor]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_string_editor.png)
