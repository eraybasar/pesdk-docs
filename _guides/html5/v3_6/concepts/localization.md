---
layout: guides/html5/v3_6/content
title: &title Localization # title as shown in the menu and 

menuitem: *title
order: 0
platform: html5
version: v3_6
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Localization

International web applications have international users. That's why we allow you to easily add custom
languages to our UI by passing them using the `extensions.languages` object. The `language` option
specifies the language that the UI should use.

```js
const editor = new PhotoEditorSDK.UI.NightReact({
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
      "orientation": "Orientation",
      "adjustments": "Adjust",
      "crop": "Crop",
      "focus": "Focus",
      "border": "Border",
      "sticker": "Sticker",
      "text": "Text",
      "brush": "Brush"
    },
    "border": {
      "color": "Color",
      "thickness": "Thickness"
    },
    "text": {
      "foreground": "Foreground",
      "background": "Background",
      "size": "Size",
      "font": "Font",
      "alignment": "Alignment",
      "takeToFront": "To Front"
    },
    "orientation": {
      "rotate-l": "Rotate -90°",
      "rotate-r": "Rotate +90°",
      "flip-h": "Flip (H)",
      "flip-v": "Flip (V)"
    },
    "adjustments": {
      "brightness": "Brightness",
      "contrast": "Contrast",
      "saturation": "Saturation",
      "exposure": "Exposure",
      "shadows": "Shadows",
      "highlights": "Highlights",
      "clarity" : "Clarity"
    },
    "crop": {
      "custom": "Custom",
      "square": "Square",
      "4-3": "4:3",
      "16-9": "16:9"
    },
    "focus": {
      "radial": "Radial",
      "linear": "Linear",
      "blurRadius": "Blur radius"
    },
    "filters": {
      "intensity": "Intensity",
      "categories": {
        "all": "All",
        "retro": "Retro",
        "bw": "Black & White",
        "summer": "Summer",
        "winter": "Winter",
        "special": "Special"
      }
    },
    "sticker": {
      "brightness": "Brightness",
      "contrast": "Contrast",
      "saturation": "Saturation",
      "blur": "Blur",
      "flip": "Flip",
      "flip-v": "Flip (V)",
      "flip-h": "Flip (H)",
      "takeToFront": "To Front",
      "categories": {
        "all": "All",
        "glasses": "Glasses",
        "hats": "Hats",
        "beards": "Beards",
        "misc": "Misc"
      }
    },
    "brush": {
      "thickness": "Thickness",
      "color": "Color"
    }
  },
  "webcam": {
    "headline": "Take a photo!"
  },
  "editor": {
    "headline": "Edit Photo",
    "new": "New",
    "photo-roll": "Photo Roll",
    "undo": "Undo",
    "export": "Export"
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
    "photo-roll": {
      "headline": "Free stock footage",
      "description": "Select from thousands of Free Stock Photos"
    }
  },
  "photo-roll": {
    "search": {
      "placeholder": "Search for photos",
      "results": {
        "headline": "Search results for ${query}"
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
    }
  }
}
```
