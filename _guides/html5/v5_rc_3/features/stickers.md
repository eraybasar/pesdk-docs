---
layout: guides/content
title: &title Stickers # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 ships with a preset sticker library containing emoticons and shapes. Learn how to add custom sticker packages to the library.
menuitem: *title
order: 7
platform: html5
version: v5_rc_3
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

The PhotoEditor SDK ships with a categorized sticker library whose UI is optimized for exploration and discovery. You can easily leverage the API to complement the library with your custom sticker packages.

# Specifying the availbale stickers

In order to enable or disable specific stickers, simply pass the `categories` option to the sticker tool configuration. The items will be displayed in the order mentioned by the configuration. Here is the list of default sticker categories and items.

```js

const editor = await PhotoEditorSDKUI.init({
  sticker: {
    categories: [
      {
        identifier: 'imgly_sticker_category_emoticons',
        items: [
          { identifier: "imgly_sticker_emoticons_grin" },
          { identifier: "imgly_sticker_emoticons_laugh" },
          { identifier: "imgly_sticker_emoticons_smile" },
          { identifier: "imgly_sticker_emoticons_wink" },
          { identifier: "imgly_sticker_emoticons_tongue_out_wink" },
          { identifier: "imgly_sticker_emoticons_angel" },
          { identifier: "imgly_sticker_emoticons_kisses" },
          { identifier: "imgly_sticker_emoticons_loving" },
          { identifier: "imgly_sticker_emoticons_kiss" },
          { identifier: "imgly_sticker_emoticons_wave" },
          { identifier: "imgly_sticker_emoticons_nerd" },
          { identifier: "imgly_sticker_emoticons_cool" },
          { identifier: "imgly_sticker_emoticons_blush" },
          { identifier: "imgly_sticker_emoticons_duckface" },
          { identifier: "imgly_sticker_emoticons_furious" },
          { identifier: "imgly_sticker_emoticons_angry" },
          { identifier: "imgly_sticker_emoticons_steaming_furious" },
          { identifier: "imgly_sticker_emoticons_sad" },
          { identifier: "imgly_sticker_emoticons_anxious" },
          { identifier: "imgly_sticker_emoticons_cry" },
          { identifier: "imgly_sticker_emoticons_sobbing" },
          { identifier: "imgly_sticker_emoticons_loud_cry" },
          { identifier: "imgly_sticker_emoticons_wide_grin" },
          { identifier: "imgly_sticker_emoticons_impatient" },
          { identifier: "imgly_sticker_emoticons_tired" },
          { identifier: "imgly_sticker_emoticons_asleep" },
          { identifier: "imgly_sticker_emoticons_sleepy" },
          { identifier: "imgly_sticker_emoticons_deceased" },
          { identifier: "imgly_sticker_emoticons_attention" },
          { identifier: "imgly_sticker_emoticons_question" },
          { identifier: "imgly_sticker_emoticons_not_speaking_to_you" },
          { identifier: "imgly_sticker_emoticons_sick" },
          { identifier: "imgly_sticker_emoticons_pumpkin" },
          { identifier: "imgly_sticker_emoticons_boxer" },
          { identifier: "imgly_sticker_emoticons_idea" },
          { identifier: "imgly_sticker_emoticons_smoking" },
          { identifier: "imgly_sticker_emoticons_beer" },
          { identifier: "imgly_sticker_emoticons_skateboard" },
          { identifier: "imgly_sticker_emoticons_guitar" },
          { identifier: "imgly_sticker_emoticons_music" },
          { identifier: "imgly_sticker_emoticons_sunbathing" },
          { identifier: "imgly_sticker_emoticons_hippie" },
          { identifier: "imgly_sticker_emoticons_humourous" },
          { identifier: "imgly_sticker_emoticons_hitman" },
          { identifier: "imgly_sticker_emoticons_harry_potter" },
          { identifier: "imgly_sticker_emoticons_business" },
          { identifier: "imgly_sticker_emoticons_batman" },
          { identifier: "imgly_sticker_emoticons_skull" },
          { identifier: "imgly_sticker_emoticons_ninja" },
          { identifier: "imgly_sticker_emoticons_masked" },
          { identifier: "imgly_sticker_emoticons_alien" },
          { identifier: "imgly_sticker_emoticons_wrestler" },
          { identifier: "imgly_sticker_emoticons_devil" },
          { identifier: "imgly_sticker_emoticons_star" },
          { identifier: "imgly_sticker_emoticons_baby_chicken" },
          { identifier: "imgly_sticker_emoticons_rabbit" },
          { identifier: "imgly_sticker_emoticons_pig" },
          { identifier: "imgly_sticker_emoticons_chicken" },
        ]
      },
      {
        identifier: 'imgly_sticker_category_shapes',
        items: [
          { identifier: "imgly_sticker_shapes_badge_01" },
          { identifier: "imgly_sticker_shapes_badge_04" },
          { identifier: "imgly_sticker_shapes_badge_12" },
          { identifier: "imgly_sticker_shapes_badge_06" },
          { identifier: "imgly_sticker_shapes_badge_13" },
          { identifier: "imgly_sticker_shapes_badge_36" },
          { identifier: "imgly_sticker_shapes_badge_08" },
          { identifier: "imgly_sticker_shapes_badge_11" },
          { identifier: "imgly_sticker_shapes_badge_35" },
          { identifier: "imgly_sticker_shapes_badge_28" },
          { identifier: "imgly_sticker_shapes_badge_32" },
          { identifier: "imgly_sticker_shapes_badge_15" },
          { identifier: "imgly_sticker_shapes_badge_20" },
          { identifier: "imgly_sticker_shapes_badge_18" },
          { identifier: "imgly_sticker_shapes_badge_19" },
          { identifier: "imgly_sticker_shapes_arrow_02" },
          { identifier: "imgly_sticker_shapes_arrow_03" },
          { identifier: "imgly_sticker_shapes_spray_01" },
          { identifier: "imgly_sticker_shapes_spray_04" },
          { identifier: "imgly_sticker_shapes_spray_03" },
        ]
      }
    ]
  }
})

```

