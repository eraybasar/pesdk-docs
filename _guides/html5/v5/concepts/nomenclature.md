---
layout: guides/content
title: &title Nomenclature # title as shown in the menu and

menuitem: *title
order: 0
platform: html5
version: v5
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

As a part of the rewrite for PhotoEditor SDK version 5, one of the first things we did was to establish a consistant naming convention across design and development.
These names work as a base for all our configurations and customizations.

We drew inspirations from the surrounding tools we love. Like [Visual Studio Code](https://code.visualstudio.com/) we established namings for different entities and sections of the editor.

![Entities]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/convention/advancedui-entities.png){: .center-image style="margin: 20px;" }


![Entities]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/convention/basicui-entities.png){: .center-image style="margin: 20px;" }

* `Toolbar`: This is the main navigation element of the UI and allows you to select the different tools of the SDK.
* `Tool control bar`: The control bar contains all related controls for editing the selected tool.
* `Canvas`: The canvas displays the edited image.
* `Main canvas action bar`: Main canvas actions listed on top.

![Sections]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/convention/advancedui-sections.png){: .center-image style="margin: 20px;" }
![Sections]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/convention/basicui-sections.png){: .center-image style="margin: 20px;" }
