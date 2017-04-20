---
layout: guides/android/v3_1/content
title: &title Getting Started # title as shown in the menu and 
order: 1
menuitem: *title
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Getting started with our PhotoEditor SDK for Android

This document guides you through the process of integrating the PhotoEditorSDK into you Android
application.

## Prerequisites

The following software is required:

* Mac OS X, Windows, or Linux
* Android Studio 2.2+
* Android SDK 15+
* Gradle 2.14+
* Android Build Tools 25.0.2+
* Android Support Repository 25.1.1+

## Supported Android versions

The PhotoEditorSDK supports Android 4.0.3+ (API Level 15) as the `minSdkVersion`, but it must be
compiled with `Build-API` and `targetSdkVersion` Level 25+ to support Android 7.1 and above.

## Setting up the workspace

Please make sure to have jCenter listed in your repositories in your `build.gradle` file:

```groovy
buildscript {
    repositories {
        jcenter()
    }
    ...
}

allprojects {
    repositories {
        jcenter()
        maven {
             url "https://artifactory.9elements.com/artifactory/imgly"
        }
    }
}
```

You will also have to add a few more things to your module's `build.gradle` file:

> __Warning:__ Please make sure that RenderScript support is enabled!

```groovy
apply plugin: 'com.android.application'

android {
    /* Set the compile SDK and the Build SDK min. at SDK 23 or grater. */
    compileSdkVersion 25
    buildToolsVersion '25.0.2'

    /* If you update from SDK 22 and below, the ApacheHttp-Library is removed by Google,
     * if you need the ApacheHttp-Library comment out the next line */
    // useLibrary 'org.apache.http.legacy'

    defaultConfig {
        /*
         * Replace with your App-ID
         * @see http://tools.android.com/tech-docs/new-build-system/applicationid-vs-packagename
         */
        applicationId "my.domain.application"

        /* Set the minimum supported SDK Version to 15 (Android 4.0.3) or higher */
        minSdkVersion 15

        /* Set the target SDK Version at minimum to 23 or higher */
        targetSdkVersion 25

        /* Set your own Version Code and Version Name */
        versionCode 1
        versionName "1.0"

        /* Don't forget these two lines, otherwise the app will crash! */
        renderscriptTargetApi 23
        renderscriptSupportModeEnabled true
    }

    /* Set Java Language level to Java 1.7+ */
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_7
        targetCompatibility JavaVersion.VERSION_1_7
    }
}

dependencies {
    /* Make sure that you are importing the latest SDK version */
    compile 'ly.img.android:photo-editor-sdk:3.0.7'
}
```

Sync your project with the Gradle files after every edit.

For more information about Gradle, please take a look at the [Android Developer Documentation](http://developer.android.com/tools/building/configuring-gradle.html)

## Setting up the application

Add an Application:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.mymodule.app" >

    <application
        android:name=".Application"
        ... >

        ...
    </application>

</manifest>
```

```java
public class Application extends android.app.Application {
    @Override
    public void onCreate() {
        super.onCreate();

        PESDK.init(this);
    }
}
```

## Add the License file

Before using any components of the Photo Editor SDK, you have to add your license key file to your application assets folder.
The default name of the license file is "LICENSE" change this by calling `PESDK.init(this, "FILENAME");` instead of `PESDK.init(this);`  

The license is digitally signed so it can not be altered without becoming invalid. Our sample app comes with its own license, so you can try that right away. To try our SDK in your own app, you need to request a trial license because a license is bound to a bundle identifier. You can request a demo license at https://www.photoeditorsdk.com/pricing.

Once you have the license file it can be used to unlock the view controller. The following example demonstrates the unlock the SDK.

## Android Permissions

The PhotoEditor SDK requires two permissions: The "Write access to external storage" and the "Camera" permission. The SDK will automatically grant these permissions using manifest merging. No further action is required.

Please take a look at the hint in the next step in order to integrate the Android 6.0 permission request.

## Integration

In order to open the camera preview and pass the resulting image to the editor, create a
`CameraPreviewBuilder` and start with `startActivityForResult(activity, custom_id)`.

__Please make sure you delegate the `onRequestPermissionsResult` to `PermissionRequest.onRequestPermissionsResult`
as demonstrated in the following example.__

This is the minimum implementation.

```java
public class MainActivity extends Activity implements PermissionRequest.Response{

    public static int CAMERA_PREVIEW_RESULT = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

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
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == CAMERA_PREVIEW_RESULT) {
            String resultPath = 
                   data.getStringExtra(CameraPreviewActivity.RESULT_IMAGE_PATH);
            String sourcePath =
                   data.getStringExtra(CameraPreviewActivity.SOURCE_IMAGE_PATH);

            if (resultPath != null) {
                // Scan result file
                File file =  new File(resultPath);
                Intent scanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
                Uri contentUri = Uri.fromFile(file);
                scanIntent.setData(contentUri);
                sendBroadcast(scanIntent);
            }

            if (sourcePath != null) {
                // Scan camera file
                File file =  new File(sourcePath);
                Intent scanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
                Uri contentUri = Uri.fromFile(file);
                scanIntent.setData(contentUri);
                sendBroadcast(scanIntent);
            }

            Toast.makeText(this, "Image Save on: " + resultPath, Toast.LENGTH_LONG).show();
        }
    }

    //Important for Android 6.0 and above permisstion request, don't forget this!
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        PermissionRequest.onRequestPermissionsResult(requestCode, permissions, grantResults);
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public void permissionGranted() {

    }

    @Override
    public void permissionDenied() {
        // The Permission was rejected by the user, so the Editor was not opened because it can not save the result image.
        // TODO for you: Show a Hint to the User
    }
}
```

### Start Editor standalone (without camera).

```java
String myPicture = "PATH_TO_THE_IMAGE"
settingsList
    .getSettingsModel(EditorLoadSettings.class)
    .setImageSourcePath(myPicture, true) // Load with delete protection true!
    
    .getSettingsModel(EditorSaveSettings.class)
    .setExportDir(Directory.DCIM, FOLDER)
    .setExportPrefix("result_")
    .setSavePolicy(
        EditorSaveSettings.SavePolicy.KEEP_SOURCE_AND_CREATE_ALWAYS_OUTPUT
    );

    new PhotoEditorBuilder(this)
        .setSettingsList(settingsList)
        .startActivityForResult(this, CAMERA_PREVIEW_RESULT);
```

## Sample Application

Get the source for our demo application from our [public GitHub repository](https://github.com/imgly/imgly-sdk-android-demo).
