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


The focus tool allows your users to add a radial or linear blur to their images that lets them mimic _Tilt Shift_ or _Bokeh_ effects.

The tool is implemented in the `FocusToolController` class and can be configured by modifying the [`FocusToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/FocusToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section.
It allows to change the size of the clear area and the width of the area where the transition from clear to full blur happens.
