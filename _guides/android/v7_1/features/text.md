---
layout: guides/content
title: &title Text # title as shown in the menu and 
description: The PhotoEditor SDK for Android ships with a robust tool that provides all necessary functions for quickly adding text. Learn how to add custom fonts.
menuitem: *title
order: 8
platform: android
version: v7_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_{{page.title | downcase}}.jpg){: height="400px" .center-image}

A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.

The backend settings for the Layer are implemented in the [`TextLayerSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/layer/TextLayerSettings.html) class and displayed using the [`TextToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/TextToolPanel.html). If you want to customize the appearance of this tool, take a look at the [customization]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/introduction) section.

## Adding and removing fonts

The SDK comes with a predefined set of fonts, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the {% include guides/android/demo-repository.md %}.

![Editor Fonts]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_text_fonts.jpg){: height="400px" .center-image}

To add new fonts add them to the Assets first. A good place to do that is the `MainActivity` when creating the `SettingsList`.

{% capture first_snippet_ExampleConfigUtility_configFontAssets %}
Java
---
``````java
final String fontAssetsFolder = "fonts/";

ConfigMap<FontAsset> fontAssetMap = settingsList.getSettingsModel(AssetConfig.class).getAssetMap(FontAsset.class);
fontAssetMap.add(new FontAsset("imgly_font_open_sans_bold", fontAssetsFolder + "imgly_font_open_sans_bold.ttf"));
fontAssetMap.add(new FontAsset("imgly_font_aleo_bold", fontAssetsFolder + "imgly_font_aleo_bold.otf"));
fontAssetMap.add(new FontAsset("imgly_font_amaticsc", fontAssetsFolder + "imgly_font_amaticsc.ttf"));
fontAssetMap.add(new FontAsset("imgly_font_bernier_regular", fontAssetsFolder + "imgly_font_bernier_regular.otf"));
fontAssetMap.add(new FontAsset("imgly_font_blogger_sans_light", fontAssetsFolder + "imgly_font_blogger_sans_light.otf"));
fontAssetMap.add(new FontAsset("imgly_font_cheque_regular", fontAssetsFolder + "imgly_font_cheque_regular.otf"));
fontAssetMap.add(new FontAsset("imgly_font_compton_bold", fontAssetsFolder + "imgly_font_compton_bold.otf"));
fontAssetMap.add(new FontAsset("imgly_font_fira_sans_regular", fontAssetsFolder + "imgly_font_fira_sans_regular.ttf"));
fontAssetMap.add(new FontAsset("imgly_font_gagalin_regular", fontAssetsFolder + "imgly_font_gagalin_regular.otf"));
fontAssetMap.add(new FontAsset("imgly_font_hagin_caps_thin", fontAssetsFolder + "imgly_font_hagin_caps_thin.otf"));
fontAssetMap.add(new FontAsset("imgly_font_intro_inline", fontAssetsFolder + "imgly_font_intro_inline.otf"));
fontAssetMap.add(new FontAsset("imgly_font_lobster", fontAssetsFolder + "imgly_font_lobster.otf"));
fontAssetMap.add(new FontAsset("imgly_font_nexa_script", fontAssetsFolder + "imgly_font_nexa_script.otf"));
fontAssetMap.add(new FontAsset("imgly_font_ostrich_sans_black", fontAssetsFolder + "imgly_font_ostrich_sans_black.otf"));
fontAssetMap.add(new FontAsset("imgly_font_ostrich_sans_bold", fontAssetsFolder + "imgly_font_ostrich_sans_bold.otf"));
fontAssetMap.add(new FontAsset("imgly_font_oswald_semi_bold", fontAssetsFolder + "imgly_font_oswald_semi_bold.ttf"));
fontAssetMap.add(new FontAsset("imgly_font_panton_blackitalic_caps", fontAssetsFolder + "imgly_font_panton_blackitalic_caps.otf"));
fontAssetMap.add(new FontAsset("imgly_font_panton_lightitalic_caps", fontAssetsFolder + "imgly_font_panton_lightitalic_caps.otf"));
fontAssetMap.add(new FontAsset("imgly_font_perfograma", fontAssetsFolder + "imgly_font_perfograma.otf"));
fontAssetMap.add(new FontAsset("imgly_font_poppins", fontAssetsFolder + "imgly_font_poppins.ttf"));
fontAssetMap.add(new FontAsset("imgly_font_static_bold", fontAssetsFolder + "imgly_font_static_bold.otf"));
fontAssetMap.add(new FontAsset("imgly_font_summer_light", fontAssetsFolder + "imgly_font_summer_light.otf"));
fontAssetMap.add(new FontAsset("imgly_font_trash_hand", fontAssetsFolder + "imgly_font_trash_hand.ttf"));
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configFontAssets %}
Kotlin
---
``````kotlin
val fontAssetsFolder = "fonts/"

