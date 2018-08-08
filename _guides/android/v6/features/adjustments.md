---
layout: guides/content
title: &title Adjustments # title as shown in the menu and 
description: The Adjustment tool set of the PhotoEditor SDK for Android offers essential and advanced editing functions like Brightness, Contrast, Saturation or Exposure
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

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_{{page.title | downcase}}.jpg){: height="400px" .center-image}


Our Adjustment tool is our swiss army knife for image optimization. It offers essential functions like brightness and contrast while allowing more expert users to fine-tune highlights, shadows and clarity.

The backend settings are implemented in the [`ColorAdjustmentSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/ColorAdjustmentSettings.html) class and displayed using the [`AdjustmentToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/AdjustmentToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/styling) section.

The available toolset consists of:

1. Brightness
2. Contrast
3. Saturation
4. Clarity
5. Shadows
6. Highlights
7. Exposure
8. Gamma

## Toolset configuration
{% capture first_snippet_ExampleConfigUtility_configAdjustment %}
Java
---
``````java
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
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configAdjustment %}
Kotlin
---
``````kotlin
settingsList.getSettingsModel(UiConfigAdjustment::class.java).apply {
    setOptionList(
      AdjustOption(AdjustmentToolPanel.OPTION_BRIGHTNESS, R.string.pesdk_adjustments_button_brightnessTool, ImageSource.create(R.drawable.imgly_icon_option_brightness)),
      AdjustOption(AdjustmentToolPanel.OPTION_CONTRAST, R.string.pesdk_adjustments_button_contrastTool, ImageSource.create(R.drawable.imgly_icon_option_contrast)),
      AdjustOption(AdjustmentToolPanel.OPTION_SATURATION, R.string.pesdk_adjustments_button_saturationTool, ImageSource.create(R.drawable.imgly_icon_option_saturation)),
      AdjustOption(AdjustmentToolPanel.OPTION_CLARITY, R.string.pesdk_adjustments_button_clarityTool, ImageSource.create(R.drawable.imgly_icon_option_clarity)),
      AdjustOption(AdjustmentToolPanel.OPTION_SHADOW, R.string.pesdk_adjustments_button_shadowTool, ImageSource.create(R.drawable.imgly_icon_option_shadow)),
      AdjustOption(AdjustmentToolPanel.OPTION_HIGHLIGHT, R.string.pesdk_adjustments_button_highlightTool, ImageSource.create(R.drawable.imgly_icon_option_highlight)),
      AdjustOption(AdjustmentToolPanel.OPTION_EXPOSURE, R.string.pesdk_adjustments_button_exposureTool, ImageSource.create(R.drawable.imgly_icon_option_exposure)),
      AdjustOption(AdjustmentToolPanel.OPTION_GAMMA, R.string.pesdk_adjustments_button_gammaTool, ImageSource.create(R.drawable.imgly_icon_option_gamma))
    )
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configAdjustment | push: second_snippet_ExampleConfigUtility_configAdjustment %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configAdjustment{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}