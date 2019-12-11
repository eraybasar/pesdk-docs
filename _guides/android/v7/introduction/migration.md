---
layout: guides/content
title: &title Migration from v6 # title as shown in the menu and
description: Look for a straightforward migration of the PhotoEditor SDK v6.
menuitem: *title
order: 4
platform: android
version: v7
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


## 1. Update the Plugin to v7  
Please ensure that our artifactory.img.ly repository is listed in your repositories in the project's `build.gradle` file,
and you use at least v7.0.10 of the SDK.

```groovy
// Add the PESDK repository and plugin dependency
buildscript {
    repositories {
        jcenter()
        google()
        maven { url 'https://artifactory.img.ly/artifactory/imgly' }
    }
    dependencies {
        // Insert the latest SDK version number here. You will find it here https://github.com/imgly/pesdk-android-demo/releases
        classpath 'ly.img.android.pesdk:plugin:7.0.10'
    }
}
```

## 2. Update the config syntax 
*This is a OPTIONAL step if you only use the PhotoEditor SDK*   

After updating the plugin to the newest version you can now update the old pesdkConfig the new one 'imglyConfig'.
To do so: 
1. Rename `pesdkConfig { ... }` to `imglyConfig { ... }`
2. add a `pesdk` block with the instructions `enable true`
3. move the instruction `licencePath *YOU LICENCE FILE NAME*` inside the `pesdk` block.
4. *\[OPTIONAL:\]* shorten your module includes like here: 

_(Since v7 you don't have to include the backend module if you use the UI module)_
 
```groovy
// Apply the Android Plugin
apply plugin: 'com.android.application'

// Apply the PESDKPlugin
apply plugin: 'ly.img.android.sdk'

// Configure the PESDKPlugin
imglyConfig {

    pesdk {
        enabled true 
        licencePath 'pesdk_android_license.dms'
    }

    // If you use another supportLibVersion ('com.android.support'), change this version here to update your own supportLibVersion
    supportLibVersion "28.0.0"

    // Define the modules you are need
    modules {
        // Add all the UI modules you are need
        include 'ui:core'
        include 'ui:text'
        include 'ui:focus'
        include 'ui:frame'
        include 'ui:brush'
        include 'ui:filter'
        include 'ui:camera'
        include 'ui:sticker'
        include 'ui:overlay'
        include 'ui:transform'
        include 'ui:adjustment'
        include 'ui:text-design'


        // Add the serializer if you need
        include 'backend:serializer'

        // Add asset packs if you need
        include 'assets:font-basic'
        include 'assets:frame-basic'
        include 'assets:filter-basic'
        include 'assets:overlay-basic'
        include 'assets:sticker-shapes'
        include 'assets:sticker-emoticons'
    }
}

```

## 3. Auto migrate your code. 

To update your code from v7 to v6:
1. Make a backup of your project first.
2. Go into the console and call the command `./gradlew migrate_pesdk_v6_to_v7 --no-daemon`
3. Confirm that you have made a backup.


## 4. Manually update deprecations.
*This is a OPTIONAL step* 

* `SettingsList` are deprecated now use PhotoEditorSettingsList and PhotoEditorSaveSettings instead.
* `EditorLoadSettings` are deprecated use LoadSettings instead.
* `EditorSaveSettings` are deprecated now use PhotoEditorSaveSettings and VideoEditorSaveSettings instead.

