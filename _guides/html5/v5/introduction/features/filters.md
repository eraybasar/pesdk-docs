---
layout: guides/content
title: &title Filters # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 features more than 60 high-quality filters with lightning fast processing. Learn how to easily add your own custom filters.

menuitem: *title
order: 0
platform: html5
version: v5
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor
published: true # Either published or not
---
<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->


{% capture image_advanced_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_advanced_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-light/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-light/{{page.title | downcase}}.png
{% endcapture %}

{% assign images = "" | split: "" | push: image_advanced_dark | push: image_advanced_light | push: image_basic_dark | push: image_basic_light %}
{% include image_carousel.html images=images %}

Filters determine the mood and atmosphere of pictures and help convey the right message for your creative. The PhotoEditor SDK ships with over 50 handcrafted filters covering all state of the art style- and mood settings that can even be previewed in camera mode. Furthermore, the API of the PhotoEditor SDK enables you to expand the filter library with your own set of custom filters and define your unique visual language. Custom filters can easily be created by anyone using LUTs (Lookup Tables) from popular apps like Photoshop, GIMP or Lightroom.

## Specifying the available filters

This example shows the default filter configuration.
In order to enable or disable specific filters, simply pass the `categories` option to the filter controls. The items will be displyed in the order mentioned by the configuration.
If `categories: [{ identifier: 'imgly_filter_category_duotone' }]` is given without any items, editor will include all the existing `imgly_filter_category_duotone` filters  
If `flattenCategories` is set to true, all enabled adjustments will be shown in the top-level of the filter selection tool, which effectively hides the categories

---
```js
const editor = new PhotoEditorSDKUI({
  filter: {
    categories: [
      {
        identifier: 'basic',
        items: [
          { identifier: "imgly_duotone_desert" },
          { identifier: "imgly_duotone_peach" },
          { identifier: "imgly_duotone_clash" },
          { identifier: "imgly_duotone_plum" },
          { identifier: "imgly_duotone_breezy" },
          { identifier: "imgly_duotone_deepblue" },
          { identifier: "imgly_duotone_frog" },
          { identifier: "imgly_duotone_sunset" },
        ]
      },
      {
        identifier: 'imgly_filter_category_bw',
        items: [
          { identifier: "imgly_lut_ad1920" },
          { identifier: "imgly_lut_bw" },
          { identifier: "imgly_lut_x400" },
          { identifier: "imgly_lut_litho" },
          { identifier: "imgly_lut_sepiahigh" },
          { identifier: "imgly_lut_plate" },
          { identifier: "imgly_lut_sin" },
        ]
      },
      {
        identifier: 'imgly_filter_category_vintage',
        items: [
          { identifier: "imgly_lut_blues" },
          { identifier: "imgly_lut_front" },
          { identifier: "imgly_lut_texas" },
          { identifier: "imgly_lut_celsius" },
          { identifier: "imgly_lut_cool" },
        ]
      },
      {
        identifier: 'imgly_filter_category_smooth',
        items: [
          { identifier: "imgly_lut_chest" },
          { identifier: "imgly_lut_winter" },
          { identifier: "imgly_lut_kdynamic" },
          { identifier: "imgly_lut_fall" },
          { identifier: "imgly_lut_lenin" },
          { identifier: "imgly_lut_pola669" },
        ]
      },
      {
        identifier: 'imgly_filter_category_cold',
        items: [
          { identifier: "imgly_lut_elder" },
          { identifier: "imgly_lut_orchid" },
          { identifier: "imgly_lut_bleached" },
          { identifier: "imgly_lut_bleachedblue" },
          { identifier: "imgly_lut_breeze" },
          { identifier: "imgly_lut_blueshadows" },
        ]
      },
      {
        identifier: 'imgly_filter_category_warm',
        items: [
          { identifier: "imgly_lut_sunset" },
          { identifier: "imgly_lut_eighties" },
          { identifier: "imgly_lut_evening" },
          { identifier: "imgly_lut_k2" },
          { identifier: "imgly_lut_nogreen" },
        ]
      },
      {
        identifier: 'imgly_filter_category_legacy',
        items: [
          { identifier: "imgly_lut_ancient" },
          { identifier: "imgly_lut_cottoncandy" },
          { identifier: "imgly_lut_classic" },
          { identifier: "imgly_lut_colorful" },
          { identifier: "imgly_lut_creamy" },
          { identifier: "imgly_lut_fixie" },
          { identifier: "imgly_lut_food" },
          { identifier: "imgly_lut_fridge" },
          { identifier: "imgly_lut_glam" },
          { identifier: "imgly_lut_gobblin" },
          { identifier: "imgly_lut_highcontrast" },
          { identifier: "imgly_lut_highcarb" },
          { identifier: "imgly_lut_k1" },
          { identifier: "imgly_lut_k6" },
          { identifier: "imgly_lut_keen" },
          { identifier: "imgly_lut_lomo" },
          { identifier: "imgly_lut_lomo100" },
          { identifier: "imgly_lut_lucid" },
          { identifier: "imgly_lut_mellow" },
          { identifier: "imgly_lut_neat" },
          { identifier: "imgly_lut_pale" },
          { identifier: "imgly_lut_pitched" },
          { identifier: "imgly_lut_polasx" },
          { identifier: "imgly_lut_pro400" },
          { identifier: "imgly_lut_quozi" },
          { identifier: "imgly_lut_settled" },
          { identifier: "imgly_lut_seventies" },
          { identifier: "imgly_lut_soft" },
          { identifier: "imgly_lut_steel" },
          { identifier: "imgly_lut_summer" },
          { identifier: "imgly_lut_tender" },
          { identifier: "imgly_lut_twilight" },
        ]
      }
    ],
    flattenCategories: false
  },
})
```

## Adding Custom Filters

We use a technology called Lookup Tables (LUTs) in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response by applying the filter to the identity image shown below.

![Identity LUT]({{ site.baseurl }}/assets/images/shared/identity.png){: width="30%" .center-image}

The resulting image can be used within our SDK and the recorded changes can then be applied to any image by looking up the transformed colors in the modified LUT.

If you want to create a new filter, you'll need to [download]({{ site.baseurl }}/assets/images/shared/identity.png){: download="pesdk_identity_lut" } the identity LUT shown above, load it into an image editing software of your choice, apply your operations, save it and add it to your app.

> __WARNING:__ As any compression artifacts in the edited LUT could lead to distorted results when applying the filter, you need to save your LUT as a PNG file.

You can add new filters to the existing categories, or create new categories using same configuration interface as above

```js
const editor = new PhotoEditorSDKUI({
  filter: {
    categories: [
      ...,
      { identifier: 'imgly_filter_category_warm' },
      {
        identifier: 'my-new-filter-category',
        name: 'New Cool',
        thumbnailURI: '' // path to the thumbail, relative to the filter asset directory
        items: [
          ...,
          {
            identifier: 'my-new-filter-item',
            lutURI: '' // path to the lut image, relative to the filter asset directory
            horizontalTileCount: 5 // The number of horizontal tiles in the LUT image. Defaults to 5
            verticalTileCount: 5 // The number of vertical tiles in the LUT image. Defaults to 5
          }
        ]
      }
    ]
  }
})
```


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}