settingsList.getSettingsModel(AssetConfig::class.java)!!.getAssetMap(FontAsset::class.java).apply {
    add(FontAsset("imgly_font_open_sans_bold", fontAssetsFolder + "imgly_font_open_sans_bold.ttf"))
    add(FontAsset("imgly_font_aleo_bold", fontAssetsFolder + "imgly_font_aleo_bold.otf"))
    add(FontAsset("imgly_font_amaticsc", fontAssetsFolder + "imgly_font_amaticsc.ttf"))
    add(FontAsset("imgly_font_bernier_regular", fontAssetsFolder + "imgly_font_bernier_regular.otf"))
    add(FontAsset("imgly_font_blogger_sans_light", fontAssetsFolder + "imgly_font_blogger_sans_light.otf"))
    add(FontAsset("imgly_font_cheque_regular", fontAssetsFolder + "imgly_font_cheque_regular.otf"))
    add(FontAsset("imgly_font_compton_bold", fontAssetsFolder + "imgly_font_compton_bold.otf"))
    add(FontAsset("imgly_font_fira_sans_regular", fontAssetsFolder + "imgly_font_fira_sans_regular.ttf"))
    add(FontAsset("imgly_font_gagalin_regular", fontAssetsFolder + "imgly_font_gagalin_regular.otf"))
    add(FontAsset("imgly_font_hagin_caps_thin", fontAssetsFolder + "imgly_font_hagin_caps_thin.otf"))
    add(FontAsset("imgly_font_intro_inline", fontAssetsFolder + "imgly_font_intro_inline.otf"))
    add(FontAsset("imgly_font_lobster", fontAssetsFolder + "imgly_font_lobster.otf"))
    add(FontAsset("imgly_font_nexa_script", fontAssetsFolder + "imgly_font_nexa_script.otf"))
    add(FontAsset("imgly_font_ostrich_sans_black", fontAssetsFolder + "imgly_font_ostrich_sans_black.otf"))
    add(FontAsset("imgly_font_ostrich_sans_bold", fontAssetsFolder + "imgly_font_ostrich_sans_bold.otf"))
    add(FontAsset("imgly_font_oswald_semi_bold", fontAssetsFolder + "imgly_font_oswald_semi_bold.ttf"))
    add(FontAsset("imgly_font_panton_blackitalic_caps", fontAssetsFolder + "imgly_font_panton_blackitalic_caps.otf"))
    add(FontAsset("imgly_font_panton_lightitalic_caps", fontAssetsFolder + "imgly_font_panton_lightitalic_caps.otf"))
    add(FontAsset("imgly_font_perfograma", fontAssetsFolder + "imgly_font_perfograma.otf"))
    add(FontAsset("imgly_font_poppins", fontAssetsFolder + "imgly_font_poppins.ttf"))
    add(FontAsset("imgly_font_static_bold", fontAssetsFolder + "imgly_font_static_bold.otf"))
    add(FontAsset("imgly_font_summer_light", fontAssetsFolder + "imgly_font_summer_light.otf"))
    add(FontAsset("imgly_font_trash_hand", fontAssetsFolder + "imgly_font_trash_hand.ttf"))
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configFontAssets | push: second_snippet_ExampleConfigUtility_configFontAssets %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configFontAssets{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

In order to change the available fonts or rearrange them, start with a default [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/SettingsList.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section and use [`getSettingsModel(UiConfigText.class)`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/model/state/UiConfigText.html) and the [`setFontList(ly.img.android.pesdk.ui.panels.item.FontItem...)`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/model/state/UiConfigText.html) method to add your font selection as a list of [`FontItem`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/item/FontItem.html) objects:

{% capture first_snippet_ExampleConfigUtility_configTextUi %}
Java
---
``````java
DataSourceIdItemList<FontItem> fontsInUiList = new DataSourceIdItemList<>();
fontsInUiList.add(new FontItem("imgly_font_open_sans_bold", "Open Sans"));
fontsInUiList.add(new FontItem("imgly_font_aleo_bold", "Aleo"));
fontsInUiList.add(new FontItem("imgly_font_amaticsc", "Amaticsc"));
fontsInUiList.add(new FontItem("imgly_font_bernier_regular", "BERNIER"));
fontsInUiList.add(new FontItem("imgly_font_blogger_sans_light", "Blogger Sans"));
fontsInUiList.add(new FontItem("imgly_font_cheque_regular", "Cheque"));
fontsInUiList.add(new FontItem("imgly_font_compton_bold", "Compton"));
fontsInUiList.add(new FontItem("imgly_font_fira_sans_regular", "Fira Sans"));
fontsInUiList.add(new FontItem("imgly_font_gagalin_regular", "Gagalin"));
fontsInUiList.add(new FontItem("imgly_font_hagin_caps_thin", "Hagin Caps"));
fontsInUiList.add(new FontItem("imgly_font_intro_inline", "Intro Inline"));
fontsInUiList.add(new FontItem("imgly_font_lobster", "Lobster"));
fontsInUiList.add(new FontItem("imgly_font_nexa_script", "Nexa Script"));
fontsInUiList.add(new FontItem("imgly_font_ostrich_sans_black", "OstrichSans-Black"));
fontsInUiList.add(new FontItem("imgly_font_ostrich_sans_bold", "OstrichSans-Bold"));
fontsInUiList.add(new FontItem("imgly_font_oswald_semi_bold", "Oswald-SemiBold"));
fontsInUiList.add(new FontItem("imgly_font_panton_blackitalic_caps", "Panton-Black Italic Caps"));
fontsInUiList.add(new FontItem("imgly_font_panton_lightitalic_caps", "Panton-Light Italic Caps"));
fontsInUiList.add(new FontItem("imgly_font_perfograma", "Perfograma"));
fontsInUiList.add(new FontItem("imgly_font_poppins", "Poppins"));
fontsInUiList.add(new FontItem("imgly_font_static_bold", "Static"));
fontsInUiList.add(new FontItem("imgly_font_summer_light", "Summer"));
fontsInUiList.add(new FontItem("imgly_font_trash_hand", "Trash"));

UiConfigText uiConfigText = settingsList.getSettingsModel(UiConfigText.class);
uiConfigText.setFontList(fontsInUiList);
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configTextUi %}
Kotlin
---
``````kotlin
val fontsInUiList = DataSourceIdItemList<FontItem>().apply {
    add(FontItem("imgly_font_open_sans_bold", "Open Sans"))
    add(FontItem("imgly_font_aleo_bold", "Aleo"))
    add(FontItem("imgly_font_amaticsc", "Amaticsc"))
    add(FontItem("imgly_font_bernier_regular", "BERNIER"))
    add(FontItem("imgly_font_blogger_sans_light", "Blogger Sans"))
    add(FontItem("imgly_font_cheque_regular", "Cheque"))
    add(FontItem("imgly_font_compton_bold", "Compton"))
    add(FontItem("imgly_font_fira_sans_regular", "Fira Sans"))
    add(FontItem("imgly_font_gagalin_regular", "Gagalin"))
    add(FontItem("imgly_font_hagin_caps_thin", "Hagin Caps"))
    add(FontItem("imgly_font_intro_inline", "Intro Inline"))
    add(FontItem("imgly_font_lobster", "Lobster"))
    add(FontItem("imgly_font_nexa_script", "Nexa Script"))
    add(FontItem("imgly_font_ostrich_sans_black", "OstrichSans-Black"))
    add(FontItem("imgly_font_ostrich_sans_bold", "OstrichSans-Bold"))
    add(FontItem("imgly_font_oswald_semi_bold", "Oswald-SemiBold"))
    add(FontItem("imgly_font_panton_blackitalic_caps", "Panton-Black Italic Caps"))
    add(FontItem("imgly_font_panton_lightitalic_caps", "Panton-Light Italic Caps"))
    add(FontItem("imgly_font_perfograma", "Perfograma"))
    add(FontItem("imgly_font_poppins", "Poppins"))
    add(FontItem("imgly_font_static_bold", "Static"))
    add(FontItem("imgly_font_summer_light", "Summer"))
    add(FontItem("imgly_font_trash_hand", "Trash"))
}


val uiConfigText = settingsList.getSettingsModel(UiConfigText::class.java)
uiConfigText!!.setFontList(fontsInUiList)
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configTextUi | push: second_snippet_ExampleConfigUtility_configTextUi %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configTextUi{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

