---
layout: guides/ios/v6_5/content
title: &title Adjustments # title as shown in the menu and 

menuitem: *title
order: 2
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 


published: true # Either published or not 
---

![{{page.title}} tool](/assets/images/ios/features/{{page.title | downcase}}_framed.png){: height="400px" .center-image}

# Adjustments 

Our Adjustment tool is our swiss army knife for image optimization. It offers essential functions like brightness and contrast, while allowing more expert users to fine tune highlights, shadows and clarity.

The tool is implemented in the `AdjustToolController` class. For your app, you can choose which functionality you'd like to make available by modifiying the [`AdjustToolControllerOptions`](https://static.photoeditorsdk.com/docs/ios/Classes/AdjustToolControllerOptions.html) as described in the [configuration](/guides/ios/v6_5/features/configuration) section. Using these options you can configure the slider and buttons and react to changes to the slider.

The default tool set consists of:

1. Brightness
2. Contrast
3. Saturation
4. Clarity
5. Shadows
6. Highlights
7. Exposure

In order to change the available tools or their order, you need to set an array of [`AdjustTool`](https://static.photoeditorsdk.com/docs/ios/Enums/AdjustTool.html) values to the `allowedAdjustTools` property.