{% capture identifier02 %}{{page.title}}-{{page.version}}-ANALYTICS02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets02 identifier=identifier02 %}

## Localization

You can override all the labels used in filter tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration), below are the default filter localisation lables

```json
{
...,
 "filter": {
    "title": "Filters",
    "controls": {
      "buttonReset": "Reset Filter",
      "sliderIntensity": "Filter Intensity"
    },
    "items": {
      "imgly_filter_category_duotone": "DuoTone",
      "imgly_filter_category_bw": "B & W",
      "imgly_filter_category_vintage": "Vintage",
      "imgly_filter_category_smooth": "Smooth",
      "imgly_filter_category_cold": "Cold",
      "imgly_filter_category_warm": "Warm",
      "imgly_filter_category_legacy": "Legacy",
      "imgly_lut_celsius": "Inferno",
      "imgly_lut_chest": "Chestnut",
      "imgly_lut_fixie": "Fixie",
      "imgly_lut_fridge": "Fridge",
      "imgly_lut_front": "Sunny 70s",
      "imgly_lut_k2": "Flat Black",
      "imgly_lut_mellow": "Mellow",
      "imgly_lut_sin": "Hard Stuff",
      "imgly_lut_texas": "Oldtimer",
      "imgly_lut_ad1920": "1920 A.D.",
      "imgly_lut_ancient": "Ancient",
      "imgly_lut_bleached": "Kalmen",
      "imgly_lut_bleachedblue": "Joran",
      "imgly_lut_blues": "Polaroid",
      "imgly_lut_blueshadows": "Zephyr",
      "imgly_lut_breeze": "Levante",
      "imgly_lut_bw": "Greyed",
      "imgly_lut_classic": "Classic",
      "imgly_lut_colorful": "Colorful",
      "imgly_lut_cool": "Snappy",
      "imgly_lut_cottoncandy": "Candy",
      "imgly_lut_creamy": "Creamy",
      "imgly_lut_eighties": "Low Fire",
      "imgly_lut_elder": "Colla",
      "imgly_lut_evening": "Sunrise",
      "imgly_lut_fall": "Moss",
      "imgly_lut_food": "Food",
      "imgly_lut_glam": "Glam",
      "imgly_lut_gobblin": "Gobblin",
      "imgly_lut_highcarb": "High Carb",
      "imgly_lut_highcontrast": "Hicon",
      "imgly_lut_k1": "K1",
      "imgly_lut_k6": "K6",
      "imgly_lut_kdynamic": "Pebble",
      "imgly_lut_keen": "Keen",
      "imgly_lut_lenin": "Lemon",
      "imgly_lut_litho": "Litho",
      "imgly_lut_lomo": "Lomo",
      "imgly_lut_lomo100": "Lomo 100",
      "imgly_lut_lucid": "Lucid",
      "imgly_lut_neat": "Neat",
      "imgly_lut_nogreen": "Pumpkin",
      "imgly_lut_orchid": "Solanus",
      "imgly_lut_pale": "Pale",
      "imgly_lut_pitched": "Pitched",
      "imgly_lut_plate": "Weathered",
      "imgly_lut_pola669": "Green Gap",
      "imgly_lut_polasx": "Pola SX",
      "imgly_lut_pro400": "Pro 400",
      "imgly_lut_quozi": "Quozi",
      "imgly_lut_sepiahigh": "Sepia",
      "imgly_lut_settled": "Settled",
      "imgly_lut_seventies": "Seventies",
      "imgly_lut_soft": "Soft",
      "imgly_lut_steel": "Steel",
      "imgly_lut_summer": "Summer",
      "imgly_lut_sunset": "Golden",
      "imgly_lut_tender": "Tender",
      "imgly_lut_twilight": "Twilight",
      "imgly_lut_winter": "Softy",
      "imgly_lut_x400": "Dusty",
      "imgly_duotone_desert": "Desert",
      "imgly_duotone_peach": "Peach",
      "imgly_duotone_clash": "Clash",
      "imgly_duotone_plum": "Plum",
      "imgly_duotone_breezy": "Breezy",
      "imgly_duotone_deepblue": "Deep Blue",
      "imgly_duotone_frog": "Frog",
      "imgly_duotone_sunset": "Sunset"
    }
  }
}
```


