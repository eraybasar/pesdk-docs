---
layout: guides/content
title: &title Text # title as shown in the menu and 
description: The PhotoEditor SDK for Android ships with a robust tool that provides all necessary functions for quickly adding text. Learn how to add custom fonts.
menuitem: *title
order: 6
platform: android
version: v6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.

The backend settings for the Layer are implemented in the [`TextLayerSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/backend/model/state/layer/TextLayerSettings.html) class and displayed using the [`TextToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/ui/panels/TextToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Adding and removing fonts

The SDK comes with a predefined set of fonts, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the {% include guides/android/demo-repository.md %}.

![Editor Fonts]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_editor_fonts.jpg){: height="400px" .center-image}

To add new fonts add they to the Assets

```java
	AssetConfig assetConfig = settingsList.getConfig();
	assetConfig.addAsset(new FontConfig("myUniqFontAssetId", "fonts/my_font.ttf"));
```

In order to change the available fonts or rearrange them, start with a default [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/backend/model/state/manager/SettingsList.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section and use <API_REF name="`getSettingsModel($1.class)`" class="ly.img.android.pesdk.ui.model.state.UiConfigText"> and the <API_REF class="ly.img.android.pesdk.ui.model.state.UiConfigText" method="setFontList(ly.img.android.pesdk.backend.model.config.FontAsset...)"> `` method to add your filter selection as a list of [`FontAsset`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/backend/model/config/FontAsset.html) objects:

```java
UiConfigText uiConfigText = settingsList.getSettingsModel(UiConfigText.class);
uiConfigText.setFontList(
	new FontItem("myUniqFontAssetId", "R.string.pesdk_filter_asset_none")
);
```

