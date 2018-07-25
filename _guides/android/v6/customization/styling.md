---
layout: guides/content
title: &title Styling # title as shown in the menu and

menuitem: *title
order: 0
platform: android
version: v6
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


It's easy to customize the PhotoEditor Android SDK's style.
​All resource and style identifier can be overwritten. They have the prefix: `imgly_` e.g. `Imgly.`
​
### Download the Default Layout as Reference
For an easy creation of a new interface design simply download our {% include guides/android/demo-repository.md %} and extract the `res` subfolder from the `default_res_files` folder.

### Prepare your Project
Copy and paste the downloaded files (only the files, not the folder) into the res folder of your own app module.

Open your project in Android Studio:

![Res Folder]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_res_files.png){: width="400px"}

### Change default icons

You can add your own icons:

![Icon size]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_icon_size.png){: width="400px"}

Please make sure, that you overwrite the icon in all densities.

* Put a 48x48px icon file into the drawable-mdpi folder (1.0x baseline) for medium-density
* Put a 72x72px icon file into the drawable-hdpi folder \(1.5x) for high-density
* Put a 96x96px icon file into the drawable-xhdpi folder (2.0x) for extra-high-density
* Put a 180x180px icon file into the drawable-xxhdpi folder (3.0x) for extra-extra-high-density
* Put a 192x192px icon file into the drawable-xxxhdpi folder (4.0x) for extra-extra-extra-high-density


There are two special files inside this project: `imgly_icon_option_selected_color.png` and `imgly_icon_option_selected_color_bg.png`.
Both combined will create an icon which will be used for both the fore- and background colorpicking for the sticker.

The white color values from `imgly_icon_option_selected_color.png` replace and overlays the content from `imgly_icon_option_selected_color_bg.png` with the chosen color within the runtime.


### Change default colors

Open the res/values/imgly_color.xml in your project and edit the specific ARGB Hex value or double tap the color rect on the left side of the line to open the color picker

![Colors]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_colors.png){: width="600px"}

### Change Layout

If you want to change the order of the ActionBar Buttons, you can open the `imgly_widget_actionbar.xml` in the layout editor and simply change the order of the xml elements.

> __Warning:__ Do NOT change layout IDs or element types (extensions of a type are fine), otherwise the app will crash with a `NullPointer` or a `TypeCast` exception!

If you want to change the ActionBar Button Style go to the specific Element, hold down the Command Key and click on the style attribute value `@style/Imgly.Editor.Header.Button.AcceptButton`
The Editor now jumps in the specific Style element in the `imgly_style.xml` file.
Now you can edit all style attributes. It's also possible to override the style attributes directly in the element node.

![Edit style]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_edit_style.png){: width="800px"}

### Declaring layout guides

For more information look at the [Google Developer Guides]( http://developer.android.com/guide/topics/ui/declaring-layout.html).

### See an example

You can find a finished example with a customized design in our {% include guides/android/demo-repository.md %}. Just take a look at the `CustomizeLayoutExample` folder.
