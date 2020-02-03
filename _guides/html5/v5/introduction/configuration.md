---
layout: guides/content
title: &title Configuration
description: The PhotoEditor SDK for HTML5 can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: Configuration
order: 2
platform: html5
version: v5
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


You can easily configure the editor to disable specific tools, hide buttons etc. by adding properties
to the `options` object passed to the UI:

---

  * `layout` - The layout that should be loaded, default to `advanced`. Available are `advanced`, `basic`
  * `container` HTMLDivElement - The element the editor should be rendered to
  * `language` String - The UI language. Defaults to `en`. Available are `en` and `de`
  * `theme` String - Defines the theme that should be used to style the user interface. Defaults to `dark`. Available are `dark` and `light`
  * `image` String or HTMLImageElement - The image that should be loaded and displayed initially
  * `order` - rendering `toolControlBar` to right, relevant only for AdvancedUI, defaults to `default`. Available are `default` and `reverse` 
  * `assetBaseUrl` String - The base URL for all assets. Should be the absolute path to your `assets` directory, defaults to `assets`

  * `engine` Object
    * `license` String - The PESDK license. If no license (or an invalid license) is provided engine will render a watermark over the preview and export output
    * `crossOrigin` - Sets the global crossOrigin loading mode. Values: `anonymous`, `use-credentials` or `none`
    * `downscaleOptions` Object - Images whose sizes exceed these megapixel limits will be downscaled by the engine
      * `maxMegaPixels` Object - Specifies the maximum amount of megapixels per device type
        * `desktop` Number - Defaults to 10
        * `mobile` Number - Defaults to 5
      * `maxDimensions` Object - Specifies max height or width for the image
        * `height` Number
        * `width` Number
  
  * `displayResizeWarning` Boolean - Should a message be displayed when the image has been scaled down for performance reasons. Defaults to `true`.
  * `enableZoom` Boolean - Should the image be zoomable? Defaults to `true`
  * `tools` Array - The enabled tools in the order they are mentioned, Can be grouped in arrays which will be displayed with separators. Available are: `transform`, `filter`, `adjustments`, `focus`, `text`, `textdesign`, `sticker`, `brush`, `frame` and `overlay`
  * `defaultTool` String - The tool that is initially loaded. Defaults to `filter`
  * `mainCanvasActions` Array - Defines all allowed actions for the main screen that are displayed in the given order as buttons on the canvasBar. Available are to `undo`, `redo`, `export`, `close`, `undefined`, if `undefined` is given, based on the array index of `undefined` editor will leave that place empty
  * `snapping` Object - Options that control the snapping behaviour of sprites
    * `position` Object - Snapping options for positioning sprites
      * `enabled` Boolean - Whether sprites should snap to specific positions during pan interactions. Defaults to `true`
      * `threshold` Number - This threshold defines the distance of a pan gesture where snapping at a snap point occurs (value in pixels). Defaults to `20`
      * `snapToHorizontalCenter` Boolean - If enabled a sprite's center snaps to the horizontal line through the center of the edited image. Defaults to `true`
      * `snapToVerticalCenter` Boolean - If enabled a sprite's center snaps to the vertical line through the center of the edited image. Defaults to `true`
      * `snapToLeft` Number or null - The left side of a sprite's bounding box snaps to a vertical line which is shifted by this value rom the left side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
      * `snapToRight` Number or null - The right side of a sprite's bounding box snaps to a vertical line which is shifted by this value rom the right side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
      * `snapToTop` Number or null - The top side of a sprite's bounding box snaps to a vertical line which is shifted by this value rom the top side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
      * `snapToBottom` Number or null - The bottom side of a sprite's bounding box snaps to a vertical line which is shifted by this value rom the bottom side of the edited image towards its center. This value is measured in normalized coordinates relative to the smaller side of the edited image.  If this value is explicitly set to `null` this snapping line is disabled. Defaults to `0.1`
    * `rotation` Object - Snapping options for rotating sprites
      * `enabled` Boolean - Whether sprites should snap to specific orientations during rotation interactions. Defaults to `true`
      * `threshold` Number - This threshold defines the arc length of a rotation gesture where snapping at a snap angle occurs (value in pixels). Defaults to `20`
      * `angles` Number - Enabled snapping angles in degrees for rotating a sprite. The rotation angle is defined clockwise. Defaults to `[0, 45, 90, 135, 180, 225, 270, 315]`
  * `export` Object - Export configuration if the editor supports image editing
    * `image` Object - Image export configuration if the editor supports image editing
      * `format` String - The mime type of the exported image. Defaults to `image/png`. Available formats vary by browser.
      * `exportType` PhotoEditorSDK.RenderType - Specifies the export type (image or data url)
      * `quality` Number - The compression quality to use when creating the output image with a lossy file format, Defaults to 0.8
      * `enableDownload` Boolean - Should a export download the image?. Defaults to `true`

  * `library` Object - Configuration options for tool library Refer to the [library]({{ site.baseurl }}/quickstartsguides/html5/v4/features/library) documentation more options.
  * `filter` Object - Configuration options for tool filter. Refer to the [filter]({{ site.baseurl }}/quickstartsguides/html5/v4/features/filters) documentation for available categories and their items.
  * `focus` Object - Configuration options for tool focus. Refer to the [focus]({{ site.baseurl }}/quickstartsguides/html5/v4/features/focus) documentation for available items.
  * `adjustment` Object - Configuration options for tool adjustment. Refer to the [adjustment]({{ site.baseurl }}/quickstartsguides/html5/v4/features/adjustment) documentation for available categories and their items.
  * `overlay` Object - Configuration options for tool overlay. Refer to the [overlay]({{ site.baseurl }}/quickstartsguides/html5/v4/features/overlays) documentation for available items.
  * `frame` Object - Configuration options for tool frame. Refer to the [frame]({{ site.baseurl }}/quickstartsguides/html5/v4/features/frames) documentation for available items.
  * `sticker` Object - Configuration options for tool sticker. Refer to the [sticker]({{ site.baseurl }}/quickstartsguides/html5/v4/features/stickers) documentation for available categories and their items.
  * `text` Object - Configuration options for tool text. Refer to the [text]({{ site.baseurl }}/quickstartsguides/html5/v4/features/text) documentation for available items.
  * `textdesign` Object - Configuration options for tool textdesign. Refer to the [textdesign]({{ site.baseurl }}/quickstartsguides/html5/v4/features/textdesign) documentation for available items.
  * `transform` Object - Configuration options for tool transform. Refer to the [transform]({{ site.baseurl }}/quickstartsguides/html5/v4/features/transform) documentation for available categories and their items.

  * `custom` Object - Customization options. For a detailed overview refer to the [customizations]()
    * `languages` Object - Language labeling options to change the user interface appearance. This allows to alter predefined existing theme presents or to create new themes which can be enabled when their corresponding key (name), for example: { de: { filter: { controls: { buttonReset: 'Zurücksetzen' } } } }
    * `theme` Object - Theming options to change the user interface appearance. This allows to alter predefined existing theme presents or to create new themes which can be enabled when their corresponding key (name), for example:  { dark: { toolControlBar: { border: '#FFFFFF' } } }
    * `components` Object - Custom react components that will be rendered instead of current components
      * `categoryCard` React Component - categoryCard will have following props to be taken care of `image`, `label`, `isActive`, `onClick` (the user will just have to place it on the element you want to react to) and `key` (react component key)
      * `itemCard` React Component - itemCard will have following props to be taken care of `image`, `label`, `isActive`, `onClick` (the user will just have to place it on the element you want to react to) and `key` (react component key)
      * `toolbarItem` React Component - toolbarItem will have following props to be taken care of `icon`, `label`, `isActive`, `onClick` (the user will just have to place it on the element you want to react to) and `key` (react component key)
      * `loader` React Component - loader will have following props to be taken care of `show`
      * `buttons` Object - each button will have following props to be taken care of `icon`, `label`, `isDisabled`, `onClick` (the user will just have to place it on the element you want to react to) and `key` (react component key)
        * `canvasUndo` React Component
        * `canvasRedo` React Component
        * `canvasExport` React Component
        * `canvasClose` React Component
        * `canvasActionEdit` React Component
        * `canvasActionBringToFront` React Component
        * `canvasActionDuplicate` React Component
        * `canvasActionDelete` React Component
        * `canvasActionInvert` React Component
        * `canvasActionFlip` React Component


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_tabbed_block.html snippets=snippets identifier=identifier %}
