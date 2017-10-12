---
layout: guides/content
title: &title Getting Started # title as shown in the menu and 
order: 1
menuitem: *title
platform: android
version: v4
category: 
  - guide
  - introduction
  
description: A quick guide on how to easily get started with the PhotoEditor SDK for Android. Your kick-off to delight your users with top-notch editing capabilities.

tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---


This document guides you through the process of integrating the PhotoEditor SDK into your Android
application.

## Prerequisites

The following software is required:

* Mac OS X, Windows, or Linux
* Android Studio 2.2+
* Android SDK 16+
* Gradle 2.14+
* Android Build Tools 25.0.2+
* Android Support Repository 25.1.1+

You will need a **valid license file** in order to use the PhotoEditor SDK in your own application. You can request a trial license at [here](https://www.photoeditorsdk.com/users/new). As our {% include guides/android/example-app.md %} comes bundled with its own license, you can use this right away, if you just want to take a quick look.

## Supported Android versions

The PhotoEditor SDK supports **Android 4.1.0+  API 16** as the `minSdkVersion`, but it must be
compiled with `Build-API` and `targetSdkVersion` Level 25+ to support Android 7.1 and above.

## Setting up the workspace

Please make sure to have jCenter and our artifactory repository listed in your repositories in your `build.gradle` file:

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

/* Optional if you do not use the build-processor see below */
apply plugin: 'com.neenbedankt.android-apt' 

android {
    /* Set the compile SDK and the Build SDK min. at SDK 25 or grater. */
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
    compile 'ly.img.android:photo-editor-sdk:4.0.1'

    /* This is optional if you do not want use an `EventTracker` and do not extend our SDK, otherwise it is required. 
     * don't forget to apply the APT plugin see above
     */
    apt 'ly.img.android:build-processor:4.0.1' 
}
```

Sync your project with the Gradle files after every edit. For more information about Gradle, please take a look at the [Android Developer Documentation](http://developer.android.com/tools/building/configuring-gradle.html)

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

## Add your license file

Before using any components of the PhotoEditor SDK, you have to add your license file to your applications assets folder.
The expected default name of the license file is "LICENSE". In order to change this, call `PESDK.init(this, "YOUR_FILENAME")` instead of `PESDK.init(this)`  

The license is digitally signed and can't be altered without becoming invalid. Our sample app comes with its own license, so you can try that right away. To try our SDK in your own app, you need to request a trial license that's bound to your bundle identifier. You can start a trial [here](https://www.photoeditorsdk.com/users/new) and download your license file from your [dashboard](https://www.photoeditorsdk.com/dashboard).

Once the license file has been added the application will validate its presence upon launch.

## Android Permissions

The PhotoEditor SDK requires two permissions: The "_Write access to external storage_" and the "_Camera_" permission. The SDK will automatically grant these permissions using manifest merging. No further action is required.

Please take a look at the hint in the next step in order to integrate the Android 6.0 permission request.

## Integration

In order to open the camera preview and pass the resulting image to the editor, create a
`CameraPreviewBuilder` and start the `CameraPreviewActivity` with `startActivityForResult(activity, custom_id)`:

> __Please make sure you delegate the `onRequestPermissionsResult` to `PermissionRequest.onRequestPermissionsResult`
as demonstrated in the following example. This ensures correct behavior on Android 6.0 and above.__

```java
public class MainActivity extends Activity implements PermissionRequest.Response {

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
                   data.getStringExtra(ImgLyActivity.RESULT_IMAGE_PATH);
            String sourcePath =
                   data.getStringExtra(ImgLyActivity.SOURCE_IMAGE_PATH);

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

    // Important permission request for Android 6.0 and above, don't forget this!
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
        // The Permission was rejected by the user. The Editor was not opened, as it could not save the result image.
        // TODO for you: Show a Hint to the User
    }
}
```

### Start Editor standalone (without camera).

You may directly open the editor for an existing image by modifying the example above:

```java
public class MainActivity extends Activity implements PermissionRequest.Response{

    public static int CAMERA_PREVIEW_RESULT = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        SettingsList settingsList = new SettingsList();
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
            }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == CAMERA_PREVIEW_RESULT) {
            String resultPath = 
                   data.getStringExtra(ImgLyActivity.RESULT_IMAGE_PATH);
            String sourcePath =
                   data.getStringExtra(ImgLyActivity.SOURCE_IMAGE_PATH);

            if (resultPath != null) {
                // Scan result file
                File file =  new File(resultPath);
                Intent scanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
                Uri co"tentUri = Uri.f"omFile(file);
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

    // Important permission request for Android 6.0 and above, don't forget this!
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
        // The Permission was rejected by the user. The Editor was not opened, as it could not save the result image.
        // TODO for you: Show a Hint to the User
    }
}
```

## Sample Application

You can access the source code for our demo application from our {% include guides/android/demo-repository.md %}.

