---
layout: guides/content
title: &title Configuration
description: The PhotoEditor SDK for HTML5 can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: Configuration
order: 2
platform: html5
version: v4
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

<!--Check PhotoEditorDesktopUI.js in the sourcecode -->

You can easily configure the editor to disable specific tools, hide buttons etc. by adding properties
to the `options` object passed to the UI:

{% capture first_snippet %}
DesktopUI
---

  * `license` String - Your license (Required)
  * `container` DOMElement - The element the editor should be rendered to.
  * `language` String - The UI language. Defaults to `en`. Available are `en` and `de`.
  * `logLevel` String - `trace`, `info`, `warn`, `error` or `log`. Defaults to `warn`.
  * `responsive` Boolean - Specifies whether the editor should react to window resizing.
  * `preloader` Boolean - Enables the preloader. Defaults to `true`.
  *  `crossOrigin` - Sets the global crossOrigin loading mode. Values: 'anonymous', 'use-credentials' or 'none'


  * `assets` Object
    * `baseUrl` String - The base URL for all assets. Should be the absolute path to your `assets` directory. Defaults to `assets`
    * `resolver` Function - A function that gets called for every asset. Can turn an asset path into another path. Useful for stuff like Rails' asset pipeline.

  * `editor` Object
    * `image` Image - The image that should be loaded and displayed initially.
    * `pixelRatio` Number - If none is given, the SDK automatically detects the current device's pixel ratio.
    * `preferredRenderer` String - Defaults to `webgl`. Available are `webgl` and `canvas`.
    * `forceCrop` - If true, the editor will launch to the transform tool for cropping, before any other tool is allowed.
    * `transparent` Boolean - If true, allows replacing the background color of the editor with a color defined by the `clearColor` options
    * `clearColor` Array, String or PhotoEditorSDK.Color - The color used to clear the canvas when `transparent` is set to true
    * `displayCloseButton` Boolean - Should a close button be displayed? If set to `true`, the `DesktopUI` instance will emit a `close` event when the button is clicked
    * `displayResizeMessage` Boolean - Should a message be displayed when the image has been scaled down for performance reasons. Defaults to `true`.
    * `maxMegaPixels` Object - Specifies the maximum amount of megapixels per device type
      * `desktop` Number - Defaults to 10
      * `mobile` Number - Defaults to 5
    * `enableDrag` Boolean - Should the image be draggable? Defaults to `true`.
    * `enableZoom` Boolean - Should the image be zoomable? Defaults to `true`.
    * `enablePositionSnapping` - Should snapping be enabled when positioning sprites? Defaults to `true`
    * `enableRotationSnapping` - Should snapping be enabled when rotating sprites? Defaults to `true`
    * `enableExport` Boolean - Should the export button be displayed? Defaults to `true`. If set to `false`, export is still available via the API.
    * `smoothDownscaling` Boolean - Toggles smooth downscaling of images and sprites. Might have a negative impact on performance, therefor default is `false`.
    * `tools` Array - The enabled tools. Available are: `transform`, `filter`, `adjustments`, `focus`, `text`, `textdesign`, `sticker`, `brush`, `frame` and `overlay`
    * `defaultControl` String - The tool that is initially loaded. Defaults to `filter`.
    * `controlsOrder` Array - The order in which the controls are displayed. Available are `library`, `transform`, `filter`, `adjustments`, `focus`, `text`, `textdesign`, `sticker`, `brush`, `frame` and `overlay`. Can be grouped in arrays which will be displayed with separators.
    * `operationsOrder` Array - The order in which operations are added to the stack. Changing this may have a negative impact on performance.
    * `controlsOptions` Object - Objects passed to the controls. See [the documentation](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.Controls.html) for available controls and their options.
    * `snappingOptions` Object - Options that control the snapping behaviour of sprites.
      * `position` Object - Options that control the positional snapping of sprites
        * `threshold` Number - At which threshold should sprites snap to the canvas snapping guides? (value in pixels). Defaults to 20
        * `padding` Object - Defines the inset between the canvas frame and the corresponding snapping guides. The values are specified relative to the smaller side of the image. Setting `left`, `right`, `top` and `bottom` to 0 allows sprites to snap to the edges of the canvas.
          * `left` Number - Defaults to 0.1
          * `right` Number - Defaults to 0.1
          * `top` Number - Defaults to 0.1
          * `bottom` Number - Defaults to 0.1
      * `rotation` Object - Options that control the rotational snapping of sprites
        * `angles` Array - Angles to snap to while rotating a sprite. Defaults to `[0, 45, 90, 135, 180, 225, 270, 315]`
        * `threshold` Number - At which threshold should the sprites snap to the next rotation snap point (value in pixels)

    * `export` Object
      * `format` String - The mime type of the exported image. Defaults to `image/png`. Available formats vary by browser.
      * `type` PhotoEditorSDK.RenderType - Specifies the export type (image or data url)
      * `download` Boolean - Should a download dialog be displayed on export?
      * `fileBasename` String - The base file name, defaults to `photoeditorsdk-export`
      * `quality` Number - JPEG quality, defaults to 0.8
{% endcapture %}

