---
layout: guides/content
title: &title Colors # title as shown in the menu and

menuitem: *title
order: 2
platform: android
version: v7_2
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

### Change default colors

Open the `res/values/imgly_color.xml` in your project and edit the specific ARGB Hex value or double tap the color rect on the left side of the line to open the color picker

![Colors]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_colors.png){: width="600px"}

To exchange a color delivered with the SDK a color resource with the same identifier has to be put into a file in your projects resource folder, to override the default PESDK one.
All colors have indetifiers prefixed by `imgly_` or `pesdk_`. That means that the original color named e.g. `imgly_editor_text_color` has to be exchanged with a custom color using the same identifier.
This way the PESDK will automatically use the new version of this color and changing code won't be necessary.

To get access to the SDKs default colors simply download our {% include guides/android/demo-repository.md %} and extract the `res` subfolder from the `default_res_files` folder. All colors can be found in the `values` folder.


## Color Theming

Take a look at the [themes documentation]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/themes).