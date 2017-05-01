---
layout: guides/content
title: &title Transform # title as shown in the menu and 

menuitem: *title
order: 3
platform: html5
version: v3_6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

# {{ page.title }}

Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

<!--The tool is implemented in the `TransformToolController` class and can be customized using the [`TransformToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TransformToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. By modifying these options, you may customize the available transform actions and crop aspect ratios by adding or removing `CropAspect` and `TransformAction` objects from or to the corresponding arrays. All sliders and buttons can be customized as well. In order to disable free cropping and force the use of one of the available aspect ratios, set the `allowFreeCrop` property to `true`.-->