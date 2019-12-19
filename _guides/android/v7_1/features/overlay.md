---
layout: guides/content
title: &title Overlays # title as shown in the menu and 

menuitem: *title
order: 6
platform: android
version: v7_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_{{page.title | downcase}}.jpg){: height="400px" .center-image}

We added overlays to our PhotoEditor SDK in version 4. Overlays are a simple, yet powerful way to create stunning effects.
To put it easy, overlays are images put on top of the input image.
We provide several blend modes, that determine how exactly the overlay is applied.
Each mode has its own characteristics and will add a unique flavor to the final composition.

## Adding and removing overlays

Here is an example of how to add overlays:

{% capture first_snippet_ExampleConfigUtility_configOverlay %}
Java
---
``````java
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
    ImageSource.create(R.drawable.imgly_filter_preview_photo)

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
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configOverlay %}
Kotlin
---
``````kotlin
// Add Assets
settingsList.config.apply {
    addAsset(
      OverlayAsset.NONE_BACKDROP,
      OverlayAsset(
        "your-uniq-overlay-id-1",
        ImageSource.create(R.drawable.imgly_overlay_golden),
        BlendMode.LIGHTEN,
        1f
      ),
      OverlayAsset(
        "your-uniq-overlay-id-2",
        ImageSource.create(R.drawable.imgly_overlay_lightleak1),
        BlendMode.SCREEN,
        1f
      ),
      OverlayAsset(
        "your-uniq-overlay-id-3",
        ImageSource.create(R.drawable.imgly_overlay_mosaic),
        BlendMode.MULTIPLY,
        1f
      ),
      OverlayAsset(
        "your-uniq-overlay-id-4",
        ImageSource.create(R.drawable.imgly_overlay_paper),
        BlendMode.MULTIPLY,
        1f
      ),
      OverlayAsset(
        "your-uniq-overlay-id-5",
        ImageSource.create(R.drawable.imgly_overlay_rain),
        BlendMode.OVERLAY,
        1f
      ),
      OverlayAsset(
        "your-uniq-overlay-id-6",
        ImageSource.create(R.drawable.imgly_overlay_vintage),
        BlendMode.DARKEN,
        1f
      )
    )
}

// Add Overlay items to the UI
settingsList.getSettingsModel(UiConfigOverlay::class.java).apply {
    setOverlayList(
      OverlayItem(
        OverlayAsset.NONE_BACKDROP_ID,
        R.string.pesdk_overlay_asset_none,
        ImageSource.create(R.drawable.imgly_icon_option_overlay_none)
      ),
      OverlayItem(
        "your-uniq-overlay-id-1",
        R.string.pesdk_overlay_asset_golden,
        ImageSource.create(R.drawable.imgly_overlay_golden_thumb)
      ),
      OverlayItem(
        "your-uniq-overlay-id-2",
        R.string.pesdk_overlay_asset_lightleak1,
        ImageSource.create(R.drawable.imgly_overlay_lightleak1_thumb)
      ),
      OverlayItem(
        "your-uniq-overlay-id-3",
        R.string.pesdk_overlay_asset_mosaic,
        ImageSource.create(R.drawable.imgly_overlay_mosaic_thumb)
      ),
      OverlayItem(
        "your-uniq-overlay-id-4",
        R.string.pesdk_overlay_asset_paper,
        ImageSource.create(R.drawable.imgly_overlay_paper_thumb)
      ),
      OverlayItem(
        "your-uniq-overlay-id-5",
        R.string.pesdk_overlay_asset_rain,
        ImageSource.create(R.drawable.imgly_overlay_rain_thumb)
      ),
      OverlayItem(
        "your-uniq-overlay-id-6",
        R.string.pesdk_overlay_asset_vintage,
        ImageSource.create(R.drawable.imgly_overlay_vintage_thumb)
      )
    )
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configOverlay | push: second_snippet_ExampleConfigUtility_configOverlay %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configOverlay{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Please note that you have to set the default [`BlendModeAsset`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/config/BlendModeAsset.html) and intensity.
We could show you the math for each of these modes, but that won't help to get a feel for the resulting visual effect. Therefore we encourage you to add your overlay 
with every initial mode and use the UI to play with the blend mode and intensities. 
