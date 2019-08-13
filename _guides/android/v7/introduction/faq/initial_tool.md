---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: android
version: v7
tags: &tags # tags that are necessary
  - photo editor
published: true
faq_v7: true
faq-category: general
order: 3
title: Set a feature as initial loading tool
---


Sometimes a custom workflow of the image editing process is required. For example, it is possible to load into the 'Text' or any other feature initially instead of following the predefined behavior and load into the main menu.

To set a specific feature as an initial loading tool you can use the `setInitialTool()` method of the `UiConfigMainMenu` that can look like this:
```settingsList.getSettingsModel(UiConfigMainMenu.class).setInitialTool(TextToolPanel.TOOL_ID);```

For more information on customizing the SDK's main menu or initial loading tools, please have a look at our [API Docs](https://docs.photoeditorsdk.com/apidocs/android/{{page.version}}/index.html?ly/img/android/pesdk/ui/model/state/UiConfigMainMenu.html).