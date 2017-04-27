---
layout: guides/android/v3_1/content
title: &title Camera # title as shown in the menu and 

menuitem: *title
order: 0
platform: android
version: v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Camera

The PhotoEditor SDK offers a lightning fast camera implementation for iOS to complement your editor, featuring all essential camera components as well as live filters.

In order to use our camera, you need to instantiate a [`CameraPreviewActivity`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/ui/activities/CameraPreviewActivity.html) using a [`CameraPreviewBuilder`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/ui/activities/CameraPreviewBuilder.html) and present it. You can configure the camera to fit your needs by passing a `SettingsList` object to the builder. If no configuration is passed, the default setup is passed:

```java
SettingsList settingsList = new SettingsList();
settingsList
    // Set custom camera export settings
    .getSettingsModel(CameraSettings.class)
    .setExportDir(Directory.DCIM, FOLDER)
    .setExportPrefix("camera_")
    // Set custom editor export settings
    .getSettingsModel(EditorSaveSettings.class)
    .setExportDir(Directory.DCIM, FOLDER)
    .setExportPrefix("result_")
    .setSavePolicy(
         EditorSaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT
    );

    new CameraPreviewBuilder(this)
            .setSettingsList(settingsList)
            .startActivityForResult(this, CAMERA_PREVIEW_RESULT);
```

For more details, take a look at our [getting started]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/getting_started) section.
