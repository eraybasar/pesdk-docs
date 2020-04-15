---
layout: guides/content
title: &title Strings # title as shown in the menu and

menuitem: *title
order: 4
platform: android
version: v7_2
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

## Change default string

To exchange a string delivered with the SDK a string resource with the same identifier has to be put into a file in your projects resource folder, to override the default PESDK one.
All strings have indetifiers prefixed by `imgly_` or `pesdk_`. That means that the original string named e.g. `pesdk_editor_title_name` has to be exchanged with a custom string using the same identifier.
This way the PESDK will automatically use the new version of this string and changing code won't be necessary.

To get access to the SDKs default strings simply download our {% include guides/android/demo-repository.md %} and extract the `res` subfolder from the `default_res_files` folder. All strings can be found in the `values` folder.

## Localization

You can easily add more languages by adding/overwriting string resources.

> __HINT__: This is not only true for strings. You can exchange all localized resources (e.g. add icons for different languages).

For more information take a look at the [Developer Guides](http://developer.android.com/guide/topics/resources/localization.html).

### Using the localization editor

Copy and paste the downloaded files (just the files, not the folder) into the `res` folder of your own app. Afterwards, open your project in Android Studio.

Open `res/values/string.xml` (if the file doesn't exist, you will have to create it) and click `Edit translations for all locales in the translations editor.` -> `Open editor`.

![Strings]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_strings.png)

Now you're able to edit all texts and translate them into other languages.

![Editor]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_string_editor.png)

