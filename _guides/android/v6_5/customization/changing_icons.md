---
layout: guides/content
title: &title Changing icons # title as shown in the menu and

menuitem: *title
order: 3
platform: android
version: v6_5
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

## Change default icons

To exchange an icon delivered with the SDK a resource with the same name has to be put into your projects resource folder, to override the default PESDK one.
All resource files have names prefixed by `imgly_` or `pesdk_`. That means that the original icon named e.g. `imgly_icon_save.xml` has to be exchanged with a custom icon using the same name.
This way the PESDK will automatically use the new version of this icon and changing code won't be necessary.

To get access to the SDKs default icons simply download our {% include guides/android/demo-repository.md %} and extract the `res` subfolder from the `default_res_files` folder.

![Icon size]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_icon_size.png){: width="400px"}

Please make sure, that you overwrite the icon in all densities if it is not a VectorDrawable.

* Put a 48x48px icon file into the drawable-mdpi folder (1.0x baseline) for medium-density
* Put a 72x72px icon file into the drawable-hdpi folder (1.5x) for high-density
* Put a 96x96px icon file into the drawable-xhdpi folder (2.0x) for extra-high-density
* Put a 180x180px icon file into the drawable-xxhdpi folder (3.0x) for extra-extra-high-density
* Put a 192x192px icon file into the drawable-xxxhdpi folder (4.0x) for extra-extra-extra-high-density

### Special case color item

There are two special files inside this project: `imgly_icon_option_selected_color.png` and `imgly_icon_option_selected_color_bg.png`.
Both combined will create an icon which will be used for both the fore- and background colorpicking for the sticker.
The white color values from `imgly_icon_option_selected_color.png` replace and overlays the content from `imgly_icon_option_selected_color_bg.png` with the chosen color within the runtime.

