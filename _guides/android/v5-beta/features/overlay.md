---
layout: guides/content
title: &title Overlays # title as shown in the menu and 

menuitem: *title
order: 7
platform: android
version: v5-beta
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---


We added overlays to our PhotoEditor SDK in version 4. Overlays are an easy, yet powerful way to create stunning effects.
To put it simple, overlays are images put on top of the input image.
We provide several blend modes, that determine how exactly the overlay is applied.
Each mode has its own characteristics and will add a unique flavour to the final composition.

## Adding and removing overlays

To add your own overlays create instances of the [`OverlayConfig`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/sdk/models/config/OverlayConfig.html) class for all your overlays and add these instances to your [`PESDKConfig`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/sdk/models/state/PESDKConfig.html#setOverlays-java.util.ArrayList-)

Do not forget to add `OverlayConfig.NON_BACKDROP` otherwise the user can't remove the Overlay.

Here is an example of how to add overlays:

```java
settingsList.getConfig().setOverlays(
  OverlayConfig.NON_BACKDROP,
  new OverlayConfig(
    "your-uniq-overlay-id-1",
    ly.img.android.R.string.imgly_overlay_name_golden,
    ly.img.android.R.drawable.imgly_overlay_golden_thumb,
    ly.img.android.R.drawable.imgly_overlay_golden,
    BlendMode.LIGHTEN,
    1f
  ),
  new OverlayConfig(
    "your-uniq-overlay-id-2",
    ly.img.android.R.string.imgly_overlay_name_lightleak1,
    ly.img.android.R.drawable.imgly_overlay_lightleak1_thumb,
    ly.img.android.R.drawable.imgly_overlay_lightleak1,
    BlendMode.SCREEN,
    1f
  ),
  new OverlayConfig(
    "your-uniq-overlay-id-3",
    ly.img.android.R.string.imgly_overlay_name_mosaic,
    ly.img.android.R.drawable.imgly_overlay_mosaic_thumb,
    ly.img.android.R.drawable.imgly_overlay_mosaic,
    BlendMode.MULTIPLY,
    1f
  ),
  new OverlayConfig(
    "your-uniq-overlay-id-4",
    ly.img.android.R.string.imgly_overlay_name_paper,
    ly.img.android.R.drawable.imgly_overlay_paper_thumb,
    ly.img.android.R.drawable.imgly_overlay_paper,
    BlendMode.MULTIPLY,
    1f
  ),
  new OverlayConfig(
    "your-uniq-overlay-id-5",
    ly.img.android.R.string.imgly_overlay_name_rain,
    ly.img.android.R.drawable.imgly_overlay_rain_thumb,
    ly.img.android.R.drawable.imgly_overlay_rain,
    BlendMode.OVERLAY,
    1f
  ),
  new OverlayConfig(
    "your-uniq-overlay-id-6",
    ly.img.android.R.string.imgly_overlay_name_vintage,
    ly.img.android.R.drawable.imgly_overlay_vintage_thumb,
    ly.img.android.R.drawable.imgly_overlay_vintage,
    BlendMode.DARKEN,
    1f
  )
);
```
Please note that you have to set the default [`BlendMode`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/sdk/models/constant/BlendMode.html) and intensity.
We could show you the math for each of these modes, but that won't help to get a feel for the resulting visual effect. Therefore we encourage you to add your overlay 
with any initial mode, and use the UI to play with the blend mode and intensities. 
