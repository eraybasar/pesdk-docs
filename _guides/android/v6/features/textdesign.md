---
layout: guides/content
title: &title TextDesign # title as shown in the menu and
description: The TextDesign tool of the PhotoEditor SDK for Android offers a automated text layouting engine.
menuitem: *title
order: 3
platform: android
version: v6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_text_design.jpg){: height="400px" .center-image}

A picture says more than a thousand words, however sometimes it still takes a few more.
The robust text-design feature of the PhotoEditor SDK provides a simple and automated creative text layouting engine to any picture.

The backend settings are implemented in the [`TextDesignLayerSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/backend/model/state/layer/TextDesignLayerSettings.html) class and displayed using the [`TextDesignToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/ui/panels/TextDesignToolPanel.html).
If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## TextDesign configuration

```java
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
```