---
layout: guides/content
title: &title Getting Started # title as shown in the menu and 
order: 1
menuitem: *title
platform: android
version: v7_1
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

<div class="documentation__disclaimer">
<h4 id="androidx-news">Update for AndroidX</h4>
You are now able to use AndroidX without affecting our PhotoEditor SDK. Google provides a new build tools version which fixes the bug. So please use buildToolsVersion '29.0.2' when you are using AndroidX.
</div>

## Integration Tutorial

We made an awesome video tutorial for you.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FpmASFvgUdM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>

<div class="documentation__disclaimer">
<h4 id="license-terms">Using a Trial License</h4>
Make sure you have a standard license before adding it properly to your running project. A trial license is valid for only 30 days and will afterwards disable the export function for your customers. Your trial license should therefore be removed and substituted by a standard license. More information can be found <a href="{{site.baseUrl}}/guides/{{page.platform}}/{{page.version}}/introduction/faq/standard_or_trial_license">here</a>.
</div>

## Prerequisites

The following software is required:

* Mac OS X, Windows, or Linux
* Android Studio 3.0+
* Android Minimum SDK 16+ \(Android 4.1.0 released 27. Juni 2012\)
* Gradle 3.0+
* Android Build Tools 29.0.2+
* Android Support Repository 28.0.0+
* License\*

\*You will need a **valid license file** in order to use the PhotoEditor SDK in your own application. You can request a trial license at [here](https://account.photoeditorsdk.com/signup/). As our {% include guides/android/example-app.md %} comes bundled with its own license, you can use this right away, if you just want to take a quick look.

## Supported Android versions

The PhotoEditor SDK supports **Android 4.1.0+ API 16** as the `minSdkVersion`, but it must be
compiled with `Build-API` and `targetSdkVersion` Level 27+ to support Android 8.1 and above.


## Add your license file

Before using any components of the PhotoEditor SDK, you have to add your license file to your applications assets folder.
The expected default name of the license file is "LICENSE". In order to change this, see licencePath option of PESDKConfig in your gradle file.  

The license is digitally signed and can't be altered without becoming invalid. Our sample app comes with its own license, so you can try that right away. To try our SDK in your own app, you need to request a trial license that's bound to your bundle identifier. You can start a trial [here](https://account.photoeditorsdk.com/signup/) and download your license file from your [dashboard](https://account.photoeditorsdk.com/dashboard/subscriptions).

Once the license file has been added the application will validate its presence upon launch.

## Setting up the workspace

Please ensure that our artifactory repository is listed in your repositories in the project's `build.gradle` file:

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
        classpath 'ly.img.android.pesdk:plugin:7.1.8'
        // Add the Kotlin plugin
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.3.61"  
    }
}
```


You will also have to add the pesdk plugin and PESDKConfig into your module's `build.gradle` file:

```groovy
// Apply the Android Plugin
apply plugin: 'com.android.application'

// Apply the PESDKPlugin
apply plugin: 'ly.img.android.sdk'
// Apply Kotlin Plugin
apply plugin: 'kotlin-android'

