---
layout: guides/content
title: &title Serialization # title as shown in the menu and 
description: The PhotoEditor SDK for Android provides an option for serialization and deserialization, allowing your users to save and revise their work anytime.
menuitem: *title
order: 0
platform: android
version: v5
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

Our serialization functionality empowers you to save the current settings of the changes and recover it the next time the editor is opened again. The settings will be stored in a plain JSON file.
For details on the JSON structure, you can [download]({{ site.baseurl }}/assets/downloads/serialization/schema-3.0.0-beta.json){: download="schema-3.0.0-beta.json" } our schema.

## Dependency

Add the serializer dependancy into your project, the version number must be the same like the SDK version.

```groovy
	compile 'ly.img.android:serializer:5.0.0-beta'
```

## Saving the settings
When the editor is closed, the `SettingsList` is parceled into the `android.content.Intent` data of `onActivityResult(int requestCode, int resultCode, android.content.Intent data)`
You can parse the serialize and write settings by calling the `writeJson(File file)` method on a fresh `PESDKFileWriter` object.
Here is some example code to get you started:

```java
@Override
protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
    super.onActivityResult(requestCode, resultCode, data);

    if (resultCode == RESULT_OK && requestCode == EDITOR_RESULT) {
		SettingsList settingsList = data.getParcelableExtra(ImgLyIntent.SETTINGS_LIST);
        PESDKFileWriter writer = new PESDKFileWriter(settingsList);

        // TODO: Choose a better file path
        File file = new File(Environment.getExternalStorageDirectory(), "staveState.pesdk");
        try {
            if (file.exists()) {
                file.delete();
            }
            file.createNewFile();
            writer.writeJson(file);
            Trace.out("JSON", "json written");
        } catch (IOException e) {
            e.printStackTrace();
            Trace.out("JSON", "error on write json");
        }
    }
    ...
}
```

## Restoring the settings

To set the initial editor settings, load the saved settings with a fresh `PESDKFileReader` object. This has to be done **before** the editor is presented. Here is an example, to demonstrate the process:

```java
SettingsList settingsList = createYourInitialSettingsList();

if (lastPicture != null) {
    settingsList
      .getSettingsModel(EditorLoadSettings.class)
      .setImageSourcePath(lastPicture, true)

      .getSettingsModel(EditorSaveSettings.class)
      .setExportDir(Directory.DCIM, FOLDER)
      .setExportPrefix("result_")
      .setJpegQuality(80, true)
      .setSavePolicy(EditorSaveSettings.SavePolicy.KEEP_SOURCE_AND_CREATE_ALWAYS_OUTPUT);

    // TODO: Choose a better file path
    File file = new File(Environment.getExternalStorageDirectory(), "staveState.pesdk");
    if (file.exists()) {
        PESDKFileReader reader = new PESDKFileReader(settingsList);
        try {
            reader.readJson(file);
        } catch (IOException e) {
            Toast.makeText(MainActivity.this, "Error while opening json.", Toast.LENGTH_LONG).show();
            e.printStackTrace();
            return;
        }
    } else {
        Toast.makeText(MainActivity.this, "No save state found.", Toast.LENGTH_LONG).show();
        return;
    }

    new PhotoEditorBuilder(MainActivity.this)
      .setSettingsList(settingsList)
      .startActivityForResult(MainActivity.this, CAMERA_PREVIEW_RESULT);

} else {
    Toast.makeText(MainActivity.this, "No save state image found.", Toast.LENGTH_LONG).show();
}
```