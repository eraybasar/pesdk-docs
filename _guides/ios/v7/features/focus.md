---
layout: guides/content
title: &title Focus # title as shown in the menu and 

menuitem: *title
order: 0
platform: ios
version: v7
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Focus

The focus tool allows your users to add a radial or linear blur to their images which lets them mimic _Tilt Shift_ or _Bokeh_ effects.

The tool is implemented in the `FocusToolController` class and can be configured by modifying the [`FocusToolControllerOptions`](https://static.photoeditorsdk.com/docs/ios/Classes/FocusToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/ios/v3_1/concepts/configuration) section.
