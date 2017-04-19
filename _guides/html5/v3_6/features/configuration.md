---
layout: guides/html5/v3_6/content
title: &title Configuration # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - html5
version:
  - v3_6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
# Configuration

You can easily configure the editor to disable specific tools, hide buttons etc. by adding properties
to the `options` object passed to the UI:

  * `container` DOMElement - The element the editor should be rendered to.
  * `apiKey` String - Your API key (Required)
  * `title` String - The text in the title bar. Can only be changed by licensed developers.
  * `language` String - The UI language. Defaults to `en`. Available are `en` and `de`.
  * `logLevel` String - `trace`, `info`, `warn`, `error` or `log`. Defaults to `warn`.
  * `enableUpload` Boolean - Enables photo upload. Defaults to `true`.
  * `enableWebcam` Boolean - Enables webcam support. Defaults to `true` on desktop devices, `false` on mobile devices (mobile devices handle camera upload via the default upload functionality)
  * `showCloseButton` Boolean - Should the close button be displayed? Defaults to `false`. If set to
    true, the editor will emit a `close` event when the user clicks the close button.
  * `showHeader` Boolean - Should the header be displayed? Defaults to true. Can only be changed by licensed developers.
  * `showTopBar` Boolean - Should the top bar (new / zoom / undo / export) be displayed? Defaults to `true`.
  * `preloader` Boolean - Enables the preloader. Defaults to `true`.

  * `photoRoll` Object
    * `provider` PhotoEditorSDK.UI.ReactUI.PhotoRoll.Provider - The class providing all data for the photo roll.

  * `editor` Object
    * `image` Image - The image that should be loaded and displayed initially.
    * `preferredRenderer` String - Defaults to `webgl`. Available are `webgl` and `canvas`.
    * `pixelRatio` Number - If none is given, the SDK automatically detects the current device's
        pixel ratio.
    * `responsive` Boolean - Should the editor re-render on window resize? Defaults to `false`.
    * `enableDrag` Boolean - Should the image be draggable? Defaults to `true`.
    * `enableZoom` Boolean - Should the image be zoomable? Defaults to `true`.
    * `smoothDownscaling` Boolean - Toggles smooth downscaling of images and sprites. Might have
      a negative impact on performance, therefor default is `false`.
    * `smoothUpscaling` Boolean - Toggles smooth upscaling
    * `tools` Array - The enabled tools. Available are: `crop`, `filter`,
      `brightness`, `saturation`, `contrast`, `gamma`, `clarity`, `exposure`, `shadows`, `highlights`,
      `text`, `sticker`, `brush`, `selective-blur`, `radial-blur`, `tilt-shift` and `border`
    * `controlsOrder` Array - The order in which the controls are displayed. Available are `crop`,
        `orientation`, `filter`, `adjustments`, `text`, `sticker`, `brush`, `focus`, `selective-blur`, `border`. Can
        be grouped in arrays which will be displayed with separators.
    * `operationsOrder` Array - The order in which operations are added to the stack. Changing
        this may have a negative impact on performance.
    * `controlsOptions` Object - Objects passed to the controls. See [the documentation](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.UI.NightReact.Controls.html) for available controls and their options.
    * `maxMegaPixels` Object - Specifies the maximum amount of megapixels per device type
      * `desktop` Number - Defaults to 10
      * `mobile` Number - Defaults to 5
    * `export` Object
      * `showButton` Boolean - Should the export button be visible? Defaults to `true`.
      * `format` String - The mime type of the exported image. Defaults to `image/png`. Available
        formats vary by browser.
      * `type` PhotoEditorSDK.RenderType - Specifies the export type (image or data url)
      * `download` Boolean - Should a download dialog be displayed on export?
  * `assets` Object
    * `baseUrl` String - The base URL for all assets. Should be the absolute path to your
        `assets` directory. Defaults to `assets`
    * `resolver` Function - A function that gets called for every asset. Can turn an asset
      path into another path. Useful for stuff like Rails' asset pipeline.



