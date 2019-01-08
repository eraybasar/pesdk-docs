---
layout: guides/content
title: &title Migration from v5 # title as shown in the menu and
description: Look for a straightforward migration of the PhotoEditor SDK v5.
menuitem: *title
order: 3
platform: android
version: v6_1
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

To keep the good quality of our products and keep the ability to introduce new features, we have to refactor the sdk from time to time.
We try to keep the external api, as good as possible, but unfortunately this is not always possible.

## Migrate from v5 to v6

## 1. Step, update the project `build.gradle`

Starting with v6 we have introduced a Gradle plugin, written in groovy to keep the integration as simple as possible for you.
To enable this plugin you have to prepare you project `build.gradle` file at first.

```
// Add the PESDK plugin repository
buildscript {
    repositories {

        google() // Add the google maven repository if you not already have it.
        jcenter()
        maven { url 'https://artifactory.img.ly/artifactory/imgly' }
    }
    dependencies {

        // And plugin dependency with the lates available version
        classpath 'ly.img.android.pesdk:plugin:6.1.4'

        // Update you gradle version at least to v3.1.3
        classpath 'com.android.tools.build:gradle:3.1.3'
        ...
    }
}

allprojects {
    repositories {
        google() // Add the google maven repository if you not already have it.
        jcenter()
    }
}
```

## 2. Step, remove unused configs from your application `build.gradle`

Starting with v6, some of the configurations needed for the SDK are handled by the PESDK-Plugin itself.

Because of this you can __remove__ the following configuration.
```
android {
    defaultConfig {
        renderscriptTargetApi 23
        renderscriptSupportModeEnabled true
    }
}
```

Remove also the old dependencies
```
dependencies {
    compile 'ly.img.android:photo-editor-sdk:5.1.5'
        apt 'ly.img.android:build-processor:5.1.5'
    ...
}
```

## 3. Step apply the PESDK-Plugin to your application `build.gradle`

Starting with v6, the SDK is split into separate modules, the plugin is set up and the required modules are defined.

```
// Apply the Android Plugin
apply plugin: 'com.android.application'

// Apply the PESDKPlugin, this must be done after the Android Plugin!
apply plugin: 'ly.img.android.pesdk'

// Configure the PESDKPlugin
pesdkConfig {

    licencePath "LICENSE" // Name of the Licence file in the asset folder

    // Insert the latest SDK version here. You will find it here https://github.com/imgly/pesdk-android-demo/releases
    pesdkVersion "6.0.0"

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
```

### 4. Step remove `PESDK.init(this);`

From v6 there is no need to initiate the SDK anymore.
You can remove this line of code, and you can also remove the Application class if you only need to initiate the PESDK.

### 5. Update your `SettingsList` code and all the imports.

With v6 the internal package structure has changed a lot, sorry!

To keep it simple, remove all old imports and rewrite your initialization [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/SettingsList.html).
Look the `createPesdkSettingsList()` method of the following example code to get a default configuration.

p.s. If you do not apply any Assets to the UI, the tools are empty. This is not a bug ;-)

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

