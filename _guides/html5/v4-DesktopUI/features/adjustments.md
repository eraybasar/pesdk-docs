---
layout: guides/content
title: &title Adjustments # title as shown in the menu and
description: The Adjustment tool set of the PhotoEditor SDK for HTML5 offers essential and advanced editing functions like Brightness, Contrast, Saturation or Exposure.
menuitem: Adjustments
order: 2
platform: html5
version: v4-DesktopUI
category:
  - guide
  - feature
tags:
  - photo editor
published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}


Our Adjustment tool is our swiss army knife for image optimization. It offers essential functions like brightness and contrast, while allowing more expert users to fine tune highlights, shadows and clarity.

The available tool set consists of:

1. Brightness
2. Contrast
3. Saturation
4. Clarity
5. Shadows
6. Highlights
7. Exposure
8. Gamma

## Enabling / disabling certain adjustment options

You can enable / disable specific adjustments by passing them to the `editor.tools` option. See the [Configuration]({{ site.baseurl }}/guides/{{ page.platform }}/{{ page.version }}/introduction/configuration) on how to do this.
