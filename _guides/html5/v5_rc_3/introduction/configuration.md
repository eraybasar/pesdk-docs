---
layout: guides/content
title: &title Configuration
description: PhotoEditor SDK for HTML5 can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: Configuration
order: 1
platform: html5
version: v5_rc_3
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


You can easily configure the editor to disable specific tools, hide buttons, change components etc. by adding a configuration object to the `PhotoEditorSDKUI`.

Refer to the [nomenclature]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/concepts/nomenclature) to understand the naming convention.

```js
const editor = new PhotoEditorSDKUI({
    layout: 'advanced',
    container: '..',
  },
})
```

  * `layout` - The layout that should be rendered by the editor. Defaults to `advanced`. Available are `advanced`, `basic`. Refer to the [UI documentation]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/introduction/ui) for more information.
  * `container` DOMElement - The element the editor should be rendered to.
  * `language` String - The UI language. Defaults to `en`. Available are `en` and `de`.
  * `order` - String - Should the `toolControlBar` be rendered on right, relevant only for AdvancedUI. Defaults to `default`. Available are `default` and `reverse`.
  * `theme` String - Defines the theme that should be used to style the user interface. Defaults to `dark`. Available are `dark` and `light`.
  * `image` `data-url` or ImageElement - The image that should be loaded and displayed initially.
  
  * `assetBaseUrl` String - The base URL for all assets. Should be the absolute path to your `assets` directory. Defaults to `assets`.

  * `engine` Object
    * `license` String - The PESDK license. If no license (or an invalid license) is provided engine will render a watermark over the preview and export output. Refer to the [pricing plans](https://account.photoeditorsdk.com/pricing/) for more information.
    * `crossOrigin` - Sets the global crossOrigin loading mode. Defaults to `anonymous`. Available are `anonymous`, `use-credentials` or `none`
    * `downscaleOptions` Object - Images whose sizes exceed these megapixel limits will be downscaled by the engine.
      * `maxMegaPixels` Object - Specifies the maximum amount of megapixels per device type.
        * `desktop` Number - Defaults to 10.
        * `mobile` Number - Defaults to 5.
      * `maxDimensions` Object - Specifies max height or width for the image.
        * `height` Number - Defaults to height of given image
        * `width` Number - Defaults to width of given image
  

  * `displayResizeWarning` Boolean - Should a message be displayed when the image has been scaled down for performance reasons. Defaults to `true`.
  * `enableZoom` Boolean - Should the image be zoomable? Defaults to `true`
  * `mainCanvasActions` Array - Defines all allowed actions for the main screen that are displayed in the given order as buttons on the `mainCanvasActionBar`. Available are to `undo`, `redo`, `export`, `close`, undefined. If undefined is given, based on the array index of undefined, the editor will leave that place empty.
  
  * `tools` Array - The enabled tools in the order they are mentioned, Can be grouped in arrays which will be displayed with separators. Available are: `transform`, `filter`, `adjustment`, `focus`, `text`, `textdesign`, `sticker`, `brush`, `frame` and `overlay`.
  * `defaultTool` String - The tool that is initially loaded. Defaults to `filter`.
  
  * `snapping` Object - Options that control the snapping behaviour of sprites.
    * `position` Object - Snapping options for positioning sprites.
      * `enabled` Boolean - Whether sprites should snap to specific positions during pan interactions. Defaults to `true`
      * `threshold` Number - This threshold defines the distance of a pan gesture where snapping at a snap point occurs (value in pixels). Defaults to `20`
      * `snapToHorizontalCenter` Boolean - If enabled a sprite's center snaps to the horizontal line through the center of the edited image. Defaults to `true`
      * `snapToVerticalCenter` Boolean - If enabled a sprite's center snaps to the vertical line through the center of the edited image. Defaults to `true`
      * `snapToLeft` Number or null - The left side of a sprite's bounding box snaps to a vertical line which is shifted by this value from the left side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
      * `snapToRight` Number or null - The right side of a sprite's bounding box snaps to a vertical line which is shifted by this value from the right side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
      * `snapToTop` Number or null - The top side of a sprite's bounding box snaps to a vertical line which is shifted by this value from the top side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
      * `snapToBottom` Number or null - The bottom side of a sprite's bounding box snaps to a vertical line which is shifted by this value from the bottom side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
    * `rotation` Object - Snapping options for rotating sprites.
      * `enabled` Boolean - Whether sprites should snap to specific orientations during rotation interactions. Defaults to `true`
      * `threshold` Number - This threshold defines the arc length of a rotation gesture where snapping at a snap angle occurs (value in pixels). Defaults to `20`
      * `angles` Number - Enabled snapping angles in degrees for rotating a sprite. The rotation angle is defined clockwise. Defaults to `[0, 45, 90, 135, 180, 225, 270, 315]`
  
  * `export` Object - Export configuration.
    * `image` Object - Image export configuration.
      * `format` String - The MIME type of the exported image. Defaults to `image/png`. Available formats vary by browser.
      * `exportType` `image` or `data-url` - Specifies the export type.
      * `quality` Number - The compression quality to use when creating the output image with a lossy file format, Defaults to 0.9
      * `enableDownload` Boolean - Should a export download the image in the specified format?. Defaults to `true`

  * `library` Object - Configuration options for library tool. Refer to the [library]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/library) documentation more options.
  * `filter` Object - Configuration options for filter tool. Refer to the [filter]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/filters) documentation for available categories and their items.
  * `focus` Object - Configuration options for focus tool. Refer to the [focus]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/focus) documentation for available items.
  * `adjustment` Object - Configuration options for adjustment tool. Refer to the [adjustment]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/adjustment) documentation for available categories and their items.
  * `overlay` Object - Configuration options for overlay tool. Refer to the [overlay]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/overlays) documentation for available items.
  * `frame` Object - Configuration options for frame tool. Refer to the [frame]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/frames) documentation for available items.
  * `sticker` Object - Configuration options for sticker tool. Refer to the [sticker]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/stickers) documentation for available categories and their items.
  * `text` Object - Configuration options for text tool. Refer to the [text]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/text) documentation for available items.
  * `textdesign` Object - Configuration options for textdesign tool. Refer to the [textdesign]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/textdesign) documentation for available items.
  * `transform` Object - Configuration options for transform tool. Refer to the [transform]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/features/transform) documentation for available categories and their items.

  * `custom` Object - Customization options.
    * `languages` Object - Language labeling options to change the user interface appearance. This allows to alter predefined existing theme presets or to create new themes which can be enabled when their corresponding key is configured.  Refer to the [localization documentation]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/customization/localization) for more customizations.
    * `theme` Object - Theming options to change the user interface appearance. This allows to alter predefined existing theme presents or to create new themes which can be enabled when their corresponding key is configured.  Refer to the [theme documentation]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/customization/theme) for more customizations.
    * `components` Object - Custom react components that will be rendered instead of current components. Refer to the [component customizations]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/introduction/customization/component) for more information.


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