## Flattening of categories

If `flattenCategories` is set to true, all enabled stickers will be shown in the top-level of the sticker selection tool, which effectively hides the categories.

```js
const editor = await PhotoEditorSDKUI.init({
  sticker: {
    flattenCategories: true
  }
})
```

## Including all the items from a category

If a existing category identifier is specified without any items, the editor will include all the existing stickers items of the category as shown for the `imgly_sticker_category_emoticons` category in the following example.

```js
const editor = await PhotoEditorSDKUI.init({
  sticker: {
    categories: [{
      identifier: 'imgly_sticker_category_emoticons'
    }],
  },
})
```

## Adding custom stickers

You can add new stickers to the existing categories, or create new categories using same configuration interface as above.

```js
const editor = await PhotoEditorSDKUI.init({
  sticker: {
    categories: [
      {
        identifier: 'some_category',
        name: 'Some Category',
        thumbnailURI: '', // path to the sticker, relative to the sticker asset directory
        items: [
          {
            identifier: 'custom_sticker',
            name: 'Custom Sticker',
            thumbnailURI: '', // path to the thumbnail, relative to the sticker asset directory
            stickerURI: '..', // path to the sticker, relative to the sticker asset directory
            tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
            resizeMode: 'keepAspect'  // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
          }
        ]
      }
    ],
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Custom sticker upload by end users

By default end users are able to upload their own images as custom stickers into the sticker tool of our editor using the "Upload" button. Once uploaded, they will all appear in a new category called "Custom" (localizable with the `locale.sticker.categories.imgly_sticker_custom` key). 

You can configure the tint mode of all of these custom stickers with the `sticker.customStickerTintMode` controls option. You can find more information
on sticker tint modes in the [Enable color customization](#enable-color-customization) section.

Please note that these types of custom stickers are always included in serialization files, which can increase the size of such a serialization
by quite a lot. 

If you don't want the custom sticker upload feature to be enabled, you can simply disable it by setting the `sticker.enableCustomUpload` controls option to `false`.

```js
const editor = await PhotoEditorSDKUI.init({
  sticker: {
    enableCustomUpload: false, // true is the default
    customStickerTintMode: 'colorized' // 'none' is the default
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Enable color customization

By default, the sticker color cannot be changed in the UI. However, you can enable the option to add a tint color using the optional `tintMode` property of each sticker (Desktop UI only). 
The possible values are `none` (default), `solid` and  `colorized`.

Here is an example of the different tint modes (from left to right: `none`, `solid`, `colorized`):

![TintModes]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}/sticker-tint-modes.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

```js
const editor = await PhotoEditorSDKUI.init({
  sticker: {
    categories: [
      {
        identifier: 'some_category',
        name: 'Some Category',
        thumbnailURI: '',
        items: [
          {
            identifier: 'custom_sticker',
            name: 'Custom Sticker',
            thumbnailURI: '..', // path to the thumbnail, relative to the sticker asset directory
            stickerURI: '..', // path to the sticker, relative to the sticker asset directory
            tintMode: 'colorized', // 'none', 'solid', 'colorized'
          }
        ]
      }
    ],
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Enable non-uniform sticker resizing

By default, stickers keep their aspect ratio when they are being resized. However, you can also allow each individual sticker to resize freely,
by setting its `resizeMode` property to `unrestricted`

```js
const sticker = {
  identifier: 'custom_sticker',
  name: 'Custom Sticker',
  thumbnailURI: '..', // path to the thumbnail, relative to the sticker asset directory
  stickerURI: '..', // path to the sticker, relative to the sticker asset directory
  tintMode: 'colorized', // 'none', 'solid', 'colorized'
  resizeMode: 'unrestricted'// Possible: 'keepAspect', 'unrestricted'
}
```
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

It is also possible to easily override this property for the default stickers that are shipped with PhotoEditor SDK using the editor configuration.
The following example does this for our square shape, which allows it to now be resized to any arbitrary rectangle:

```js
const editor = await PhotoEditorSDKUI.init({
  sticker: {
    categories: [
      {
        identifier: 'imgly_sticker_shapes',
        items: [
          {
            identifier: 'imgly_sticker_shapes_badge_01',
            resizeMode: 'unrestricted'
          }
        ]
      }
    ],
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Localization

You can override all the labels used in sticker tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/localization), below are the default sticker localization lables

```js
await PhotoEditorSDKUI.init({
  ...,
  custom: {
    languages: {
      en: {
        ...,
        sticker: {
          title: 'Stickers',
          controls: {
            buttonUpload: 'Upload Sticker',
            // Relevant for AdvancedUI
            sliderOpacity: 'Sticker Opacity',
            selectColor: 'Sticker Color',
            // Relevant for BasicUI
            tabColor: 'Color',
            tabOpacity: 'Opacity',
          },
          categories: {
            imgly_sticker_emoticons: 'Emoticons',
            imgly_sticker_shapes: 'Shapes',
          },
          items: {
            // In the UI, sticker assets are not displayed with labels, but these lables are important for Accessibility
            imgly_sticker_emoticons_alien: 'Alien',
            imgly_sticker_emoticons_angel: 'Angel',
            imgly_sticker_emoticons_angry: 'Angry',
            imgly_sticker_emoticons_anxious: 'Anxious',
            imgly_sticker_emoticons_asleep: 'Asleep',
            imgly_sticker_emoticons_attention: 'Attention',
            imgly_sticker_emoticons_baby_chicken: 'Baby Chicken',
            imgly_sticker_emoticons_batman: 'Batman',
            imgly_sticker_emoticons_beer: 'Beer',
            imgly_sticker_emoticons_black: 'Black',
            imgly_sticker_emoticons_blue: 'Blue',
            imgly_sticker_emoticons_blush: 'Blush',
            imgly_sticker_emoticons_boxer: 'Boxer',
            imgly_sticker_emoticons_business: 'Business',
            imgly_sticker_emoticons_chicken: 'Chicken',
            imgly_sticker_emoticons_cool: 'Cool',
            imgly_sticker_emoticons_cry: 'Cry',
            imgly_sticker_emoticons_deceased: 'Deceased',
            imgly_sticker_emoticons_devil: 'Devil',
            imgly_sticker_emoticons_duckface: 'Duckface',
            imgly_sticker_emoticons_furious: 'Furious',
            imgly_sticker_emoticons_grin: 'Grin',
            imgly_sticker_emoticons_guitar: 'Guitar',
            imgly_sticker_emoticons_harry_potter: 'Harry Potter',
            imgly_sticker_emoticons_hippie: 'Hippie',
            imgly_sticker_emoticons_hitman: 'Hitman',
            imgly_sticker_emoticons_humourous: 'Humourous',
            imgly_sticker_emoticons_idea: 'Idea',
            imgly_sticker_emoticons_impatient: 'Impatient',
            imgly_sticker_emoticons_kiss: 'Kiss',
            imgly_sticker_emoticons_kisses: 'Kisses',
            imgly_sticker_emoticons_laugh: 'Laugh',
            imgly_sticker_emoticons_loud_cry: 'Loud Cry',
            imgly_sticker_emoticons_loving: 'Loving',
            imgly_sticker_emoticons_masked: 'Masked',
            imgly_sticker_emoticons_music: 'Music',
            imgly_sticker_emoticons_nerd: 'Nerd',
            imgly_sticker_emoticons_ninja: 'Ninja',
            imgly_sticker_emoticons_not_speaking_to_you: 'Not speaking to you',
            imgly_sticker_emoticons_pig: 'Pig',
            imgly_sticker_emoticons_pumpkin: 'Pumpkin',
            imgly_sticker_emoticons_question: 'Question',
            imgly_sticker_emoticons_rabbit: 'Rabbit',
            imgly_sticker_emoticons_sad: 'Sad',
            imgly_sticker_emoticons_sick: 'Sick',
            imgly_sticker_emoticons_skateboard: 'Skateboard',
            imgly_sticker_emoticons_skull: 'Skull',
            imgly_sticker_emoticons_sleepy: 'Sleepy',
            imgly_sticker_emoticons_smile: 'Smile',
            imgly_sticker_emoticons_smoking: 'Smoking',
            imgly_sticker_emoticons_sobbing: 'Sobbing',
            imgly_sticker_emoticons_star: 'Star',
            imgly_sticker_emoticons_steaming_furious: 'Steaming Furious',
            imgly_sticker_emoticons_sunbathing: 'Sunbathing',
            imgly_sticker_emoticons_tired: 'Tired',
            imgly_sticker_emoticons_tongue_out_wink: 'Tongue out wink',
            imgly_sticker_emoticons_wave: 'Wave',
            imgly_sticker_emoticons_wide_grin: 'Wide Grin',
            imgly_sticker_emoticons_wink: 'Wink',
            imgly_sticker_emoticons_wrestler: 'Wrestler',
            imgly_sticker_shapes_arrow_02: 'Arrow 1',
            imgly_sticker_shapes_arrow_03: 'Arrow 2',
            imgly_sticker_shapes_badge_01: 'Badge 1',
            imgly_sticker_shapes_badge_11: 'Badge 5',
            imgly_sticker_shapes_badge_12: 'Badge 6',
            imgly_sticker_shapes_badge_13: 'Badge 7',
            imgly_sticker_shapes_badge_15: 'Badge 8',
            imgly_sticker_shapes_badge_18: 'Badge 9',
            imgly_sticker_shapes_badge_19: 'Badge 10',
            imgly_sticker_shapes_badge_20: 'Badge 11',
            imgly_sticker_shapes_badge_28: 'Badge 12',
            imgly_sticker_shapes_badge_32: 'Badge 13',
            imgly_sticker_shapes_badge_35: 'Badge 14',
            imgly_sticker_shapes_badge_36: 'Badge 15',
            imgly_sticker_shapes_badge_04: 'Badge 2',
            imgly_sticker_shapes_badge_06: 'Badge 3',
            imgly_sticker_shapes_badge_08: 'Badge 4',
            imgly_sticker_shapes_spray_01: 'Spray 1',
            imgly_sticker_shapes_spray_03: 'Spray 2',
            imgly_sticker_shapes_spray_04: 'Spray 3',
          },
          canvasActions: {
            buttonDelete: 'Delete',
            buttonBringToFront: 'Move to top',
            buttonDuplicate: 'Duplicate',
            buttonFlipHorizontal: 'Flip',
            buttonFlipVertical: 'Flip',
          },
          history: {
            add: 'Sticker',
            resize: 'Sticker resize',
            position: 'Sticker position',
            color: 'Sticker color',
            delete: 'Sticker delete',
            order: 'Sticker order',
            opacity: 'Sticker opacity',
            flip: 'Sticker flip',
          },
        }
      }
    }
  }
})
```
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}