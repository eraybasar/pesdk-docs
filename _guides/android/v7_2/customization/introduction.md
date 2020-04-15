---
layout: guides/content
title: &title Introduction # title as shown in the menu and

menuitem: *title
order: 0
platform: android
version: v7_2
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


It's easy to customize the Android PhotoEditor SDK's style.
​All resource and style identifier can be overwritten. They have the prefix: `imgly_` e.g. `Imgly.`
​
### Download the Default Layout as Reference
For an easy creation of a new interface design simply download our {% include guides/android/demo-repository.md %} and extract the `res` subfolder from the `default_res_files` folder.

### Prepare your Project
Copy and paste the downloaded files (only the files, not the folder) into the res folder of your own app module.

Open your project in Android Studio:

![Res Folder]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_res_files.png){: width="400px"}

### Right-to-left \(RTL\) languages

If you want to incorporate a right-to-left language on a device running Android 4.2 or later, our SDK automatically mirrors the layout. If you want to test it, all you have to do is change the language on your device to a right-to-left language or turn on the "Force RTL layout" option in [Developer options](https://developer.android.com/studio/debug/dev-options.html#enable).



### Declaring layout guides

For more information look at the [Google Developer Guides]( http://developer.android.com/guide/topics/ui/declaring-layout.html).

### See an example

You can find a finished example with a customized design in our {% include guides/android/demo-repository.md %}. Just take a look at the `CustomizeLayoutExample` folder.

