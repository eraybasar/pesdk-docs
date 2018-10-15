---
layout: guides/content
title: &title Styling # title as shown in the menu and

menuitem: *title
order: 0
platform: android
version: v6
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


It's easy to customize the PhotoEditor Android SDK's style.
​All resource and style identifier can be overwritten. They have the prefix: `imgly_` e.g. `Imgly.`
​
### Download the Default Layout as Reference
For an easy creation of a new interface design simply download our {% include guides/android/demo-repository.md %} and extract the `res` subfolder from the `default_res_files` folder.

### Prepare your Project
Copy and paste the downloaded files (only the files, not the folder) into the res folder of your own app module.

Open your project in Android Studio:

![Res Folder]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_res_files.png){: width="400px"}

### Change default icons

You can add your own icons:

![Icon size]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_icon_size.png){: width="400px"}

Please make sure, that you overwrite the icon in all densities.

* Put a 48x48px icon file into the drawable-mdpi folder (1.0x baseline) for medium-density
* Put a 72x72px icon file into the drawable-hdpi folder \(1.5x) for high-density
* Put a 96x96px icon file into the drawable-xhdpi folder (2.0x) for extra-high-density
* Put a 180x180px icon file into the drawable-xxhdpi folder (3.0x) for extra-extra-high-density
* Put a 192x192px icon file into the drawable-xxxhdpi folder (4.0x) for extra-extra-extra-high-density


There are two special files inside this project: `imgly_icon_option_selected_color.png` and `imgly_icon_option_selected_color_bg.png`.
Both combined will create an icon which will be used for both the fore- and background colorpicking for the sticker.

The white color values from `imgly_icon_option_selected_color.png` replace and overlays the content from `imgly_icon_option_selected_color_bg.png` with the chosen color within the runtime.


### Change default colors

Open the res/values/imgly_color.xml in your project and edit the specific ARGB Hex value or double tap the color rect on the left side of the line to open the color picker

![Colors]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_colors.png){: width="600px"}

### Change Layout

If you want to change the order of the ActionBar Buttons, you can open the `imgly_widget_actionbar.xml` in the layout editor and simply change the order of the xml elements.

> __Warning:__ Do NOT change layout IDs or element types (extensions of a type are fine), otherwise the app will crash with a `NullPointer` or a `TypeCast` exception!

If you want to change the ActionBar Button Style go to the specific Element, hold down the Command Key and click on the style attribute value `@style/Imgly.Editor.Header.Button.AcceptButton`
The Editor now jumps in the specific Style element in the `imgly_style.xml` file.
Now you can edit all style attributes. It's also possible to override the style attributes directly in the element node.

![Edit style]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_edit_style.png){: width="800px"}

### Change interactive views

If you want to change views in the sdk have no fear. Our Event system brings you the possibility to customize it with ease.
You can create new View classes according to your own ideas. For access to the editor settings you need the state handler. For interactive vies you need a clickListener and to intercept the event system calls you can PESDKEvents.
The Example shows how to change the Export button and also changes the workflow a little bit.

