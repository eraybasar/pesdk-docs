---
layout: guides/content
title: &title Serialization # title as shown in the menu and 
description: The PhotoEditor SDK for Android provides an option for serialization and deserialization, allowing your users to save and revise their work anytime.
menuitem: *title
order: 0
platform: android
version: v6_2
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

Our serialization functionality empowers you to save the current settings of the changes and recover it the next time the editor is opened again. The settings will be stored in a plain JSON file.
For details on the JSON structure, you can [download]({{ site.baseurl }}/assets/downloads/serialization/schema-3.0.0-beta.json){: download="schema-3.0.0-beta.json" } our schema.

## Saving the settings
When the editor is closed, the [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/SettingsList.html) is parceled into the `android.content.Intent` data of `onActivityResult(int requestCode, int resultCode, android.content.Intent data)`
You can parse the serialize and write settings by calling the [`writeJson(java.io.File)`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/serializer/_3/_0/_0/PESDKFileWriter.html) method on a fresh [`PESDKFileWriter`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/serializer/_3/_0/_0/PESDKFileWriter.html) object.
Here is some example code to get you started:

{% capture first_snippet_ExampleSerialization_onActivityResult %}
Java
---
``````java
protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
    super.onActivityResult(requestCode, resultCode, data);

    int EDITOR_RESULT = 2;

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
//...
}
``````
{% endcapture %}{% capture second_snippet_ExampleSerialization_onActivityResult %}
Kotlin
---
``````kotlin
override fun onActivityResult(requestCode: Int, resultCode: Int, data: android.content.Intent) {
    super.onActivityResult(requestCode, resultCode, data)

    val EDITOR_RESULT = 2

    if (resultCode == Activity.RESULT_OK && requestCode == EDITOR_RESULT) {
        val settingsList = data.getParcelableExtra<SettingsList>(ImgLyIntent.SETTINGS_LIST)
        val writer = PESDKFileWriter(settingsList)

        // TODO: Choose a better file path
        val file = File(Environment.getExternalStorageDirectory(), "staveState.pesdk")
        try {
            if (file.exists()) {
                file.delete()
            }
            file.createNewFile()
            writer.writeJson(file)
            Trace.out("JSON", "json written")
        } catch (e: IOException) {
            e.printStackTrace()
            Trace.out("JSON", "error on write json")
        }

    }
    //...
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleSerialization_onActivityResult | push: second_snippet_ExampleSerialization_onActivityResult %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleSerialization_onActivityResult{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Restoring the settings

To set the initial editor settings, load the saved settings with a fresh [`PESDKFileReader`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/serializer/_3/_0/_0/PESDKFileReader.html) object. This has to be done **before** the editor is presented. Here is an example, to demonstrate the process:

{% capture first_snippet_ExampleSerialization_openEditor %}
Java
---
``````java
SettingsList settingsList = createInitialSettingsList();

int PESDK_RESULT = 1;

// Set input image
settingsList.getSettingsModel(EditorLoadSettings.class)
  .setImageSource(inputImage);

// TODO: Choose a better file path
File file = new File(Environment.getExternalStorageDirectory(), "staveState.pesdk");
if (file.exists()) {
    PESDKFileReader reader = new PESDKFileReader(settingsList);
    try {
        reader.readJson(file);
    } catch (IOException e) {
        Toast.makeText(this, "Error while opening json.", Toast.LENGTH_LONG).show();
        e.printStackTrace();
        return;
    }
} else {
    Toast.makeText(this, "No save state found.", Toast.LENGTH_LONG).show();
    return;
}

new PhotoEditorBuilder(this)
  .setSettingsList(settingsList)
  .startActivityForResult(this, PESDK_RESULT);
``````
{% endcapture %}{% capture second_snippet_ExampleSerialization_openEditor %}
Kotlin
---
``````kotlin
val settingsList = createInitialSettingsList()

val PESDK_RESULT = 1

// Set input image
settingsList.getSettingsModel(EditorLoadSettings::class.java)!!
  .setImageSource(inputImage)

// TODO: Choose a better file path
val file = File(Environment.getExternalStorageDirectory(), "staveState.pesdk")
if (file.exists()) {
    val reader = PESDKFileReader(settingsList)
    try {
        reader.readJson(file)
    } catch (e: IOException) {
        Toast.makeText(this, "Error while opening json.", Toast.LENGTH_LONG).show()
        e.printStackTrace()
        return
    }

} else {
    Toast.makeText(this, "No save state found.", Toast.LENGTH_LONG).show()
    return
}

PhotoEditorBuilder(this)
  .setSettingsList(settingsList)
  .startActivityForResult(this, PESDK_RESULT)
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleSerialization_openEditor | push: second_snippet_ExampleSerialization_openEditor %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleSerialization_openEditor{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
