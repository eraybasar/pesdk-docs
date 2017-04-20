---
layout: guides/android/v3_1/content
title: &title Localization # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---ished: true # Either published or not 
---

# Localization

You can easily add more languages by adding/overwriting string resources.

> __HINT__: This is not only true for strings. You can exchange all localized resources (e.g. add icons for different languages).

For more information take a look at the [Developer Guides](http://developer.android.com/guide/topics/resources/localization.html).

## Using the localization editor

Copy and paste the downloaded files (just the files, not the folder) into the `res` folder of your own app. Afterwards, open your project in Android Studio.

Open `res/values/string.xml` (if the file doesn't exist, you will have to create it) and click `Edit translations for all locales in the translations editor.` -> `Open editor`.

![Strings](/assets/images/android/imgly_strings.png){: width="675px"}

Now you're able to edit all texts and translate them into other languages.

![Editor](/assets/images/android/imgly_string_editor.png){: width="675px"}


## Localization identifiers

###### Filter names

| String Identifier | English Value |
|------------------:|:---------------|
|`imgly_color_filter_name_default`|NONE|
|`imgly_color_filter_name_ad1920`|1920|
|`imgly_color_filter_name_ancient`|Ancient|
|`imgly_color_filter_name_bleached`|Bleached|
|`imgly_color_filter_name_bleachedblue`|Bleached Blue|
|`imgly_color_filter_name_blues`|Blues|
|`imgly_color_filter_name_blueshadows`|Blue Shadows|
|`imgly_color_filter_name_breeze`|Breeze|
|`imgly_color_filter_name_bw`|B & W|
|`imgly_color_filter_name_celsius`|Celsius|
|`imgly_color_filter_name_chest`|Chest|
|`imgly_color_filter_name_classic`|Classic|
|`imgly_color_filter_name_colorful`|Colorful|
|`imgly_color_filter_name_cool`|Cool|
|`imgly_color_filter_name_cottoncandy`|Cotton Candy|
|`imgly_color_filter_name_creamy`|Creamy|
|`imgly_color_filter_name_eighties`|Eighties|
|`imgly_color_filter_name_elder`|Elder|
|`imgly_color_filter_name_evening`|Evening|
|`imgly_color_filter_name_fall`|Fall|
|`imgly_color_filter_name_fixie`|Fixie|
|`imgly_color_filter_name_food`|Food|
|`imgly_color_filter_name_fridge`|Fridge|
|`imgly_color_filter_name_front`|Front|
|`imgly_color_filter_name_glam`|Glam|
|`imgly_color_filter_name_gobblin`|Gobblin|
|`imgly_color_filter_name_highcarb`|High Carp|
|`imgly_color_filter_name_highcontrast`|High Contrast|
|`imgly_color_filter_name_identity`|Identiy|
|`imgly_color_filter_name_k1`|K1|
|`imgly_color_filter_name_k2`|K2|
|`imgly_color_filter_name_k6`|K6|
|`imgly_color_filter_name_kdynamic`|K Dynamic|
|`imgly_color_filter_name_keen`|Keen|
|`imgly_color_filter_name_lenin`|Lenin|
|`imgly_color_filter_name_litho`|Litho|
|`imgly_color_filter_name_lomo`|Lomo|
|`imgly_color_filter_name_lomo100`|Lomo 100|
|`imgly_color_filter_name_lucid`|Lucid|
|`imgly_color_filter_name_mellow`|Mellow|
|`imgly_color_filter_name_neat`|Neat|
|`imgly_color_filter_name_nogreen`|No Green|
|`imgly_color_filter_name_orchid`|Orchid|
|`imgly_color_filter_name_pale`|Pale|
|`imgly_color_filter_name_pitched`|Pitched|
|`imgly_color_filter_name_plate`|Plate|
|`imgly_color_filter_name_pola669`|Pola 669|
|`imgly_color_filter_name_polasx`|Pola SX|
|`imgly_color_filter_name_pro400`|Pro 400|
|`imgly_color_filter_name_quozi`|Quozi|
|`imgly_color_filter_name_sepiahigh`|Sepiahigh|
|`imgly_color_filter_name_settled`|Settled|
|`imgly_color_filter_name_seventies`|Seventies|
|`imgly_color_filter_name_sin`|Sin|
|`imgly_color_filter_name_soft`|Soft|
|`imgly_color_filter_name_steel`|Steel|
|`imgly_color_filter_name_summer`|Summer|
|`imgly_color_filter_name_sunset`|Sunset|
|`imgly_color_filter_name_tender`|Tender|
|`imgly_color_filter_name_texas`|Texas|
|`imgly_color_filter_name_twilight`|Twilight|
|`imgly_color_filter_name_winter`|Winter|
|`imgly_color_filter_name_x400`|X400|

###### Crop Panel

| String Identifier | English Value |
|------------------:|:---------------|
|`imgly_crop_name_custom`|Custom|
|`imgly_crop_name_square`|1:1|
|`imgly_crop_name_16_9`|16:9|
|`imgly_crop_name_4_3`|4:3|
|`imgly_crop_name_9_16`|9:16|
|`imgly_crop_name_3_4`|3:4|

###### Rotation Panel

| String Identifier | English Value |
|------------------:|:---------------|
|`imgly_rotation_name_cw`|Rotate L|
|`imgly_rotation_name_ccw`|Rotate R|
|`imgly_rotation_name_flip_h`|Flip H|
|`imgly_rotation_name_flip_v`|Flip V|

###### Sticker Names

| String Identifier | English Value |
|------------------:|:---------------|
|`imgly_sticker_name_sticker`|Sticker|
|`imgly_sticker_name_glasses_normal`|Glasses|
|`imgly_sticker_name_glasses_nerd`|Nerd Glasses|
|`imgly_sticker_name_glasses_shutter_green`|Shutter Glasses|
|`imgly_sticker_name_glasses_shutter_yellow`|Shutter Glasses|
|`imgly_sticker_name_glasses_sun`|Sun Glasses|
|`imgly_sticker_name_hat_cap`|Cape|
|`imgly_sticker_name_hat_sherrif`|Sherrif|
|`imgly_sticker_name_hat_party`|Pary Hat|
|`imgly_sticker_name_hat_zylinder`|Zylinder|
|`imgly_sticker_name_mustache1`|Mustage|
|`imgly_sticker_name_mustache2`|Mustage|
|`imgly_sticker_name_mustache3`|Mustage|
|`imgly_sticker_name_mustache_long`|Mustage|
|`imgly_sticker_name_snowflake`|Snowflake|
|`imgly_sticker_name_heart`|Heart|
|`imgly_sticker_name_pipe`|Pipe|
|`imgly_sticker_name_star`|Star|

###### Text Panel

| String Identifier | English Value |
|------------------:|:---------------|
|`imgly_text_edit_ok_button`|OK|
|`imgly_text_panel_add_button`|Add|
|`imgly_text_panel_font_button`|Font|
|`imgly_text_panel_update_button`|Edit Text|
|`imgly_text_panel_color_button`|Color|
|`imgly_text_panel_background_color_button`|BG Color|
|`imgly_text_panel_add_text_dialog`|Write Text|
|`imgly_text_panel_update_text_dialog`|Change Text|
|`imgly_text_panel_change_font_dialog`|Select Font|
|`imgly_text_panel_change_color_dialog`|Select Color|
|`imgly_color_picker_hint`|Color Value|

###### Tool Names

| String Identifier | English Value |
|------------------:|:---------------|
|`imgly_tool_name_magic`|Magic|
|`imgly_tool_name_filter`|Filter|
|`imgly_tool_name_orientation`|Orientation|
|`imgly_tool_name_focus`|Focus|
|`imgly_tool_name_crop`|Crop|
|`imgly_tool_name_brightness`|Brightness|
|`imgly_tool_name_contrast`|Contrast|
|`imgly_tool_name_saturation`|Saturation|
|`imgly_tool_name_sticker`|Sticker|
|`imgly_tool_name_text`|Text|
