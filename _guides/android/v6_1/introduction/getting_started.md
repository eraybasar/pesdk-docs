---
layout: guides/content
title: &title Getting Started # title as shown in the menu and 
order: 1
menuitem: *title
platform: android
version: v6_1
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
* Android Studio 3.0+
* Android Minimum SDK 16+ \(Android 4.1.0 released 27. Juni 2012\)
* Gradle 3.0+
* Android Build Tools 28.0.3+
* Android Support Repository 27.1.1+
* License\*

\*You will need a **valid license file** in order to use the PhotoEditor SDK in your own application. You can request a trial license at [here](https://www.photoeditorsdk.com/users/new). As our {% include guides/android/example-app.md %} comes bundled with its own license, you can use this right away, if you just want to take a quick look.

## Supported Android versions

The PhotoEditor SDK supports **Android 4.1.0+ API 16** as the `minSdkVersion`, but it must be
compiled with `Build-API` and `targetSdkVersion` Level 27+ to support Android 8.1 and above.


## Add your license file

Before using any components of the PhotoEditor SDK, you have to add your license file to your applications assets folder.
The expected default name of the license file is "LICENSE". In order to change this, see licencePath option of PESDKConfig in your gradle file.  

The license is digitally signed and can't be altered without becoming invalid. Our sample app comes with its own license, so you can try that right away. To try our SDK in your own app, you need to request a trial license that's bound to your bundle identifier. You can start a trial [here](https://www.photoeditorsdk.com/users/new) and download your license file from your [dashboard](https://www.photoeditorsdk.com/dashboard).

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
        classpath 'ly.img.android.pesdk:plugin:6.1.3'
    }
}
```


You will also have to add the pesdk plugin and PESDKConfig into your module's `build.gradle` file:

```groovy
// Apply the Android Plugin
apply plugin: 'com.android.application'

// Apply the PESDKPlugin
apply plugin: 'ly.img.android.pesdk'

// Configure the PESDKPlugin
pesdkConfig {

    licencePath "LICENSE" // Name of the Licence file in the asset folder

    // If you use another supportLibVersion ('com.android.support'), change this version here to update your own supportLibVersion
    supportLibVersion "27.1.1"

    // Define the modules you are need
    modules {
        // Add all the backend modules you need
        include 'ly.img.android.pesdk.operation:text'
        include 'ly.img.android.pesdk.operation:frame'
        include 'ly.img.android.pesdk.operation:focus'
        include 'ly.img.android.pesdk.operation:brush'
        include 'ly.img.android.pesdk.operation:camera'
        include 'ly.img.android.pesdk.operation:filter'
        include 'ly.img.android.pesdk.operation:sticker'
        include 'ly.img.android.pesdk.operation:overlay'
        include 'ly.img.android.pesdk.operation:adjustment'
        include 'ly.img.android.pesdk.operation:text-design'
        include 'ly.img.android.pesdk.operation:abstract-sticker'

        // Add all the UI modules you are need
        include 'ly.img.android.pesdk.ui.mobile_ui:core'
        include 'ly.img.android.pesdk.ui.mobile_ui:text'
        include 'ly.img.android.pesdk.ui.mobile_ui:focus'
        include 'ly.img.android.pesdk.ui.mobile_ui:frame'
        include 'ly.img.android.pesdk.ui.mobile_ui:brush'
        include 'ly.img.android.pesdk.ui.mobile_ui:filter'
        include 'ly.img.android.pesdk.ui.mobile_ui:camera'
        include 'ly.img.android.pesdk.ui.mobile_ui:sticker'
        include 'ly.img.android.pesdk.ui.mobile_ui:overlay'
        include 'ly.img.android.pesdk.ui.mobile_ui:transform'
        include 'ly.img.android.pesdk.ui.mobile_ui:adjustment'
        include 'ly.img.android.pesdk.ui.mobile_ui:text-design'


        // Add the serializer if you need
        include 'ly.img.android.pesdk:serializer'

        // Add asset packs if you need
        include 'ly.img.android.pesdk.assets:font-basic'
        include 'ly.img.android.pesdk.assets:font-text-design'
        include 'ly.img.android.pesdk.assets:frame-basic'
        include 'ly.img.android.pesdk.assets:filter-basic'
        include 'ly.img.android.pesdk.assets:overlay-basic'
        include 'ly.img.android.pesdk.assets:sticker-shapes'
        include 'ly.img.android.pesdk.assets:sticker-emoticons'
    }
}