// Configure the PESDKPlugin
imglyConfig {

    pesdk {
        enabled true 
        licencePath 'pesdk_android_license.dms'
    }

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

// Do your Android Configurations... ex.
android {
    /* Set the compile SDK and the Build SDK min. at SDK 29 or grater.
     * We can't provide support for Bugs, that are the result of older SDK versions.
     */
    compileSdkVersion 29
    buildToolsVersion '29.0.2'

    defaultConfig {
        /*
         * Replace with your App-ID and keep sure that it match with your license!
         * @see http://tools.android.com/tech-docs/new-build-system/applicationid-vs-packagename
         */
        applicationId "my.domain.application"

        /* Set the minimum supported SDK Version to 18 (Android 4.3.0) or higher */ 
        minSdkVersion 18

        /* Set the target SDK Version at minimum to 29 or higher */
        targetSdkVersion 29

    }

    /* Set Java Language level to Java 1.8+ */
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}


```

__Sync your project with the Gradle files after every edit!__
For more information about Gradle, please take a look at the [Android Developer Documentation](http://developer.android.com/tools/building/configuring-gradle.html)

## Android Permissions

The PhotoEditor SDK requires two permissions: The "_Write access to external storage_" and the "_Camera_" permission (if you include the Camera module).
You can grant this permissions yourself otherwise the SDK will automatically grant these permissions

__Please take a look at the hint in the next step in order to integrate the Android 6.0 permission request correct!__

## Integration

In order to open the camera preview and pass the resulting image to the editor, create a
[`CameraPreviewBuilder`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/activity/CameraPreviewBuilder.html) and start the [`CameraPreviewActivity`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/activity/CameraPreviewActivity.html) with [`startActivityForResult(android.app.Activity, int)`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/activity/CameraPreviewBuilder.html):

> __Please make sure you delegate the [`onRequestPermissionsResult()`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/utils/PermissionRequest.html) to [`onRequestPermissionsResult()`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/utils/PermissionRequest.html)
as demonstrated in the following example. This ensures correct behavior on Android 6.0 and above.__

{% capture first_snippet_CameraDemoActivity %}
Java
---
``````java
public class CameraDemoActivity extends Activity implements PermissionRequest.Response {

    // Important permission request for Android 6.0 and above, don't forget to add this!
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        PermissionRequest.onRequestPermissionsResult(requestCode, permissions, grantResults);
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public void permissionGranted() {}

    @Override
    public void permissionDenied() {
        /* TODO: The Permission was rejected by the user. The Editor was not opened,
         * Show a hint to the user and try again. */
    }

    public static int PESDK_RESULT = 1;

    private SettingsList createPesdkSettingsList() {

        // Create a empty new SettingsList and apply the changes on this referance.
        SettingsList settingsList = new SettingsList();

        // If you include our asset Packs and you use our UI you also need to add them to the UI,
        // otherwise they are only available for the backend
        // See the specific feature sections of our guides if you want to know how to add our own Assets.

        settingsList.getSettingsModel(UiConfigFilter.class).setFilterList(
          FilterPackBasic.getFilterPack()
        );

        settingsList.getSettingsModel(UiConfigText.class).setFontList(
          FontPackBasic.getFontPack()
        );

        settingsList.getSettingsModel(UiConfigFrame.class).setFrameList(
          FramePackBasic.getFramePack()
        );

        settingsList.getSettingsModel(UiConfigOverlay.class).setOverlayList(
          OverlayPackBasic.getOverlayPack()
        );

        settingsList.getSettingsModel(UiConfigSticker.class).setStickerLists(
          StickerPackEmoticons.getStickerCategory(),
          StickerPackShapes.getStickerCategory()
        );

        // Set custom camera image export settings
        settingsList.getSettingsModel(CameraSettings.class)
          .setExportDir(Directory.DCIM, "SomeFolderName")
          .setExportPrefix("camera_");

        // Set custom editor image export settings
        settingsList.getSettingsModel(SaveSettings.class)
          .setExportDir(Directory.DCIM, "SomeFolderName")
          .setExportPrefix("result_")
          .setSavePolicy(SaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT);

        return settingsList;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        openCamera();
    }

    private void openCamera() {
        SettingsList settingsList = createPesdkSettingsList();

        new CameraPreviewBuilder(this)
          .setSettingsList(settingsList)
          .startActivityForResult(this, PESDK_RESULT);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == PESDK_RESULT) {
            // Editor has saved an Image.
            Uri resultURI = data.getParcelableExtra(ImgLyIntent.RESULT_IMAGE_URI);
            Uri sourceURI = data.getParcelableExtra(ImgLyIntent.SOURCE_IMAGE_URI);

            // Scan result uri to show it up in the Gallery
            if (resultURI != null) {
                sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(resultURI));
            }

            // Scan source uri to show it up in the Gallery
            if (sourceURI != null) {
                sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(sourceURI));
            }

            Log.i("PESDK", "Source image is located here " + sourceURI);
            Log.i("PESDK", "Result image is located here " + resultURI);

            // TODO: Do something with the result image

            // OPTIONAL: read the latest state to save it as a serialisation
            SettingsList lastState = data.getParcelableExtra(ImgLyIntent.SETTINGS_LIST);
            try {
                new PESDKFileWriter(lastState).writeJson(new File(
                  Environment.getExternalStorageDirectory(),
                  "serialisationReadyToReadWithPESDKFileReader.json"
                ));
            } catch (IOException e) { e.printStackTrace(); }

        } else if (resultCode == RESULT_CANCELED && requestCode == PESDK_RESULT) {

            // Editor was canceled
            Uri sourceURI = data.getParcelableExtra(ImgLyIntent.SOURCE_IMAGE_URI);
            // TODO: Do something...
        }
    }
}
``````
{% endcapture %}{% capture second_snippet_CameraDemoActivity %}
Kotlin
---
``````kotlin
class KCameraDemoActivity : Activity(), PermissionRequest.Response {

    companion object {
        const val PESDK_RESULT = 1
    }

    // Important permission request for Android 6.0 and above, don't forget to add this!
    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
        PermissionRequest.onRequestPermissionsResult(requestCode, permissions, grantResults)
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    }

    override fun permissionGranted() {}

    override fun permissionDenied() {
        /* TODO: The Permission was rejected by the user. The Editor was not opened,
         * Show a hint to the user and try again. */
    }

    // Create a empty new SettingsList and apply the changes on this referance.
    // If you have included our asset Packs and you want to use our default UI you also need to add them to the UI config,
    // otherwise they are only available for the backend link serialisation.
    // See the specific feature sections of our guides if you want to know how to add your own assets.
    private fun createPesdkSettingsList() = PhotoEditorSettingsList()
      .configure<UiConfigFilter> {
          it.setFilterList(FilterPackBasic.getFilterPack())
      }
      .configure<UiConfigText> {
          it.setFontList(FontPackBasic.getFontPack())
      }
      .configure<UiConfigFrame> {
          it.setFrameList(FramePackBasic.getFramePack())
      }
      .configure<UiConfigOverlay> {
          it.setOverlayList(OverlayPackBasic.getOverlayPack())
      }
      .configure<UiConfigSticker> {
          it.setStickerLists(
            StickerPackEmoticons.getStickerCategory(),
            StickerPackShapes.getStickerCategory()
          )
      }.configure<CameraSettings> {
          // Set custom camera image export settings
          it.setExportDir(Directory.DCIM, "SomeFolderName")
          it.setExportPrefix("camera_")
      }
      .configure<SaveSettings> {
          // Set custom editor image export settings
          it.setExportDir(Directory.DCIM, "SomeFolderName")
          it.setExportPrefix("result_")
          it.savePolicy = SaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT
      }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        openCamera()
    }

    private fun openCamera() {
        val settingsList = createPesdkSettingsList()

        CameraPreviewBuilder(this)
          .setSettingsList(settingsList)
          .startActivityForResult(this, PESDK_RESULT)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent) {
        super.onActivityResult(requestCode, resultCode, data)

        if (resultCode == Activity.RESULT_OK && requestCode == PESDK_RESULT) { // Editor has saved an Image.

            val resultURI = data.getParcelableExtra<Uri?>(ImgLyIntent.RESULT_IMAGE_URI)?.also {
                // Scan result uri to show it up in the Gallery
                sendBroadcast(Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(it))
            }

            val sourceURI = data.getParcelableExtra<Uri?>(ImgLyIntent.SOURCE_IMAGE_URI)?.also {
                // Scan source uri to show it up in the Gallery
                sendBroadcast(Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(it))
            }

            Log.i("PESDK", "Source image is located here $sourceURI")
            Log.i("PESDK", "Result image is located here $resultURI")

            // TODO: Do something with the result image

            // OPTIONAL: read the latest state to save it as a serialisation
            val lastState = data.getParcelableExtra<SettingsList>(ImgLyIntent.SETTINGS_LIST)
            try {
                PESDKFileWriter(lastState).writeJson(File(
                  Environment.getExternalStorageDirectory(),
                  "serialisationReadyToReadWithPESDKFileReader.json"
                ))
            } catch (e: IOException) {
                e.printStackTrace()
            }

        } else if (resultCode == Activity.RESULT_CANCELED && requestCode == PESDK_RESULT) {

            // Editor was canceled
            val sourceURI = data.getParcelableExtra<Uri?>(ImgLyIntent.SOURCE_IMAGE_URI)
            // TODO: Do something...
        }
    }


}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_CameraDemoActivity | push: second_snippet_CameraDemoActivity %}
{% capture identifier %}{{page.title}}-{{page.version}}-CameraDemoActivity{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

### Start Editor standalone (without camera).

If you want to open the editor directly with an existing image look at this example:

{% capture first_snippet_EditorDemoActivity %}
Java
---
``````java
public class EditorDemoActivity extends Activity implements PermissionRequest.Response {

    // Important permission request for Android 6.0 and above, don't forget to add this!
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        PermissionRequest.onRequestPermissionsResult(requestCode, permissions, grantResults);
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public void permissionGranted() {}

    @Override
    public void permissionDenied() {
        /* TODO: The Permission was rejected by the user. The Editor was not opened,
         * Show a hint to the user and try again. */
    }

    public static int PESDK_RESULT = 1;
    public static int GALLERY_RESULT = 2;

    private SettingsList createPesdkSettingsList() {



        // Create a empty new SettingsList and apply the changes on this referance.
        SettingsList settingsList = new SettingsList();

        // If you include our asset Packs and you use our UI you also need to add them to the UI,
        // otherwise they are only available for the backend
        // See the specific feature sections of our guides if you want to know how to add our own Assets.

        settingsList.getSettingsModel(UiConfigFilter.class).setFilterList(
            FilterPackBasic.getFilterPack()
        );

        settingsList.getSettingsModel(UiConfigText.class).setFontList(
          FontPackBasic.getFontPack()
        );

        settingsList.getSettingsModel(UiConfigFrame.class).setFrameList(
          FramePackBasic.getFramePack()
        );

        settingsList.getSettingsModel(UiConfigOverlay.class).setOverlayList(
          OverlayPackBasic.getOverlayPack()
        );

        settingsList.getSettingsModel(UiConfigSticker.class).setStickerLists(
          StickerPackEmoticons.getStickerCategory(),
          StickerPackShapes.getStickerCategory()
        );

        // Set custom editor image export settings
        settingsList.getSettingsModel(SaveSettings.class)
          .setExportDir(Directory.DCIM, "SomeFolderName")
          .setExportPrefix("result_")
          .setSavePolicy(SaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT);

        return settingsList;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        openSystemGalleryToSelectAnImage();
    }

    private void openSystemGalleryToSelectAnImage() {
        Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivityForResult(intent, GALLERY_RESULT);
        } else {
            Toast.makeText(
              this,
              "No Gallery APP installed",
              Toast.LENGTH_LONG
            ).show();
        }
    }

    private void openEditor(Uri inputImage) {
        SettingsList settingsList = createPesdkSettingsList();

        // Set input image
        settingsList.getSettingsModel(LoadSettings.class).setSource(inputImage);

        new EditorBuilder(this)
          .setSettingsList(settingsList)
          .startActivityForResult(this, PESDK_RESULT);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (resultCode == RESULT_OK && requestCode == GALLERY_RESULT) {
            // Open Editor with some uri in this case with an image selected from the system gallery.
            Uri selectedImage = data.getData();
            openEditor(selectedImage);

        } else if (resultCode == RESULT_OK && requestCode == PESDK_RESULT) {
            // Editor has saved an Image.
            Uri resultURI = data.getParcelableExtra(ImgLyIntent.RESULT_IMAGE_URI);
            Uri sourceURI = data.getParcelableExtra(ImgLyIntent.SOURCE_IMAGE_URI);

            // Scan result uri to show it up in the Gallery
            if (resultURI != null) {
                sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(resultURI));
            }

            // Scan source uri to show it up in the Gallery
            if (sourceURI != null) {
                sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(sourceURI));
            }

            Log.i("PESDK", "Source image is located here " + sourceURI);
            Log.i("PESDK", "Result image is located here " + resultURI);

            // TODO: Do something with the result image

            // OPTIONAL: read the latest state to save it as a serialisation
            SettingsList lastState = data.getParcelableExtra(ImgLyIntent.SETTINGS_LIST);
            try {
                new PESDKFileWriter(lastState).writeJson(new File(
                  Environment.getExternalStorageDirectory(),
                  "serialisationReadyToReadWithPESDKFileReader.json"
                ));
            } catch (IOException e) { e.printStackTrace(); }

        } else if (resultCode == RESULT_CANCELED && requestCode == PESDK_RESULT) {
            // Editor was canceled
            Uri sourceURI = data.getParcelableExtra(ImgLyIntent.SOURCE_IMAGE_URI);
            // TODO: Do something with the source...
        }
    }
}
``````
{% endcapture %}{% capture second_snippet_EditorDemoActivity %}
Kotlin
---
``````kotlin
class KEditorDemoActivity : Activity(), PermissionRequest.Response {

    companion object {
        const val PESDK_RESULT = 1
        const val GALLERY_RESULT = 2
    }

    // Important permission request for Android 6.0 and above, don't forget to add this!
    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
        PermissionRequest.onRequestPermissionsResult(requestCode, permissions, grantResults)
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    }

    override fun permissionGranted() {}

    override fun permissionDenied() {
        /* TODO: The Permission was rejected by the user. The Editor was not opened,
         * Show a hint to the user and try again. */
    }

    // Create a empty new SettingsList and apply the changes on this referance.
    // If you include our asset Packs and use our UI you also need to add them to the UI,
    // otherwise they are only available for the backend (like Serialisation)
    // See the specific feature sections of our guides if you want to know how to add our own Assets.
    private fun createPesdkSettingsList() =
      PhotoEditorSettingsList()
        .configure<UiConfigFilter> {
            it.setFilterList(FilterPackBasic.getFilterPack())
        }
        .configure<UiConfigText> {
            it.setFontList(FontPackBasic.getFontPack())
        }
        .configure<UiConfigFrame> {
            it.setFrameList(FramePackBasic.getFramePack())
        }
        .configure<UiConfigOverlay> {
            it.setOverlayList(OverlayPackBasic.getOverlayPack())
        }
        .configure<UiConfigSticker> {
          it.setStickerLists(
            StickerPackEmoticons.getStickerCategory(),
            StickerPackShapes.getStickerCategory()
          )
        }
        .configure<SaveSettings> {
          // Set custom editor image export settings
          it.setExportDir(Directory.DCIM, "SomeFolderName")
          it.setExportPrefix("result_")
          it.savePolicy = SaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT
        }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        openSystemGalleryToSelectAnImage()
    }

    fun openSystemGalleryToSelectAnImage() {
        val intent = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
        if (intent.resolveActivity(packageManager) != null) {
            startActivityForResult(intent, GALLERY_RESULT)
        } else {
            Toast.makeText(
              this,
              "No Gallery APP installed",
              Toast.LENGTH_LONG
            ).show()
        }
    }

    fun openEditor(inputImage: Uri?) {
        val settingsList = createPesdkSettingsList()

        settingsList.configure<LoadSettings> {
            it.source = inputImage
        }

        settingsList[LoadSettings::class].source = inputImage

        PhotoEditorBuilder(this)
          .setSettingsList(settingsList)
          .startActivityForResult(this, PESDK_RESULT)
    }


    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (resultCode == RESULT_OK && requestCode == GALLERY_RESULT) {
            // Open Editor with some uri in this case with an image selected from the system gallery.
            openEditor(data?.data)

        } else if (resultCode == RESULT_OK && requestCode == PESDK_RESULT) { // Editor has saved an Image.

            val resultURI = data?.getParcelableExtra<Uri?>(ImgLyIntent.RESULT_IMAGE_URI)?.also {
                // Scan result uri to show it up in the Gallery
                sendBroadcast(Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(it))
            }

            val sourceURI = data?.getParcelableExtra<Uri?>(ImgLyIntent.SOURCE_IMAGE_URI)?.also {
                // Scan source uri to show it up in the Gallery
                sendBroadcast(Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE).setData(it))
            }

            Log.i("PESDK", "Source image is located here $sourceURI")
            Log.i("PESDK", "Result image is located here $resultURI")

            // TODO: Do something with the result image

            // OPTIONAL: read the latest state to save it as a serialisation
            val lastState = data?.getParcelableExtra<SettingsList>(ImgLyIntent.SETTINGS_LIST)
            try {
                PESDKFileWriter(lastState).writeJson(File(
                  Environment.getExternalStorageDirectory(),
                  "serialisationReadyToReadWithPESDKFileReader.json"
                ))
            } catch (e: IOException) {
                e.printStackTrace()
            }

        } else if (resultCode == RESULT_CANCELED && requestCode == PESDK_RESULT) {
            // Editor was canceled
            val sourceURI = data?.getParcelableExtra<Uri?>(ImgLyIntent.SOURCE_IMAGE_URI)
            // TODO: Do something with the source...
        }
    }

}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_EditorDemoActivity | push: second_snippet_EditorDemoActivity %}
{% capture identifier %}{{page.title}}-{{page.version}}-EditorDemoActivity{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Sample Application

You can access the source code for our demo application from our {% include guides/android/demo-repository.md %}.
