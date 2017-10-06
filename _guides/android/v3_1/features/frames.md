---
layout: guides/content
title: &title Frames # title as shown in the menu and 
description: The PhotoEditor SDK for Android provides a quick and easy way for adding frames to any creative. Learn how to add custom frame assets to the library.
menuitem: *title
order: 7
platform: android
version: v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The PhotoEditor SDK includes a versatile frame tool that works with any given photo size or ratio and provides two distinct options to apply frames. For the flexible frames tool that works perfectly for creatives with repeatable or stretchable areas, we abandoned the 9-patch standard and replaced it with a novel and even more flexible 12-patch layout. The static frames tool can be used for complex and irregular creatives.

The tool is implemented in the [`FrameEditorTool`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/tools/FrameEditorTool.html) class and displayed using the [`FrameToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/FrameToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Adding and removing frames

Similar to [stickers]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/stickers), you can modify the available frames using the [`FrameConfig`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/models/config/FrameConfig.html) class. For more details, take a look at the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section.
