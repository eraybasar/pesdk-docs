---
layout: guides/content
title: &title Text Design # title as shown in the menu and
description: The TextDesign tool of the PhotoEditor SDK for Android offers a automated text layouting engine.
menuitem: *title
order: 9
platform: android
version: v7_1
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

The backend settings are implemented in the [`TextDesignLayerSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/layer/TextDesignLayerSettings.html) class and displayed using the [`TextDesignToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/TextDesignToolPanel.html).
If you want to customize the appearance of this tool, take a look at the [customization]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/introduction) section.

## TextDesign configuration

{% capture first_snippet_ExampleConfigUtility_configTextDesigns %}
Java
---
``````java
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
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configTextDesigns %}
Kotlin
---
``````kotlin
settingsList.getSettingsModel(UiConfigTextDesign::class.java).apply {
    setTextDesignList(
      TextDesignItem(TextDesignBlocks.ID, R.string.pesdk_textDesign_asset_blocks, ImageSource.create(R.drawable.imgly_icon_text_design_blocks)),
      TextDesignItem(TextDesignRotated.ID, R.string.pesdk_textDesign_asset_rotated, ImageSource.create(R.drawable.imgly_icon_text_design_rotated)),
      TextDesignItem(TextDesignBlocksLight.ID, R.string.pesdk_textDesign_asset_blocksLight, ImageSource.create(R.drawable.imgly_icon_text_design_blocks_light)),
      TextDesignItem(TextDesignEqualWidth.ID, R.string.pesdk_textDesign_asset_equalWidth, ImageSource.create(R.drawable.imgly_icon_text_design_equal_width)),
      TextDesignItem(TextDesignMasked.ID, R.string.pesdk_textDesign_asset_masked, ImageSource.create(R.drawable.imgly_icon_text_design_masked)),
      TextDesignItem(TextDesignCelebrate.ID, R.string.pesdk_textDesign_asset_celebrate, ImageSource.create(R.drawable.imgly_icon_text_design_celebrate)),
      TextDesignItem(TextDesignSunshine.ID, R.string.pesdk_textDesign_asset_sunshine, ImageSource.create(R.drawable.imgly_icon_text_design_sunshine)),
      TextDesignItem(TextDesignMaskedBadge.ID, R.string.pesdk_textDesign_asset_maskedBadge, ImageSource.create(R.drawable.imgly_icon_text_design_masked_badge)),
      TextDesignItem(TextDesignBlocksCondensed.ID, R.string.pesdk_textDesign_asset_blocksCondensed, ImageSource.create(R.drawable.imgly_icon_text_design_blocks_condensed)),
      TextDesignItem(TextDesignCelebrateSimple.ID, R.string.pesdk_textDesign_asset_celebrateSimple, ImageSource.create(R.drawable.imgly_icon_text_design_celebrate_simple)),
      TextDesignItem(TextDesignEqualWidthFat.ID, R.string.pesdk_textDesign_asset_equalWidthFat, ImageSource.create(R.drawable.imgly_icon_text_design_equal_width_fat)),
      TextDesignItem(TextDesignWatercolor.ID, R.string.pesdk_textDesign_asset_watercolor, ImageSource.create(R.drawable.imgly_icon_text_design_watercolor)),
      TextDesignItem(TextDesignParticles.ID, R.string.pesdk_textDesign_asset_particles, ImageSource.create(R.drawable.imgly_icon_text_design_particles)),
      TextDesignItem(TextDesignMaskedSpeechBubble.ID, R.string.pesdk_textDesign_asset_maskedSpeechBubble, ImageSource.create(R.drawable.imgly_icon_text_design_masked_speech_bubble)),
      TextDesignItem(TextDesignMaskedSpeechBubbleComic.ID, R.string.pesdk_textDesign_asset_maskedSpeechBubbleComic, ImageSource.create(R.drawable.imgly_icon_text_design_masked_speech_bubble_comic)),
      TextDesignItem(TextDesignMultiline.ID, R.string.pesdk_textDesign_asset_multiline, ImageSource.create(R.drawable.imgly_icon_text_design_multiline))
    )
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configTextDesigns | push: second_snippet_ExampleConfigUtility_configTextDesigns %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configTextDesigns{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Initial Text Design 

To determine a specific Text Design Item as the initial Text Design on opening the feature add the following code example:

```java
// Create TextDesignLayerSettings with some of the available Layouts ("TextDesign*()")
TextDesignLayerSettings textDesignLayer = new TextDesignLayerSettings(new TextDesignBlocks());
// Set a Text
textDesignLayer.setText("Tap here to edit your text");
// Set a fixed seed, to have always the same TextDesign Layout, otherwise, the seed is taken randomly, so the layout will switch randomly.
textDesignLayer.setSeed(12345L);
// Add the Layer to your settingsList
settingsList.getSettingsModel(LayerListSettings.class).addLayer(textDesignLayer);
```