```java
{

public static final String FOLDER = "ImgLy";

public static SettingsList createInitialSettingsList() {

    SettingsList settingsList = new SettingsList();

    //settingsList.getSettingsModel(UiConfigTheme.class).setTheme(R.style.MyPesdkTheme);

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

    HashSet<Exify.TAG> exifBlackList = new HashSet<>();
    exifBlackList.add(Exify.TAG.DATE_TIME);
    exifBlackList.add(Exify.TAG.DATE_TIME_DIGITIZED);
    exifBlackList.add(Exify.TAG.DATE_TIME_ORIGINAL);
    exifBlackList.add(Exify.TAG.GPS_TIME_STAMP);

    settingsList.getSettingsModel(EditorSaveSettings.class)
      .setExportDir(Directory.DCIM, FOLDER)
      .setExportPrefix("result_")
      .setJpegQuality(80, true)
      .setExportFormat(EditorSaveSettings.FORMAT.AUTO)
      .setExifMode(new ExifModeBlackListCopy(exifBlackList))
      .setSavePolicy(EditorSaveSettings.SavePolicy.KEEP_SOURCE_AND_CREATE_ALWAYS_OUTPUT);

    return settingsList;
}

private static void configEditorTools(SettingsList settingsList) {
    // Obtain the config
    UiConfigMainMenu uiConfigMainMenu = settingsList.getSettingsModel(UiConfigMainMenu.class);
    // Set the tools you want keep sure you licence is cover the feature and do not forget to include the correct modules in your build.gradle
    uiConfigMainMenu.setToolList(
      new ToolItem("imgly_tool_transform", R.string.pesdk_transform_title_name, ImageSource.create(R.drawable.imgly_icon_tool_transform)),
      new ToolItem("imgly_tool_filter", R.string.pesdk_filter_title_name, ImageSource.create(R.drawable.imgly_icon_tool_filters)),
      new ToolItem("imgly_tool_adjustment", R.string.pesdk_adjustments_title_name, ImageSource.create(R.drawable.imgly_icon_tool_adjust)),
      new ToolItem("imgly_tool_sticker_selection", R.string.pesdk_sticker_title_name, ImageSource.create(R.drawable.imgly_icon_tool_sticker)),
      new ToolItem("imgly_tool_text_design", R.string.pesdk_textDesign_title_name, ImageSource.create(R.drawable.imgly_icon_tool_text_design)),
      new ToolItem("imgly_tool_text", R.string.pesdk_text_title_name, ImageSource.create(R.drawable.imgly_icon_tool_text)),
      new ToolItem("imgly_tool_overlay", R.string.pesdk_overlay_title_name, ImageSource.create(R.drawable.imgly_icon_tool_overlay)),
      new ToolItem("imgly_tool_frame", R.string.pesdk_frame_title_name, ImageSource.create(R.drawable.imgly_icon_tool_frame)),
      new ToolItem("imgly_tool_brush", R.string.pesdk_brush_title_name, ImageSource.create(R.drawable.imgly_icon_tool_brush)),
      new ToolItem("imgly_tool_focus", R.string.pesdk_focus_title_name, ImageSource.create(R.drawable.imgly_icon_tool_focus))
    );
}

private static void configStickerUi(SettingsList settingsList) {
    UiConfigSticker uiConfigSticker = settingsList.getSettingsModel(UiConfigSticker.class);
    uiConfigSticker.setStickerLists(
      new StickerCategoryItem(
        "myUniqStickerCategoryId1",
        R.string.imgly_sticker_category_name_emoticons,
        ImageSource.create(R.drawable.imgly_sticker_emoticons_alien),
        new ImageStickerItem("imgly_sticker_emoticons_grin", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_grin, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_grin)),
        new ImageStickerItem("imgly_sticker_emoticons_laugh", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_laugh, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_laugh)),
        new ImageStickerItem("imgly_sticker_emoticons_smile", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_smile, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_smile)),
        new ImageStickerItem("imgly_sticker_emoticons_wink", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_wink, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_wink)),
        new ImageStickerItem("imgly_sticker_emoticons_tongue_out_wink", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_tongue_out_wink, ImageSource.create( ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_tongue_out_wink)),
        new ImageStickerItem("imgly_sticker_emoticons_angel", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_angel, ImageSource.create( ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_angel))
        //...
      ),
      new StickerCategoryItem(
        "myUniqStickerCategoryId2",
        R.string.imgly_sticker_category_name_shapes,
        ImageSource.create(R.drawable.imgly_sticker_shapes_badge_35),
        new ImageStickerItem("imgly_sticker_shapes_badge_01", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_01, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_01)),
        new ImageStickerItem("imgly_sticker_shapes_badge_04", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_04, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_04)),
        new ImageStickerItem("imgly_sticker_shapes_badge_12", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_12, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_12)),
        new ImageStickerItem("imgly_sticker_shapes_badge_06", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_06, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_06)),
        new ImageStickerItem("imgly_sticker_shapes_badge_13", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_13, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_13))
        //...
      )
    );
}

private static void configStickerAssets(SettingsList settingsList) {
    // Obtain the asset config from you settingsList
    AssetConfig assetConfig = settingsList.getConfig();
    // Add Assets
    assetConfig.addAsset(
      new ImageStickerAsset(
        "stickerAssetId1",
        ImageSource.create(R.drawable.imgly_sticker_emoticons_alien)
      ),
      new ImageStickerAsset(
        "stickerAssetId2",
        ImageSource.create(R.drawable.imgly_sticker_emoticons_nerd)
      ),
      new ImageStickerAsset(
        "stickerAssetId4",
        R.drawable.imgly_sticker_shapes_arrow_02,
        ImageStickerAsset.OPTION_MODE.TINT_STICKER
      ),
      new ImageStickerAsset(
        "stickerAssetId5",
        R.drawable.imgly_sticker_emoticons_angel,
        ImageStickerAsset.OPTION_MODE.INK_STICKER
      ),
      new ImageStickerAsset(
        "stickerAssetId6",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses.png"))
      ),
      new ImageStickerAsset(
        "stickerAssetId7",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses-vector.xml"))
      ),
      new ImageStickerAsset(
        "stickerAssetId8",
        ImageSource.create(Uri.fromFile(new File("path_to_sticker_folder", "sticker_name.png")))
      )
    );
}


public static void configTextDesigns(SettingsList settingsList) {
    UiConfigTextDesign uiConfigTextDesign = settingsList.getSettingsModel(UiConfigTextDesign.class);
    uiConfigTextDesign.setTextDesignList(
      new TextDesignItem(TextDesignBlocks.ID, R.string.pesdk_textDesign_asset_blocks, ImageSource.create(R.drawable.imgly_icon_text_design_blocks)),
      new TextDesignItem(TextDesignRotated.ID, R.string.pesdk_textDesign_asset_rotated, ImageSource.create(R.drawable.imgly_icon_text_design_rotated)),
      new TextDesignItem(TextDesignBlocksLight.ID, R.string.pesdk_textDesign_asset_blocksLight, ImageSource.create(R.drawable.imgly_icon_text_design_blocks_light)),
      new TextDesignItem(TextDesignEqualWidth.ID, R.string.pesdk_textDesign_asset_equalWidth, ImageSource.create(R.drawable.imgly_icon_text_design_equal_width)),
      new TextDesignItem(TextDesignMasked.ID, R.string.pesdk_textDesign_asset_masked, ImageSource.create(R.drawable.imgly_icon_text_design_masked)),
      new TextDesignItem(TextDesignCelebrate.ID, R.string.pesdk_textDesign_asset_celebrate, ImageSource.create(R.drawable.imgly_icon_text_design_celebrate)),
      new TextDesignItem(TextDesignSunshine.ID, R.string.pesdk_textDesign_asset_sunshine, ImageSource.create(R.drawable.imgly_icon_text_design_sunshine)),
      new TextDesignItem(TextDesignMaskedBadge.ID, R.string.pesdk_textDesign_asset_maskedBadge, ImageSource.create(R.drawable.imgly_icon_text_design_masked_badge)),
      new TextDesignItem(TextDesignBlocksCondensed.ID, R.string.pesdk_textDesign_asset_blocksCondensed, ImageSource.create(R.drawable.imgly_icon_text_design_blocks_condensed)),
      new TextDesignItem(TextDesignCelebrateSimple.ID, R.string.pesdk_textDesign_asset_celebrateSimple, ImageSource.create(R.drawable.imgly_icon_text_design_celebrate_simple)),
      new TextDesignItem(TextDesignEqualWidthFat.ID, R.string.pesdk_textDesign_asset_equalWidthFat, ImageSource.create(R.drawable.imgly_icon_text_design_equal_width_fat)),
      new TextDesignItem(TextDesignWatercolor.ID, R.string.pesdk_textDesign_asset_watercolor, ImageSource.create(R.drawable.imgly_icon_text_design_watercolor)),
      new TextDesignItem(TextDesignParticles.ID, R.string.pesdk_textDesign_asset_particles, ImageSource.create(R.drawable.imgly_icon_text_design_particles)),
      new TextDesignItem(TextDesignMaskedSpeechBubble.ID, R.string.pesdk_textDesign_asset_maskedSpeechBubble, ImageSource.create(R.drawable.imgly_icon_text_design_masked_speech_bubble)),
      new TextDesignItem(TextDesignMaskedSpeechBubbleComic.ID, R.string.pesdk_textDesign_asset_maskedSpeechBubbleComic, ImageSource.create(R.drawable.imgly_icon_text_design_masked_speech_bubble_comic)),
      new TextDesignItem(TextDesignMultiline.ID, R.string.pesdk_textDesign_asset_multiline, ImageSource.create(R.drawable.imgly_icon_text_design_multiline))
    );
}

public static void configTransform(SettingsList settingsList) {

    // Obtain the asset config from you settingsList
    AssetConfig assetConfig = settingsList.getConfig();

    // Clear defaults and add aspect assets to the backend
    assetConfig.getAssetMap(CropAspectAsset.class).clear().add(
      CropAspectAsset.FREE_CROP,
      new CropAspectAsset("my_crop_1_1",1, 1, false),
      new CropAspectAsset("my_crop_16_9",16, 9, false),
      new CropAspectAsset("my_crop_9_16",9, 16, false),
      new CropAspectAsset("my_crop_4_3",4, 3, false),
      new CropAspectAsset("my_crop_3_4",3, 4, false),
      new CropAspectAsset("my_crop_3_2",3, 2, false),
      new CropAspectAsset("my_crop_2_3",2, 3, false)
    );

    // Obtain the ui config from you settingsList
    UiConfigAspect uiConfigAspect = settingsList.getSettingsModel(UiConfigAspect.class);

    // Add aspect items to UI
    uiConfigAspect.setAspectList(
      new CropAspectItem("my_crop_free", R.string.pesdk_transform_button_freeCrop),
      new CropAspectItem("my_crop_1_1"),
      new CropAspectItem("my_crop_16_9"),
      new CropAspectItem("my_crop_9_16"),
      new CropAspectItem("my_crop_4_3"),
      new CropAspectItem("my_crop_3_4"),
      new CropAspectItem("my_crop_3_2"),
      new CropAspectItem("my_crop_2_3")
    );
}

public static void configForceCrop(SettingsList settingsList) {
    // Remove default Assets and add your own aspects
    settingsList.getSettingsModel(AssetConfig.class).getAssetMap(CropAspectAsset.class)
      .clear().add(
      new CropAspectAsset("aspect_1_1", 1, 1, false),
      new CropAspectAsset("aspect_16_9", 16, 9, false),
      new CropAspectAsset("aspect_9_16", 9, 16, false)
    );

    // Add your own Asset to UI config and select the Force crop Mode.
    settingsList.getSettingsModel(UiConfigAspect.class).setAspectList(
      new CropAspectItem("aspect_1_1"),
      new CropAspectItem("aspect_16_9"),
      new CropAspectItem("aspect_9_16")
    ).setForceCropMode(
      // This prevents that the Transform tool opens at start.
      UiConfigAspect.ForceCrop.SHOW_TOOL_NEVER
    );
}

public static void configShouldCropped(SettingsList settingsList) {

    // Set force crop by asset id, make sure you have added that asset.
    settingsList.getSettingsModel(TransformSettings.class)
      .setForceCrop("aspect_16_9", "aspect_9_16");
}

public static void configAdjustment(SettingsList settingsList) {
    UiConfigAdjustment uiConfigAdjustment = settingsList.getSettingsModel(UiConfigAdjustment.class);
    uiConfigAdjustment.setOptionList(
      new AdjustOption(AdjustmentToolPanel.OPTION_BRIGHTNESS, R.string.pesdk_adjustments_button_brightnessTool, ImageSource.create(R.drawable.imgly_icon_option_brightness)),
      new AdjustOption(AdjustmentToolPanel.OPTION_CONTRAST, R.string.pesdk_adjustments_button_contrastTool, ImageSource.create(R.drawable.imgly_icon_option_contrast)),
      new AdjustOption(AdjustmentToolPanel.OPTION_SATURATION, R.string.pesdk_adjustments_button_saturationTool, ImageSource.create(R.drawable.imgly_icon_option_saturation)),
      new AdjustOption(AdjustmentToolPanel.OPTION_CLARITY, R.string.pesdk_adjustments_button_clarityTool, ImageSource.create(R.drawable.imgly_icon_option_clarity)),
      new AdjustOption(AdjustmentToolPanel.OPTION_SHADOW, R.string.pesdk_adjustments_button_shadowTool, ImageSource.create(R.drawable.imgly_icon_option_shadow)),
      new AdjustOption(AdjustmentToolPanel.OPTION_HIGHLIGHT, R.string.pesdk_adjustments_button_highlightTool, ImageSource.create(R.drawable.imgly_icon_option_highlight)),
      new AdjustOption(AdjustmentToolPanel.OPTION_EXPOSURE, R.string.pesdk_adjustments_button_exposureTool, ImageSource.create(R.drawable.imgly_icon_option_exposure)),
      new AdjustOption(AdjustmentToolPanel.OPTION_GAMMA, R.string.pesdk_adjustments_button_gammaTool, ImageSource.create(R.drawable.imgly_icon_option_gamma))
    );
}

public static void configFilterAssets(SettingsList settingsList) {
    ConfigMap<FilterAsset> filterAssetsMap = settingsList.getSettingsModel(AssetConfig.class).getAssetMap(FilterAsset.class);
    filterAssetsMap.add(FilterAsset.NONE_FILER);
    filterAssetsMap.add(new LutColorFilterAsset("my_own_lut_id", ImageSource.create(R.drawable.imgly_lut_ad1920_5_5_128), 5, 5, 128));
    filterAssetsMap.add(new ColorFilterAssetAD1920());
    filterAssetsMap.add(new ColorFilterAssetAncient());
    filterAssetsMap.add(new ColorFilterAssetBleached());
    filterAssetsMap.add(new ColorFilterAssetBleachedBlue());
    filterAssetsMap.add(new ColorFilterAssetBlues());
    filterAssetsMap.add(new ColorFilterAssetBlueShadows());
    filterAssetsMap.add(new ColorFilterAssetBreeze());
    filterAssetsMap.add(new ColorFilterAssetBW());
    filterAssetsMap.add(new ColorFilterAssetCelsius());
    filterAssetsMap.add(new ColorFilterAssetChest());
    filterAssetsMap.add(new ColorFilterAssetClassic());
    filterAssetsMap.add(new ColorFilterAssetColorful());
    filterAssetsMap.add(new ColorFilterAssetCool());
    filterAssetsMap.add(new ColorFilterAssetCottonCandy());
    filterAssetsMap.add(new ColorFilterAssetCreamy());
    filterAssetsMap.add(new ColorFilterAssetEighties());
    filterAssetsMap.add(new ColorFilterAssetElder());
    filterAssetsMap.add(new ColorFilterAssetEvening());
    filterAssetsMap.add(new ColorFilterAssetFall());
    filterAssetsMap.add(new ColorFilterAssetFixie());
    filterAssetsMap.add(new ColorFilterAssetFood());
    filterAssetsMap.add(new ColorFilterAssetFridge());
    filterAssetsMap.add(new ColorFilterAssetFront());
    filterAssetsMap.add(new ColorFilterAssetGlam());
    filterAssetsMap.add(new ColorFilterAssetGobblin());
    filterAssetsMap.add(new ColorFilterAssetHighCarb());
    filterAssetsMap.add(new ColorFilterAssetHighContrast());
    filterAssetsMap.add(new ColorFilterAssetK1());
    filterAssetsMap.add(new ColorFilterAssetK2());
    filterAssetsMap.add(new ColorFilterAssetK6());
    filterAssetsMap.add(new ColorFilterAssetKDynamic());
    filterAssetsMap.add(new ColorFilterAssetKeen());
    filterAssetsMap.add(new ColorFilterAssetLenin());
    filterAssetsMap.add(new ColorFilterAssetLitho());
    filterAssetsMap.add(new ColorFilterAssetLomo());
    filterAssetsMap.add(new ColorFilterAssetLomo100());
    filterAssetsMap.add(new ColorFilterAssetLucid());
    filterAssetsMap.add(new ColorFilterAssetMellow());
    filterAssetsMap.add(new ColorFilterAssetNeat());
    filterAssetsMap.add(new ColorFilterAssetNoGreen());
    filterAssetsMap.add(new ColorFilterAssetOrchid());
    filterAssetsMap.add(new ColorFilterAssetPale());
    filterAssetsMap.add(new ColorFilterAssetPitched());
    filterAssetsMap.add(new ColorFilterAssetPola669());
    filterAssetsMap.add(new ColorFilterAssetPolaSx());
    filterAssetsMap.add(new ColorFilterAssetPro400());
    filterAssetsMap.add(new ColorFilterAssetQuozi());
    filterAssetsMap.add(new ColorFilterAssetSepiahigh());
    filterAssetsMap.add(new ColorFilterAssetSettled());
    filterAssetsMap.add(new ColorFilterAssetSeventies());
    filterAssetsMap.add(new ColorFilterAssetSin());
    filterAssetsMap.add(new ColorFilterAssetSoft());
    filterAssetsMap.add(new ColorFilterAssetSteel());
    filterAssetsMap.add(new ColorFilterAssetSummer());
    filterAssetsMap.add(new ColorFilterAssetSunset());
    filterAssetsMap.add(new ColorFilterAssetTender());
    filterAssetsMap.add(new ColorFilterAssetTexas());
    filterAssetsMap.add(new ColorFilterAssetTwilight());
    filterAssetsMap.add(new ColorFilterAssetWinter());
    filterAssetsMap.add(new ColorFilterAssetX400());
}

public static void configOverlay(SettingsList settingsList) {
    // Obtain the asset config from you settingsList
    AssetConfig assetConfig = settingsList.getConfig();

    // Add Assets
    assetConfig.addAsset(
      OverlayAsset.NONE_BACKDROP,
      new OverlayAsset(
        "your-uniq-overlay-id-1",
        ImageSource.create(R.drawable.imgly_overlay_golden),
        BlendMode.LIGHTEN,
        1f
      ),
      new OverlayAsset(
        "your-uniq-overlay-id-2",
        ImageSource.create(R.drawable.imgly_overlay_lightleak1),
        BlendMode.SCREEN,
        1f
      ),
      new OverlayAsset(
        "your-uniq-overlay-id-3",
        ImageSource.create(R.drawable.imgly_overlay_mosaic),
        BlendMode.MULTIPLY,
        1f
      ),
      new OverlayAsset(
        "your-uniq-overlay-id-4",
        ImageSource.create(R.drawable.imgly_overlay_paper),
        BlendMode.MULTIPLY,
        1f
      ),
      new OverlayAsset(
        "your-uniq-overlay-id-5",
        ImageSource.create(R.drawable.imgly_overlay_rain),
        BlendMode.OVERLAY,
        1f
      ),
      new OverlayAsset(
        "your-uniq-overlay-id-6",
        ImageSource.create(R.drawable.imgly_overlay_vintage),
        BlendMode.DARKEN,
        1f
      )
    );

    // Obtain the ui config from you settingsList
    UiConfigOverlay uiConfigOverlay = settingsList.getSettingsModel(UiConfigOverlay.class);
    // Add Overlay items to the UI
    uiConfigOverlay.setOverlayList(
      new OverlayItem(
        OverlayAsset.NONE_BACKDROP_ID,
        R.string.pesdk_overlay_asset_none,
        ImageSource.create(R.drawable.imgly_icon_option_overlay_none)
      ),
      new OverlayItem(
        "your-uniq-overlay-id-1",
        R.string.pesdk_overlay_asset_golden,
        ImageSource.create(R.drawable.imgly_overlay_golden_thumb)
      ),
      new OverlayItem(
        "your-uniq-overlay-id-2",
        R.string.pesdk_overlay_asset_lightleak1,
        ImageSource.create(R.drawable.imgly_overlay_lightleak1_thumb)
      ),
      new OverlayItem(
        "your-uniq-overlay-id-3",
        R.string.pesdk_overlay_asset_mosaic,
        ImageSource.create(R.drawable.imgly_overlay_mosaic_thumb)
      ),
      new OverlayItem(
        "your-uniq-overlay-id-4",
        R.string.pesdk_overlay_asset_paper,
        ImageSource.create(R.drawable.imgly_overlay_paper_thumb)
      ),
      new OverlayItem(
        "your-uniq-overlay-id-5",
        R.string.pesdk_overlay_asset_rain,
        ImageSource.create(R.drawable.imgly_overlay_rain_thumb)
      ),
      new OverlayItem(
        "your-uniq-overlay-id-6",
        R.string.pesdk_overlay_asset_vintage,
        ImageSource.create(R.drawable.imgly_overlay_vintage_thumb)
      )
    );
}

public static void configFilterUi(SettingsList settingsList) {
    DataSourceIdItemList<FilterItem> filterInUiList = settingsList.getSettingsModel(UiConfigFilter.class).getFilterList();
    filterInUiList.clear();
    filterInUiList.add(new FilterItem("my_own_lut_id", "My Filter"));
    filterInUiList.add(new FilterItem(FilterAsset.NONE_FILTER_ID, R.string.pesdk_filter_asset_none));
    filterInUiList.add(new FilterItem(ColorFilterAssetAD1920.ID, R.string.pesdk_filter_asset_ad1920));
    filterInUiList.add(new FilterItem(ColorFilterAssetAncient.ID, R.string.pesdk_filter_asset_ancient));
    filterInUiList.add(new FilterItem(ColorFilterAssetBleached.ID, R.string.pesdk_filter_asset_bleached));
    filterInUiList.add(new FilterItem(ColorFilterAssetBleachedBlue.ID, R.string.pesdk_filter_asset_bBlue));
    filterInUiList.add(new FilterItem(ColorFilterAssetBlues.ID, R.string.pesdk_filter_asset_blues));
    filterInUiList.add(new FilterItem(ColorFilterAssetBlueShadows.ID, R.string.pesdk_filter_asset_blueShade));
    filterInUiList.add(new FilterItem(ColorFilterAssetBreeze.ID, R.string.pesdk_filter_asset_breeze));
    filterInUiList.add(new FilterItem(ColorFilterAssetBW.ID, R.string.pesdk_filter_asset_bw));
    filterInUiList.add(new FilterItem(ColorFilterAssetCelsius.ID, R.string.pesdk_filter_asset_celsius));
    filterInUiList.add(new FilterItem(ColorFilterAssetChest.ID, R.string.pesdk_filter_asset_chest));
    filterInUiList.add(new FilterItem(ColorFilterAssetClassic.ID, R.string.pesdk_filter_asset_classic));
    filterInUiList.add(new FilterItem(ColorFilterAssetColorful.ID, R.string.pesdk_filter_asset_colorful));
    filterInUiList.add(new FilterItem(ColorFilterAssetCool.ID, R.string.pesdk_filter_asset_cool));
    filterInUiList.add(new FilterItem(ColorFilterAssetCottonCandy.ID, R.string.pesdk_filter_asset_candy));
    filterInUiList.add(new FilterItem(ColorFilterAssetCreamy.ID, R.string.pesdk_filter_asset_creamy));
    filterInUiList.add(new FilterItem(ColorFilterAssetEighties.ID, R.string.pesdk_filter_asset_80s));
    filterInUiList.add(new FilterItem(ColorFilterAssetElder.ID, R.string.pesdk_filter_asset_elder));
    filterInUiList.add(new FilterItem(ColorFilterAssetEvening.ID, R.string.pesdk_filter_asset_evening));
    filterInUiList.add(new FilterItem(ColorFilterAssetFall.ID, R.string.pesdk_filter_asset_fall));
    filterInUiList.add(new FilterItem(ColorFilterAssetFixie.ID, R.string.pesdk_filter_asset_fixie));
    filterInUiList.add(new FilterItem(ColorFilterAssetFood.ID, R.string.pesdk_filter_asset_food));
    filterInUiList.add(new FilterItem(ColorFilterAssetFridge.ID, R.string.pesdk_filter_asset_fridge));
    filterInUiList.add(new FilterItem(ColorFilterAssetFront.ID, R.string.pesdk_filter_asset_front));
    filterInUiList.add(new FilterItem(ColorFilterAssetGlam.ID, R.string.pesdk_filter_asset_glam));
    filterInUiList.add(new FilterItem(ColorFilterAssetGobblin.ID, R.string.pesdk_filter_asset_goblin));
    filterInUiList.add(new FilterItem(ColorFilterAssetHighCarb.ID, R.string.pesdk_filter_asset_carb));
    filterInUiList.add(new FilterItem(ColorFilterAssetHighContrast.ID, R.string.pesdk_filter_asset_hicon));
    filterInUiList.add(new FilterItem(ColorFilterAssetK1.ID, R.string.pesdk_filter_asset_k1));
    filterInUiList.add(new FilterItem(ColorFilterAssetK2.ID, R.string.pesdk_filter_asset_k2));
    filterInUiList.add(new FilterItem(ColorFilterAssetK6.ID, R.string.pesdk_filter_asset_k6));
    filterInUiList.add(new FilterItem(ColorFilterAssetKDynamic.ID, R.string.pesdk_filter_asset_dynamic));
    filterInUiList.add(new FilterItem(ColorFilterAssetKeen.ID, R.string.pesdk_filter_asset_keen));
    filterInUiList.add(new FilterItem(ColorFilterAssetLenin.ID, R.string.pesdk_filter_asset_lenin));
    filterInUiList.add(new FilterItem(ColorFilterAssetLitho.ID, R.string.pesdk_filter_asset_litho));
    filterInUiList.add(new FilterItem(ColorFilterAssetLomo.ID, R.string.pesdk_filter_asset_lomo));
    filterInUiList.add(new FilterItem(ColorFilterAssetLomo100.ID, R.string.pesdk_filter_asset_lomo100));
    filterInUiList.add(new FilterItem(ColorFilterAssetLucid.ID, R.string.pesdk_filter_asset_lucid));
    filterInUiList.add(new FilterItem(ColorFilterAssetMellow.ID, R.string.pesdk_filter_asset_mellow));
    filterInUiList.add(new FilterItem(ColorFilterAssetNeat.ID, R.string.pesdk_filter_asset_neat));
    filterInUiList.add(new FilterItem(ColorFilterAssetNoGreen.ID, R.string.pesdk_filter_asset_noGreen));
    filterInUiList.add(new FilterItem(ColorFilterAssetOrchid.ID, R.string.pesdk_filter_asset_orchid));
    filterInUiList.add(new FilterItem(ColorFilterAssetPale.ID, R.string.pesdk_filter_asset_pale));
    filterInUiList.add(new FilterItem(ColorFilterAssetPitched.ID, R.string.pesdk_filter_asset_pitched));
    filterInUiList.add(new FilterItem(ColorFilterAssetPola669.ID, R.string.pesdk_filter_asset_669));
    filterInUiList.add(new FilterItem(ColorFilterAssetPolaSx.ID, R.string.pesdk_filter_asset_sx));
    filterInUiList.add(new FilterItem(ColorFilterAssetPro400.ID, R.string.pesdk_filter_asset_pro400));
    filterInUiList.add(new FilterItem(ColorFilterAssetQuozi.ID, R.string.pesdk_filter_asset_quozi));
    filterInUiList.add(new FilterItem(ColorFilterAssetSepiahigh.ID, R.string.pesdk_filter_asset_sepiaHigh));
    filterInUiList.add(new FilterItem(ColorFilterAssetSettled.ID, R.string.pesdk_filter_asset_settled));
    filterInUiList.add(new FilterItem(ColorFilterAssetSeventies.ID, R.string.pesdk_filter_asset_70s));
    filterInUiList.add(new FilterItem(ColorFilterAssetSin.ID, R.string.pesdk_filter_asset_sin));
    filterInUiList.add(new FilterItem(ColorFilterAssetSoft.ID, R.string.pesdk_filter_asset_soft));
    filterInUiList.add(new FilterItem(ColorFilterAssetSteel.ID, R.string.pesdk_filter_asset_steel));
    filterInUiList.add(new FilterItem(ColorFilterAssetSummer.ID, R.string.pesdk_filter_asset_summer));
    filterInUiList.add(new FilterItem(ColorFilterAssetSunset.ID, R.string.pesdk_filter_asset_sunset));
    filterInUiList.add(new FilterItem(ColorFilterAssetTender.ID, R.string.pesdk_filter_asset_tender));
    filterInUiList.add(new FilterItem(ColorFilterAssetTexas.ID, R.string.pesdk_filter_asset_texas));
    filterInUiList.add(new FilterItem(ColorFilterAssetTwilight.ID, R.string.pesdk_filter_asset_twilight));
    filterInUiList.add(new FilterItem(ColorFilterAssetWinter.ID, R.string.pesdk_filter_asset_winter));
    filterInUiList.add(new FilterItem(ColorFilterAssetX400.ID, R.string.pesdk_filter_asset_x400));
}

public static void configFontAssets(SettingsList settingsList) {
    final String fontAssetsFolder = "fonts/";

    ConfigMap<FontAsset> fontAssetMap = settingsList.getSettingsModel(AssetConfig.class).getAssetMap(FontAsset.class);
    fontAssetMap.add(new FontAsset("imgly_font_open_sans_bold", fontAssetsFolder + "imgly_font_open_sans_bold.ttf"));
    fontAssetMap.add(new FontAsset("imgly_font_aleo_bold", fontAssetsFolder + "imgly_font_aleo_bold.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_amaticsc", fontAssetsFolder + "imgly_font_amaticsc.ttf"));
    fontAssetMap.add(new FontAsset("imgly_font_bernier_regular", fontAssetsFolder + "imgly_font_bernier_regular.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_blogger_sans_light", fontAssetsFolder + "imgly_font_blogger_sans_light.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_cheque_regular", fontAssetsFolder + "imgly_font_cheque_regular.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_compton_bold", fontAssetsFolder + "imgly_font_compton_bold.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_fira_sans_regular", fontAssetsFolder + "imgly_font_fira_sans_regular.ttf"));
    fontAssetMap.add(new FontAsset("imgly_font_gagalin_regular", fontAssetsFolder + "imgly_font_gagalin_regular.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_hagin_caps_thin", fontAssetsFolder + "imgly_font_hagin_caps_thin.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_intro_inline", fontAssetsFolder + "imgly_font_intro_inline.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_lobster", fontAssetsFolder + "imgly_font_lobster.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_nexa_script", fontAssetsFolder + "imgly_font_nexa_script.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_ostrich_sans_black", fontAssetsFolder + "imgly_font_ostrich_sans_black.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_ostrich_sans_bold", fontAssetsFolder + "imgly_font_ostrich_sans_bold.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_oswald_semi_bold", fontAssetsFolder + "imgly_font_oswald_semi_bold.ttf"));
    fontAssetMap.add(new FontAsset("imgly_font_panton_blackitalic_caps", fontAssetsFolder + "imgly_font_panton_blackitalic_caps.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_panton_lightitalic_caps", fontAssetsFolder + "imgly_font_panton_lightitalic_caps.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_perfograma", fontAssetsFolder + "imgly_font_perfograma.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_poppins", fontAssetsFolder + "imgly_font_poppins.ttf"));
    fontAssetMap.add(new FontAsset("imgly_font_static_bold", fontAssetsFolder + "imgly_font_static_bold.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_summer_light", fontAssetsFolder + "imgly_font_summer_light.otf"));
    fontAssetMap.add(new FontAsset("imgly_font_trash_hand", fontAssetsFolder + "imgly_font_trash_hand.ttf"));
}

public static void configTextUi(SettingsList settingsList) {
    DataSourceIdItemList<FontItem> fontsInUiList = new DataSourceIdItemList<>();
    fontsInUiList.add(new FontItem("imgly_font_open_sans_bold", "Open Sans"));
    fontsInUiList.add(new FontItem("imgly_font_aleo_bold", "Aleo"));
    fontsInUiList.add(new FontItem("imgly_font_amaticsc", "Amaticsc"));
    fontsInUiList.add(new FontItem("imgly_font_bernier_regular", "BERNIER"));
    fontsInUiList.add(new FontItem("imgly_font_blogger_sans_light", "Blogger Sans"));
    fontsInUiList.add(new FontItem("imgly_font_cheque_regular", "Cheque"));
    fontsInUiList.add(new FontItem("imgly_font_compton_bold", "Compton"));
    fontsInUiList.add(new FontItem("imgly_font_fira_sans_regular", "Fira Sans"));
    fontsInUiList.add(new FontItem("imgly_font_gagalin_regular", "Gagalin"));
    fontsInUiList.add(new FontItem("imgly_font_hagin_caps_thin", "Hagin Caps"));
    fontsInUiList.add(new FontItem("imgly_font_intro_inline", "Intro Inline"));
    fontsInUiList.add(new FontItem("imgly_font_lobster", "Lobster"));
    fontsInUiList.add(new FontItem("imgly_font_nexa_script", "Nexa Script"));
    fontsInUiList.add(new FontItem("imgly_font_ostrich_sans_black", "OstrichSans-Black"));
    fontsInUiList.add(new FontItem("imgly_font_ostrich_sans_bold", "OstrichSans-Bold"));
    fontsInUiList.add(new FontItem("imgly_font_oswald_semi_bold", "Oswald-SemiBold"));
    fontsInUiList.add(new FontItem("imgly_font_panton_blackitalic_caps", "Panton-Black Italic Caps"));
    fontsInUiList.add(new FontItem("imgly_font_panton_lightitalic_caps", "Panton-Light Italic Caps"));
    fontsInUiList.add(new FontItem("imgly_font_perfograma", "Perfograma"));
    fontsInUiList.add(new FontItem("imgly_font_poppins", "Poppins"));
    fontsInUiList.add(new FontItem("imgly_font_static_bold", "Static"));
    fontsInUiList.add(new FontItem("imgly_font_summer_light", "Summer"));
    fontsInUiList.add(new FontItem("imgly_font_trash_hand", "Trash"));

    UiConfigText uiConfigText = settingsList.getSettingsModel(UiConfigText.class);
    uiConfigText.setFontList(fontsInUiList);
}

public static void configBrush(SettingsList settingsList) {
    // Obtain the config from you settingsList
    BrushSettings brushSettings = settingsList.getSettingsModel(BrushSettings.class);
    brushSettings.setBrushColor(0xFFFF0000);
    brushSettings.setBrushHardness(1f);
    brushSettings.setBrushSize(0.5f);
}

public static void configDynamicFrame(SettingsList settingsList) {
    // Obtain the asset config from you settingsList
    AssetConfig assetConfig = settingsList.getConfig();

    // Add Assets
    assetConfig.addAsset(
      new FrameAsset("imgly_frame_none", null, 1f),
      new FrameAsset(
        "your_unique_frame_ID_1",
        new CustomPatchFrameAsset(
          FrameLayoutMode.HorizontalInside,
          new FrameImageGroup(ImageSource.create(R.drawable.imgly_frame_dia_top), FrameTileMode.Repeat),
          new FrameImageGroup(
            ImageSource.create(R.drawable.imgly_frame_dia_top_left),
            ImageSource.create(R.drawable.imgly_frame_dia_left), FrameTileMode.Stretch,
            ImageSource.create(R.drawable.imgly_frame_dia_bottom_left)
          ),
          new FrameImageGroup(
            ImageSource.create(R.drawable.imgly_frame_dia_top_right),
            ImageSource.create(R.drawable.imgly_frame_dia_right), FrameTileMode.Stretch,
            ImageSource.create(R.drawable.imgly_frame_dia_bottom_right)
          ),
          new FrameImageGroup(ImageSource.create(R.drawable.imgly_frame_dia_bottom), FrameTileMode.Repeat)
        ),
        0.075f
      ),
      new FrameAsset(
        "your_unique_frame_ID_2",
        new CustomPatchFrameAsset(
          FrameLayoutMode.VerticalInside,
          new FrameImageGroup(ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_top.png")), FrameTileMode.Repeat),
          new FrameImageGroup(
            ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_top_left.png")),
            ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_left.png")), FrameTileMode.Stretch,
            ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_bottom_left.png"))
          ),
          new FrameImageGroup(
            ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_top_right.png")),
            ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_right.png")), FrameTileMode.Stretch,
            ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_bottom_right.png"))
          ),
          new FrameImageGroup(ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_bottom.png")), FrameTileMode.Repeat)
        ),
        0.1f
      )
    );
}

public static void configStaticFrame(SettingsList settingsList) {
    // Obtain the asset config from you settingsList
    AssetConfig assetConfig = settingsList.getConfig();

    // Add Assets
    assetConfig.addAsset(
      new FrameAsset(
        "myUniqFrameId",
        R.drawable.imgly_frame_rainbow,
        new CropAspectAsset("imgly_crop_1_1",1, 1, false),
        1
      )
    //...
    );
}

public static void configAddingFrameToUi(SettingsList settingsList) {
    UiConfigFrame uiConfigFrame = settingsList.getSettingsModel(UiConfigFrame.class);
    uiConfigFrame.setFrameList(
      new FrameItem("imgly_frame_none", R.string.pesdk_frame_button_none, ImageSource.create(R.drawable.imgly_icon_option_frame_none)),
      new FrameItem("myUniqFrameId", R.string.pesdk_frame_asset_dia, ImageSource.create(R.drawable.imgly_frame_dia_thumb))
    );
}

}
```

