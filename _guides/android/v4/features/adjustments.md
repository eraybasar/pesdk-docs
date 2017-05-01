---
layout: guides/content
title: &title Adjustments # title as shown in the menu and 

menuitem: *title
order: 3
platform: android
version: v4
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Adjustments 

Our Adjustment tool is our swiss army knife for image optimization. It offers essential functions like brightness and contrast, while allowing more expert users to fine tune highlights, shadows and clarity.

The tool is implemented in the [`ColorAdjustmentTool`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/sdk/tools/ColorAdjustmentTool.html) class and displayed using the [`AdjustmentToolPanel`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/ui/panels/AdjustmentToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

The available tool set consists of:

1. Brightness
2. Contrast
3. Saturation
4. Clarity
5. Shadows
6. Highlights
7. Exposure