{% comment %}
## Interactive Example

Try the conceps above in the interactive editor below. You can edit the source code and see the results by clicking on the 'reload' button.

{% capture code %}
window.onload = function () {
        PhotoEditorSDK.Loaders.ImageLoader.load('{{ site.baseurl }}/assets/images/shared/test.png')
          .then((image) => {
            let container = document.getElementById('editor')
            let options = {
              container: container,
              license: PESDK_LICENSE_STRING,
              editor: {
                image: image,
                controlsOptions: {
                  filter: {
                    categories: [
                      {
                        identifier: 'my_category',
                        defaultName: 'My Category',
                        filters: [
                          {
                            identifier: 'my_custom_lut',
                            defaultName: 'Custom LUT',
                            lutImage: 'filters/imgly_lut_bleachedblue_5_5_128.png'
                          },
                          {
                            identifier: 'my_other_custom_lut',
                            defaultName: 'Other Custom LUT',
                            lutImage: 'filters/imgly_lut_blues_5_5_128.png'
                          },
                          {
                            identifier: 'my_third_custom_lut',
                            defaultName: 'Third Custom LUT',
                            lutImage: 'filters/imgly_lut_orchid_5_5_128.png'
                          }
                        ]
                      }
                    ],
                    replaceCategories: true,
                    availableFilters: ['my_custom_lut', 'my_third_custom_lut']
                  }
                }
              },
              assets: {
                baseUrl: PESDK_ASSETS_URL
              }
            }
            let editor = new PhotoEditorSDK.UI.DesktopUI(options)
        })
      }
{% endcapture %}
{% capture identifier %}{{page.title}}-{{page.version}}-EXAMPLE-01{% endcapture %}
{% include pesdk_html5_editor.html code=code identifier=identifier %}

{% endcomment %}