---
layout: guides/content
title: &title Localization
description: The PhotoEditor SDK for HTML5 can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.

menuitem: *title
order: 0
platform: html5
version: v4-ReactUI
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


International web applications have international users. That's why we allow you to easily add custom
languages to our UI by passing them using the `extensions.languages` object. The `language` option
specifies the language that the UI should use.

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  extensions: {
    languages: {
      es: spanishLanguageObject
    }
  },
  language: 'es'
})
```

The language objects should have the same structure as our default languages. Here is the English
language object as an example:

```json
{
  "controls": {
    "overview": {
      "filters": "Filters",
      "adjustments": "Adjust",
      "transform": "Transform",
      "focus": "Focus",
      "frame": "Frame",
      "sticker": "Sticker",
      "text": "Text",
      "brush": "Brush",
      "selective-blur": "Selective Blur"
    },
    "text": {
      "foreground": "Foreground",
      "background": "Background",
      "size": "Size",
      "font": "Font",
      "alignment": "Alignment",
      "takeToFront": "To Front",
      "defaultText": "Double-click to edit"
    },
    "adjustments": {
      "brightness": "Brightness",
      "contrast": "Contrast",
      "saturation": "Saturation",
      "exposure": "Exposure",
      "gamma": "Gamma",
      "shadows": "Shadows",
      "highlights": "Highlights",
      "clarity" : "Clarity"
    },
    "transform": {
      "none": "Original",
      "rotation": "Rotation"
    },
    "focus": {
      "none": "None",
      "radial": "Radial",
      "mirrored": "Mirrored",
      "blurRadius": "Blur radius"
    },
    "selectiveBlur": {
      "blurRadius": "Blur radius",
      "size": "Size"
    },
    "filter": {
      "intensity": "Intensity",
      "filters": {
        "identity": "None"
      }
    },
    "sticker": {
      "flip": "Flip",
      "flip-v": "Flip (V)",
      "flip-h": "Flip (H)",
      "takeToFront": "To Front",
      "categories": {
        "all": "All"
      }
    },
    "brush": {
      "size": "Size",
      "color": "Color"
    },
    "frame": {
      "noFrame": "No Frame",
      "scale": "Scale"
    }
  },
  "webcam": {
    "headline": "Take a photo!"
  },
  "editor": {
    "headline": "Edit Photo",
    "new": "New",
    "backgroundImage": "Background Image",
    "undo": "Undo",
    "export": "Export",
    "zoom": "Zoom"
  },
  "splash": {
    "upload": {
      "button": "Upload your image",
      "description": "Upload a picture from your library or just drag and drop"
    },
    "webcam": {
      "headline": "Webcam",
      "description": "Take a picture with your webcam or phone"
    },
    "photoRoll": {
      "headline": "Free stock footage",
      "description": "Select from thousands of Free Stock Photos"
    }
  },
  "photoRoll": {
    "search": {
      "placeholder": "Search for photos",
      "noSearchResults": "Sorry, but we couldn't find any photos for <strong>\"${query}\"</strong>.",
      "results": {
        "headline": "Search results for \"${query}\""
      }
    }
  },
  "generic": {
    "back": "Back",
    "cancel": "Cancel",
    "color": "Color"
  },
  "loading": {
    "resizing": "Resizing...",
    "exporting": "Exporting...",
    "loading": "Loading..."
  },
  "warnings": {
    "imageResized_maxMegaPixels": {
      "title": "Image resized",
      "text": "Your image exceeds the maximum size of ${maxMegaPixels} megapixels and has therefore been resized to ${width}x${height} pixels."
    },
    "imageResized_maxDimensions": {
      "title": "Image resized",
      "text": "Due to hardware limitations your image has been resized to ${width}x${height} pixels."
    }
  },
  "errors": {
    "imageLoadFail": {
      "title": "Failed to load image",
      "text": "Failed to load the image at ${path}"
    },
    "webcamUnavailable": {
      "title": "Webcam unavailable",
      "text": "Unable to display webcam image (Error: ${error})"
    },
    "webcamNotSupported": {
      "title": "Webcam not supported",
      "text": "The webcam feature is not supported by your browser."
    },
    "renderingError": {
      "title": "Error while rendering",
      "text": "An error has occurred while rendering the image."
    },
    "context_lost": {
      "title": "An error has occurred",
      "text": "Your browser took too long to render the image. Please try applying less operations."
    },
    "context_lost_limit": {
      "title": "An error has occurred",
      "text": "Your browser failed multiple times while rendering the image."
    },
    "loadingStickersFailed": {
      "title": "Failed to load stickers"
    },
    "loadingFontsFailed": {
      "title": "Failed to load fonts",
      "text": "Some fonts might not be available."
    },
    "photoRollLoadFail": {
      "title": "Failed to load Photo Roll",
      "text": "Failed to load photos for the photo roll: ${error}"
    },
    "invalidFileType": {
      "text": "The file type ${fileType} is not supported."
    },
    "title": "An error has occurred"
  }
}
```