// Do your Android Configurations... ex.
android {
    /* Set the compile SDK and the Build SDK min. at SDK 28 or grater.
     * We can't provide support for Bugs, that are the result of older SDK versions.
     */
    compileSdkVersion 28
    buildToolsVersion '28.0.3'

    defaultConfig {
        /*
         * Replace with your App-ID and keep sure that it match with your license!
         * @see http://tools.android.com/tech-docs/new-build-system/applicationid-vs-packagename
         */
        applicationId "my.domain.application"

        /* Set the minimum supported SDK Version to 16 (Android 4.1.0) or higher */
        minSdkVersion 16

        /* Set the target SDK Version at minimum to 28 or higher */
        targetSdkVersion 28

        /* Set your own Version Code and Version Name */
        versionCode 1
        versionName "1.0"
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
        settingsList.getSettingsModel(EditorSaveSettings.class)
          .setExportDir(Directory.DCIM, "SomeFolderName")
          .setExportPrefix("result_")
          .setSavePolicy(EditorSaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT);

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
    private fun createPesdkSettingsList() = SettingsList().apply {

        // If you include our asset Packs and you use our UI you also need to add them to the UI,
        // otherwise they are only available for the backend
        // See the specific feature sections of our guides if you want to know how to add our own Assets.

        getSettingsModel(UiConfigFilter::class.java).apply {
            setFilterList(FilterPackBasic.getFilterPack())
        }

        getSettingsModel(UiConfigText::class.java).apply {
            setFontList(FontPackBasic.getFontPack())
        }

        getSettingsModel(UiConfigFrame::class.java).apply {
            setFrameList(FramePackBasic.getFramePack())
        }

        getSettingsModel(UiConfigOverlay::class.java).apply {
            setOverlayList(OverlayPackBasic.getOverlayPack())
        }

        getSettingsModel(UiConfigSticker::class.java).apply {
            setStickerLists(
              StickerPackEmoticons.getStickerCategory(),
              StickerPackShapes.getStickerCategory()
            )
        }

        // Set custom camera image export settings
        getSettingsModel(CameraSettings::class.java).apply {
            setExportDir(Directory.DCIM, "SomeFolderName")
            setExportPrefix("camera_")
        }

        // Set custom editor image export settings
        getSettingsModel(EditorSaveSettings::class.java).apply{
            setExportDir(Directory.DCIM, "SomeFolderName")
            setExportPrefix("result_")
            savePolicy = EditorSaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT
        }
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

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: android.content.Intent) {
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
            } catch (e: IOException) { e.printStackTrace() }

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
        settingsList.getSettingsModel(EditorSaveSettings.class)
          .setExportDir(Directory.DCIM, "SomeFolderName")
          .setExportPrefix("result_")
          .setSavePolicy(EditorSaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT);

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
        settingsList.getSettingsModel(EditorLoadSettings.class)
          .setImageSource(inputImage);

        new PhotoEditorBuilder(this)
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
    private fun createPesdkSettingsList() = SettingsList().apply {

        // If you include our asset Packs and you use our UI you also need to add them to the UI,
        // otherwise they are only available for the backend
        // See the specific feature sections of our guides if you want to know how to add our own Assets.

        getSettingsModel(UiConfigFilter::class.java).apply {
            setFilterList(FilterPackBasic.getFilterPack())
        }

        getSettingsModel(UiConfigText::class.java).apply {
            setFontList(FontPackBasic.getFontPack())
        }

        getSettingsModel(UiConfigFrame::class.java).apply {
            setFrameList(FramePackBasic.getFramePack())
        }

        getSettingsModel(UiConfigOverlay::class.java).apply {
            setOverlayList(OverlayPackBasic.getOverlayPack())
        }

        getSettingsModel(UiConfigSticker::class.java).apply {
            setStickerLists(
              StickerPackEmoticons.getStickerCategory(),
              StickerPackShapes.getStickerCategory()
            )
        }

        // Set custom editor image export settings
        getSettingsModel(EditorSaveSettings::class.java).apply {
            setExportDir(Directory.DCIM, "SomeFolderName")
            setExportPrefix("result_")
            savePolicy = EditorSaveSettings.SavePolicy.RETURN_ALWAYS_ONLY_OUTPUT
        }
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


    fun openEditor(inputImage: Uri) {
        val settingsList = createPesdkSettingsList().apply {
            getSettingsModel(EditorLoadSettings::class.java).apply {
                imageSource = inputImage
            }
        }

        PhotoEditorBuilder(this)
          .setSettingsList(settingsList)
          .startActivityForResult(this, PESDK_RESULT)
    }


    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent) {
        super.onActivityResult(requestCode, resultCode, data)

        if (resultCode == Activity.RESULT_OK && requestCode == GALLERY_RESULT) {
            // Open Editor with some uri in this case with an image selected from the system gallery.
            openEditor(data.data)

        } else if (resultCode == Activity.RESULT_OK && requestCode == PESDK_RESULT) { // Editor has saved an Image.

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