{% capture second_snippet %}
ReactUI
---

  * `license` String - Your license (Required)
  * `container` DOMElement - The element the editor should be rendered to.
  * `title` String - The text in the title bar
  * `language` String - The UI language. Defaults to `en`. Available are `en` and `de`.
  * `logLevel` String - `trace`, `info`, `warn`, `error` or `log`. Defaults to `warn`.
  * `enableUpload` Boolean - Enables photo upload. Defaults to `true`.
  * `enableWebcam` Boolean - Enables webcam support. Defaults to `true` on desktop devices, `false` on mobile devices (mobile devices handle camera upload via the default upload functionality)
  * `showCloseButton` Boolean - Should the close button be displayed? Defaults to `false`. If set to
    true, the editor will emit a `close` event when the user clicks the close button.
  * `showHeader` Boolean - Should the header be displayed? Defaults to true. Can only be changed by licensed developers.
  * `showTopBar` Boolean - Should the top bar (new / zoom / undo / export) be displayed? Defaults to `true`.
  * `preloader` Boolean - Enables the preloader. Defaults to `true`.
  * `watermarkImage` Image - An image that should be placed on top as a watermark. Defaults to `undefined`.
  *  `crossOrigin` - Sets the global crossOrigin loading mode. Values: 'anonymous', 'use-credentials' or 'none'

  * `photoRoll` Object
    * `provider` PhotoEditorSDK.UI.ReactUI.PhotoRoll.Provider - The class providing all data for the photo roll.

  * `editor` Object
    * `image` Image - The image that should be loaded and displayed initially.
    * `displayResizeMessage` Boolean - Should a message be displayed when the image has been scaled down for performance reasons. Defaults to `true`.
    * `preferredRenderer` String - Defaults to `webgl`. Available are `webgl` and `canvas`.
    * `forceCrop` - If true, the editor will launch to the transform tool for cropping, before any other tool is allowed.
    * `pixelRatio` Number - If none is given, the SDK automatically detects the current device's pixel ratio.
    * `responsive` Boolean - Should the editor re-render on window resize? Defaults to `false`.
    * `enableDrag` Boolean - Should the image be draggable? Defaults to `true`.
    * `enableZoom` Boolean - Should the image be zoomable? Defaults to `true`.
    * `smoothDownscaling` Boolean - Toggles smooth downscaling of images and sprites. Might have a negative impact on performance, therefor default is `false`.
    * `smoothUpscaling` Boolean - Toggles smooth upscaling
    * `tools` Array - The enabled tools. Available are: `transform`, `rotation`, `flip`, `filter`, `brightness`, `saturation`, `gamma`, `contrast`, `clarity`, `exposure`, `shadows`, `highlights`, `text`, `sticker`, `brush`, `selective-blur`, `radial-focus`, `mirrored-focus`, `frame`
    * `controlsOrder` Array - The order in which the controls are displayed. Available are `transform`, `filter`, `adjustments`, `text`, `sticker`, `brush`, `focus`, `frame`. Can be grouped in arrays which will be displayed with separators.
    * `operationsOrder` Array - The order in which operations are added to the stack. Changing this may have a negative impact on performance.
    * `controlsOptions` Object - Objects passed to the controls. See [the documentation](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.Controls.html) for available controls and their options.
    * `maxMegaPixels` Object - Specifies the maximum amount of megapixels per device type
      * `desktop` Number - Defaults to 10
      * `mobile` Number - Defaults to 5
    * `export` Object
      * `showButton` Boolean - Should the export button be visible? Defaults to `true`.
      * `format` String - The mime type of the exported image. Defaults to `image/png`. Available formats vary by browser.
      * `type` PhotoEditorSDK.RenderType - Specifies the export type (image or data url)
      * `download` Boolean - Should a download dialog be displayed on export?
  * `assets` Object
    * `baseUrl` String - The base URL for all assets. Should be the absolute path to your `assets` directory. Defaults to `assets`
    * `resolver` Function - A function that gets called for every asset. Can turn an asset path into another path. Useful for stuff like Rails' asset pipeline.
    {% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_tabbed_block.html snippets=snippets identifier=identifier %}
