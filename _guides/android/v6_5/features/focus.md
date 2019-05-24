---
layout: guides/content
title: &title Focus # title as shown in the menu and 
description: The focus tool of the PhotoEditor SDK for Android lets your users add a radial or linear blur to their images. Learn how to configure the tool.
menuitem: *title
order: 2
platform: android
version: v6_5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_{{page.title | downcase}}.jpg){: height="400px" .center-image}


The focus tool allows your users to add a radial or linear blur to their images which let them mimic _Tilt Shift_ or _Bokeh_ effects.

The backend settings are implemented in the [`FocusSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/FocusSettings.html) class and displayed using the [`FocusToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/FocusToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/styling) section.