After that you have to change the type of the View in the imgly_widget_actionbar.xml from AcceptButton to CustomAcceptButton and you have to add the new Button in the imgly_activity_photo_editor.xm.

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    style="?attr/Imgly.PESDK.Widget.ActionBar">
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="48dp">
        <ly.img.android.pesdk.ui.widgets.buttons.CancelButton
            android:id="@+id/cancelButton"
            style="?attr/Imgly.PESDK.Widget.ActionBar.Button.CancelButton" />
        <Space
            android:layout_width="0dp"
            android:layout_height="match_parent"
            android:layout_weight="1"/>
        <ly.img.android.pesdk.ui.widgets.buttons.CustomAcceptButton
            android:id="@+id/acceptButton"
            style="?attr/Imgly.PESDK.Widget.ActionBar.Button.AcceptButton" />
    </LinearLayout>
    <RelativeLayout
        android:id="@+id/actionBarTitleBox"
        style="?attr/Imgly.PESDK.Widget.ActionBar.TitleAnimationContainer">
    </RelativeLayout>
</RelativeLayout>
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<ly.img.android.pesdk.ui.widgets.EditorRootView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/rootView"
    style="?attr/Imgly.PESDK.Editor.Activity">
    <ly.img.android.pesdk.backend.views.EditorPreview
        android:id="@+id/editorImageView"
        style="?attr/Imgly.PESDK.Editor.Activity.Preview"/>
    <ly.img.android.pesdk.ui.widgets.ProgressView
        style="?attr/Imgly.PESDK.Editor.Activity.Progress"/>
    <ly.img.android.pesdk.ui.widgets.ToolContainer
        android:id="@+id/toolPanelContainer"
        style="?attr/Imgly.PESDK.Editor.Activity.ToolPanelContainer"/>
    <ly.img.android.pesdk.ui.widgets.ImgLyTitleBar
        android:id="@+id/imglyActionBar"
        style="?attr/Imgly.PESDK.Editor.Activity.ActionBar"/>
    <ly.img.android.pesdk.ui.widgets.buttons.LoveItButton
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerHorizontal="true"
        android:layout_centerVertical="true"/>
</ly.img.android.pesdk.ui.widgets.EditorRootView>
```


### Declaring layout guides

For more information look at the [Google Developer Guides]( http://developer.android.com/guide/topics/ui/declaring-layout.html).

### See an example

You can find a finished example with a customized design in our {% include guides/android/demo-repository.md %}. Just take a look at the `CustomizeLayoutExample` folder.
