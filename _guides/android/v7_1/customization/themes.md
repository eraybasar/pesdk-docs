---
layout: guides/content
title: &title Themes # title as shown in the menu and

menuitem: *title
order: 5
platform: android
version: v7_1
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

### Change Themes

We provide a few different themes that slightly change the editor's layout. The default behavior `PESDKMobileUIDefaultTheme` displays in fullscreen mode with the action bar at the bottom.
Furthermore you can choose between these styles: `Imgly.Theme`, `Imgly.Theme.NoFullscreen`, `Imgly.Theme.TopActionBar` and `Imgly.Theme.TopActionBar.NoFullscreen`.

With these options you can switch the fullscreen mode on/off and also position the actionbar at the top or bottom.

A possible line of code to define the theme should look like this:
`settingsList.getSettingsModel(UiConfigTheme.class).setTheme(R.style.Imgly_Theme_TopActionBar_NoFullscreen);`

### Color Theming

The default is a dark color theme but there is also a predefined light color theme which can be applied as follows:
If you do not have already done, create a resource values file (`res/values/imgly_color.xml`) in your project and copy these color values to override the default color set.
_Due to a limitation of Android 4, it is currently not possible to change the color theme at runtime, you need to add these colors at compile time._

```xml
<color name="imgly_transparent_color">#00000000</color>
<color name="imgly_background_color">#FFFFFFFF</color>
<color name="imgly_camera_header_background_color">#27000000</color>
<color name="imgly_camera_footer_background_color">#27000000</color>
<color name="imgly_highlight_color">#FF1B77FF</color>
<color name="imgly_icon_border_color_active">#FF1B77FF</color>
<color name="imgly_slider_track_color_progress">#FF1B77FF</color>
<color name="imgly_text_color">#FF000000</color>
<color name="imgly_editor_text_color">#FF000000</color>
<color name="imgly_camera_text_color">#FFFFFFFF</color>
<color name="imgly_text_color_active">#FF000000</color>
<color name="imgly_sprite_handle_thumb_color">#FFFFFFFF</color>
<color name="imgly_text_on_image_color">#FFFFFFFF</color>
<color name="imgly_icon_color_active">#FF000000</color>
<color name="imgly_shuffle_icon_color">#FF000000</color>
<color name="imgly_text_on_image_color_secondary">#99FFFFFF</color>
<color name="imgly_button_color">#00000000</color>
<color name="imgly_button_color_pressed">#FF203E61</color>
<color name="imgly_button_color_disabled">#CCCCCCCC</color>
<color name="imgly_icon_color">#CC000000</color>
<color name="imgly_editor_text_color_secondary">#99000000</color>
<color name="imgly_slider_thumb_color_disabled">#66000000</color>
<color name="imgly_icon_color_disabled">#66000000</color>
<color name="imgly_crop_icon_fill_color_active">#33000000</color>
<color name="imgly_crop_icon_fill_color">#29000000</color>
<color name="imgly_slider_track_color">#99000000</color>
<color name="imgly_text_input_background_color">#D9000000</color>
<color name="imgly_sticker_selection_background_color">#D9000000</color>
<color name="imgly_actionBar_background_color">#FFDDDDDD</color>
<color name="imgly_optionToolBar_background_color">#FFE3E3E3</color>
<color name="imgly_slider_thumb_color">#FFE3E3E3</color>
<color name="imgly_slider_background_color">#FFE3E3E3</color>
<color name="imgly_quickOptionToolBar_background_color">#4D000000</color>
<color name="imgly_dialog_background_color">#DDE3E3E3</color>
<color name="imgly_shuffle_icon_overlay_color">#DDE3E3E3</color>
<color name="imgly_text_on_image_background_color">#99000000</color>
<color name="imgly_sprite_handle_line_color">#80FFFFFF</color>
<color name="imgly_brush_preview_background_color">#DD1C1C1C</color>
<color name="imgly_icon_color_on_canvas">#FFFFFFFF</color>
<color name="imgly_icon_color_on_canvas_disabled">#66FFFFFF</color>
<color name="imgly_icon_color_secondary">#99000000</color>
<color name="imgly_camera_background_color">#FF000000</color>
<color name="imgly_camera_icon_color">#CCFFFFFF</color>
<color name="imgly_transform_background_color">#80000000</color>
```

