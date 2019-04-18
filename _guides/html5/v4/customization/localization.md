---
layout: guides/content
title: &title Localization
description: The PhotoEditor SDK for HTML5 can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.

menuitem: *title
order: 0
platform: html5
version: v4
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

International web applications have international users. That's why our editor is already available in English (EN) and German (DE) and you can easily switch languages by adding the `language` String (Defaults to `en`) property to the `options` object passed to the UI. Check the [configuration section](https://docs.photoeditorsdk.com/guides/html5/v4/introduction/configuration) for further information. To add custom languages to our UI, you can pass them using the `extensions.languages` object. The `language` option
specifies the language that the UI should use.


{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  extensions: {
    languages: {
      es: spanishLanguageObject
    }
  },
  language: 'es'
})
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
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
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

The language objects should have the same structure as our default languages. You'll find the Engligh language object at the bottom of the page. 

## Changing Button Texts

You can also use the localization feature to simply change the button text with any word (can be the same language). In this case you don't even have to supply the entire language object. It is enough to overwrite the words you want to change. 

### Example
Changing the export button to say "Save" instead of "Export":

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  extensions: {
    languages: {
      en: {
        "pesdk": {
          "editor": {
            "button": {
              "export": "Save"
            }
          }
        }
      }
    }
  }
})
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  extensions: {
    languages: {
      en: {
        "pesdk": {
          "editor": {
            "button": {
              "export": "Save"
            }
          }
        }
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Complete Language Object

{% capture first_snippet %}
DesktopUI
---
```json
{
  "pesdk": {
    "common": {
      "title": {
        "error": "Error"
      },
      "text": {
        "loading": "Loading...",
        "updating": "Updating..."
      },
      "button": {
        "cancel": "Cancel"
      }
    },
    "editor": {
      "button": {
        "export": "Export",
        "save": "Save",
        "load": "Load",
        "close": "Close",
        "newImageChangesLostWarningYes": "Yes",
        "newImageChangesLostWarningNo": "No",
        "discardChangesWarningKeep": "Keep changes",
        "discardChangesWarningDiscard": "Discard changes"
      },
      "title": {
        "newImageChangesLostWarning": "New Image",
        "imageResizedWarning_maxMegaPixels": "Image resized",
        "imageResizedWarning_maxDimensions": "Image resized",
        "fontLoadingError": "Failed to load font",
        "discardChangesWarning": "Discard changes?"
      },
      "text": {
        "newImageChangesLostWarning": "Any unsaved changes will be lost. Continue?",
        "imageResizedWarning_maxMegaPixels": "Your image exceeds the maximum size of ${maxMegaPixels} megapixels and has therefore been resized to ${width}x${height} pixels.",
        "imageResizedWarning_maxDimensions": "Due to hardware limitations your image has been resized to ${width}x${height} pixels.",
        "renderingError": "An error has occurred while rendering the image.",
        "exporting": "Exporting...",
        "saving": "Saving...",
        "loading": "Loading...",
        "resizing": "Resizing...",
        "loadingFonts": "Loading fonts...",
        "fontLoadingError": "The following fonts could not be loaded: ${fonts}.",
        "webcamUnavailableError": "Unable to display webcam image (Error: ${error})",
        "invalidFileTypeError": "The file type ${fileType} is not supported.",
        "imageLoadingError": "Failed to load image. This can have multiple reasons, e.g. the file is corrupted or the file type is not supported.",
        "discardChangesWarning": "You have unsaved changes. Are you sure you want to discard the changes?"
      }
    },
    "library": {
      "title": {
        "name": "Library"
      },
      "button": {
        "fileDropZone": "Drag image here or click to browse for one.",
        "fileDropZoneHovered": "Drop to upload."
      },
      "placeholder": {
        "search": "Search Library"
      },
      "text": {
        "noResults": "No results"
      }
    },
    "transform": {
      "title": {
        "name": "Transform"
      },
      "dimensions": {
        "lock": "Lock Resolution"
      },
      "button": {
        "reset": "Reset Default"
      },
      "asset": {
        "imgly_transforms_common": {
          "name": "Common Crops",
          "asset": {
            "imgly_transform_common_custom": "Custom",
            "imgly_transform_common_square": "Square",
            "imgly_transform_common_4-3": "4:3",
            "imgly_transform_common_16-9": "16:9"
          }
        },
        "imgly_transforms_facebook": {
          "name": "Facebook",
          "asset": {
            "imgly_transform_facebook_ad": "Ad",
            "imgly_transform_facebook_post": "Post",
            "imgly_transform_facebook_cover": "Cover",
            "imgly_transform_facebook_profile": "Profile Pic"
          }
        }
      },
      "placeholder": {
        "width": "w",
        "height": "h"
      }
    },
    "filter": {
      "asset": {
        "identity": "None",
        "imgly_lut_celsius": "Inferno",
        "imgly_lut_chest": "Chestnut",
        "imgly_lut_fixie": "Fixie",
        "imgly_lut_fridge": "Fridge",
        "imgly_lut_front": "Sunny 70s",
        "imgly_lut_k2": "Flat Black",
        "imgly_lut_mellow": "Mellow",
        "imgly_lut_sin": "Hard Stuff",
        "imgly_lut_texas": "Oltdtimer",
        "imgly_lut_ad1920": "1920 A.D.",
        "imgly_lut_ancient": "Ancient",
        "imgly_lut_bleached": "Kalmen",
        "imgly_lut_bleachedblue": "Bleached Blue",
        "imgly_lut_blues": "Polaroid",
        "imgly_lut_blueshadows": "Zephyr",
        "imgly_lut_breeze": "Levante",
        "imgly_lut_bw": "Black & White",
        "imgly_lut_classic": "Classic",
        "imgly_lut_colorful": "Colorful",
        "imgly_lut_cool": "Snappy",
        "imgly_lut_cottoncandy": "Cotton Candy",
        "imgly_lut_creamy": "Creamy",
        "imgly_lut_eighties": "Low Fire",
        "imgly_lut_elder": "Colla",
        "imgly_lut_evening": "Sunrise",
        "imgly_lut_fall": "Moss",
        "imgly_lut_food": "Food",
        "imgly_lut_glam": "Glam",
        "imgly_lut_gobblin": "Gobblin",
        "imgly_lut_highcarb": "High Carb",
        "imgly_lut_highcontrast": "High Contrast",
        "imgly_lut_k1": "K1",
        "imgly_lut_k6": "K6",
        "imgly_lut_kdynamic": "pebble",
        "imgly_lut_keen": "Keen",
        "imgly_lut_lenin": "Lemon",
        "imgly_lut_litho": "Litho",
        "imgly_lut_lomo100": "Lomo 100",
        "imgly_lut_lucid": "Lucid",
        "imgly_lut_neat": "Neat",
        "imgly_lut_nogreen": "Pumpkin",
        "imgly_lut_orchid": "Solanus",
        "imgly_lut_pale": "Pale",
        "imgly_lut_pitched": "Pitched",
        "imgly_lut_plate": "Wheathered",
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
      },
      "title": {
        "name": "Filters"
      }
    },
    "adjustments": {
      "button": {
        "reset": "Reset Default"
      },
      "title": {
        "name": "Adjust",
        "basics": "Basics",
        "refinements": "Refinements"
      },
      "text": {
        "brightness": "Brightness",
        "saturation": "Saturation",
        "contrast": "Contrast",
        "gamma": "Gamma",
        "clarity": "Clarity",
        "exposure": "Exposure",
        "shadows": "Shadows",
        "highlights": "Highlights",
        "whites" : "Whites",
        "blacks" : "Blacks",
        "temperature" : "Temperature"
      }
    },
    "focus": {
      "title": {
        "name": "Focus"
      },
      "button": {
        "none": "None",
        "radial": "Radial",
        "mirrored": "Mirrored",
        "linear": "Linear",
        "gaussian": "Gaussian"
      }
    },
    "text": {
      "title": {
        "name": "Text",
        "font": "Font",
        "size": "Size",
        "spacing": "Spacing",
        "line": "Line",
        "background": "Background"
      },
      "placeholder": {
        "defaultText": "Double-click to edit!"
      },
      "button": {
        "new": "New Text"
      }
    },
    "textdesign": {
      "title": {
        "name": "Text Design",
        "input": "Text"
      },
      "button": {
        "invert": "Text as mask",
        "new": "New Text Design"
      }
    },
    "sticker": {
      "title": {
        "name": "Stickers",
        "opacity": "Opacity"
      },
      "text": {
        "stickerLoadingError": "Failed to load sticker ${path}."
      },
      "button": {
        "replace": "Replace",
        "new": "New Sticker",
        "fill": "Fill"
      },
      "asset": {
        "imgly_sticker_emoticons": "Emoticons",
        "imgly_sticker_emoticons_alien": "Alien",
        "imgly_sticker_emoticons_angel": "Angel",
        "imgly_sticker_emoticons_angry": "Angry",
        "imgly_sticker_emoticons_anxious": "Anxious",
        "imgly_sticker_emoticons_asleep": "Asleep",
        "imgly_sticker_emoticons_attention": "Attention",
        "imgly_sticker_emoticons_baby_chicken": "Baby Chicken",
        "imgly_sticker_emoticons_batman": "Batman",
        "imgly_sticker_emoticons_beer": "Beer",
        "imgly_sticker_emoticons_black": "Black",
        "imgly_sticker_emoticons_blue": "Blue",
        "imgly_sticker_emoticons_blush": "Blush",
        "imgly_sticker_emoticons_boxer": "Boxer",
        "imgly_sticker_emoticons_business": "Business",
        "imgly_sticker_emoticons_chicken": "Chicken",
        "imgly_sticker_emoticons_cool": "Cool",
        "imgly_sticker_emoticons_cry": "Cry",
        "imgly_sticker_emoticons_deceased": "Deceased",
        "imgly_sticker_emoticons_devil": "Devil",
        "imgly_sticker_emoticons_duckface": "Duckface",
        "imgly_sticker_emoticons_furious": "Furious",
        "imgly_sticker_emoticons_grin": "Grin",
        "imgly_sticker_emoticons_guitar": "Guitar",
        "imgly_sticker_emoticons_harry_potter": "Harry Potter",
        "imgly_sticker_emoticons_hippie": "Hippie",
        "imgly_sticker_emoticons_hitman": "Hitman",
        "imgly_sticker_emoticons_humourous": "Humourous",
        "imgly_sticker_emoticons_idea": "Idea",
        "imgly_sticker_emoticons_impatient": "Impatient",
        "imgly_sticker_emoticons_kiss": "Kiss",
        "imgly_sticker_emoticons_kisses": "Kisses",
        "imgly_sticker_emoticons_laugh": "Laugh",
        "imgly_sticker_emoticons_loud_cry": "Loud Cry",
        "imgly_sticker_emoticons_loving": "Loving",
        "imgly_sticker_emoticons_masked": "Masked",
        "imgly_sticker_emoticons_music": "Music",
        "imgly_sticker_emoticons_nerd": "Nerd",
        "imgly_sticker_emoticons_ninja": "Ninja",
        "imgly_sticker_emoticons_not_speaking_to_you": "Not speaking to you",
        "imgly_sticker_emoticons_pig": "Pig",
        "imgly_sticker_emoticons_pumpkin": "Pumpkin",
        "imgly_sticker_emoticons_question": "Question",
        "imgly_sticker_emoticons_rabbit": "Rabbit",
        "imgly_sticker_emoticons_sad": "Sad",
        "imgly_sticker_emoticons_sick": "Sick",
        "imgly_sticker_emoticons_skateboard": "Skateboard",
        "imgly_sticker_emoticons_skull": "Skull",
        "imgly_sticker_emoticons_sleepy": "Sleepy",
        "imgly_sticker_emoticons_smile": "Smile",
        "imgly_sticker_emoticons_smoking": "Smoking",
        "imgly_sticker_emoticons_sobbing": "Sobbing",
        "imgly_sticker_emoticons_star": "Star",
        "imgly_sticker_emoticons_steaming_furious": "Steaming Furious",
        "imgly_sticker_emoticons_sunbathing": "Sunbathing",
        "imgly_sticker_emoticons_tired": "Tired",
        "imgly_sticker_emoticons_tongue_out_wink": "Tongue out wink",
        "imgly_sticker_emoticons_wave": "Wave",
        "imgly_sticker_emoticons_wide_grin": "Wide Grin",
        "imgly_sticker_emoticons_wink": "Wink",
        "imgly_sticker_emoticons_wrestler": "Wrestler",
        "imgly_sticker_shapes": "Shapes",
        "imgly_sticker_shapes_arrow_02": "Arrow 1",
        "imgly_sticker_shapes_arrow_03": "Arrow 2",
        "imgly_sticker_shapes_badge_01": "Badge 1",
        "imgly_sticker_shapes_badge_11": "Badge 5",
        "imgly_sticker_shapes_badge_12": "Badge 6",
        "imgly_sticker_shapes_badge_13": "Badge 7",
        "imgly_sticker_shapes_badge_15": "Badge 8",
        "imgly_sticker_shapes_badge_18": "Badge 9",
        "imgly_sticker_shapes_badge_19": "Badge 10",
        "imgly_sticker_shapes_badge_20": "Badge 11",
        "imgly_sticker_shapes_badge_28": "Badge 12",
        "imgly_sticker_shapes_badge_32": "Badge 13",
        "imgly_sticker_shapes_badge_35": "Badge 14",
        "imgly_sticker_shapes_badge_36": "Badge 15",
        "imgly_sticker_shapes_badge_04": "Badge 2",
        "imgly_sticker_shapes_badge_06": "Badge 3",
        "imgly_sticker_shapes_badge_08": "Badge 4",
        "imgly_sticker_shapes_spray_01": "Spray 1",
        "imgly_sticker_shapes_spray_03": "Spray 2",
        "imgly_sticker_shapes_spray_04": "Spray 3"
      }
    },
    "brush": {
      "title": {
        "name": "Brush",
        "width": "Width",
        "hardness": "Hardness",
        "settings": "Brush Settings"
      }
    },
    "frame": {
      "title": {
        "name": "Frames",
        "opacity": "Opacity",
        "width": "Width"
      },
      "button": {
        "fill": "Fill",
        "replace": "Replace",
        "none": "None"
      },
      "asset": {
        "imgly_frame_dia": "Dia",
        "imgly_frame_art_decor": "Art Decor",
        "imgly_frame_black_passepartout": "Black Passepartout",
        "imgly_frame_lowpoly_shadow": "Low Poly",
        "imgly_frame_wood_passepartout": "Wood Passepartout"
      }
    },
    "artfilter": {
      "title": {
        "name": "Art Filters"
      },
      "asset": {
        "none": "None",
        "imgly_art_filter_june_tree": "Natasha Wescoat",
        "imgly_art_filter_hive": "Hive",
        "imgly_art_filter_udnie": "Udnie",
        "imgly_art_filter_vince_low": "Vince Low",
        "imgly_art_filter_mosaic": "Mosaic",
        "imgly_art_filter_wave": "Wave",
        "imgly_art_filter_watercolor": "Malikova Darya"
      }
    },
    "overlay": {
      "title": {
        "name": "Overlays",
        "blending": "Blending",
        "none": "None",
        "normal": "Normal",
        "overlay": "Overlay",
        "hardLight": "Hard Light",
        "softLight": "Soft Light",
        "multiply": "Multiply",
        "darken": "Darken",
        "lighten": "Lighten",
        "screen": "Screen",
        "colorBurn": "Color Burn"
      },
      "button": {
        "none": "None"
      },
      "asset": {
        "imgly_overlay_bokeh": "Bokeh",
        "imgly_overlay_chop": "Chop",
        "imgly_overlay_clouds": "Clouds",
        "imgly_overlay_golden": "Golden",
        "imgly_overlay_grain": "Grain",
        "imgly_overlay_hearts": "Hearts",
        "imgly_overlay_lightleak1": "Light Leak 1",
        "imgly_overlay_lightleak2": "Light Leak 2",
        "imgly_overlay_metal": "Metal",
        "imgly_overlay_mosaic": "Mosaic",
        "imgly_overlay_painting": "Painting",
        "imgly_overlay_paper": "Paper",
        "imgly_overlay_rain": "Rain",
        "imgly_overlay_vintage": "Vintage",
        "imgly_overlay_wall1": "Wall",
        "imgly_overlay_wall2": "Wall 2",
        "imgly_overlay_wood": "Wood"
      }
    }
  }
}


```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---

```json
{
  "pesdk": {
    "adjustments": {
      "title": {
        "name": "Adjust"
      },
      "text": {
        "brightness": "Brightness",
        "saturation": "Saturation",
        "contrast": "Contrast",
        "gamma": "Gamma",
        "clarity": "Clarity",
        "exposure": "Exposure",
        "shadows": "Shadows",
        "highlights": "Highlights",
        "whites" : "Whites",
        "blacks" : "Blacks",
        "temperature" : "Temperature"
      }
    },
    "brush": {
      "title": {
        "name": "Brush"
      },
      "text": {
        "size": "Size"
      }
    },
    "camera": {
      "title": {
        "headline": "Take a photo!"
      },
      "text": {
        "webcamUnavailable": "Unable to display webcam image (Error: ${error})"
      }
    },
    "common": {
      "title": {
        "error": "An error has occurred",
        "imageLoadFail": "Failed to load image"
      },
      "text": {
        "color": "Color",
        "loading": "Loading...",
        "imageLoadFail": "Failed to load the image at ${path}"
      },
      "button": {
        "back": "Back",
        "cancel": "Cancel"
      }
    },
    "editor": {
      "title": {
        "zoom": "Zoom",
        "renderingError": "Error while rendering",
        "imageResized_maxMegaPixels": "Image resized",
        "imageResized_maxDimensions": "Image resized"
      },
      "button": {
        "export": "Export",
        "backgroundImage": "Background Image",
        "new": "New",
        "undo": "Undo"
      },
      "text": {
        "invalidFileType": "The file type ${fileType} is not supported.",
        "exporting": "Exporting...",
        "renderingError": "An error has occurred while rendering the image.",
        "resizing": "Resizing...",
        "imageResized_maxMegaPixels": "Your image exceeds the maximum size of ${maxMegaPixels} megapixels and has therefore been resized to ${width}x${height} pixels.",
        "imageResized_maxDimensions": "Due to hardware limitations your image has been resized to ${width}x${height} pixels."
      }
    },
    "filter": {
      "title": {
        "name": "Filters"
      },
      "text": {
        "intensity": "Intensity"
      },
      "asset": {
        "identity": "None",
        "imgly_lut_celsius": "Inferno",
        "imgly_lut_chest": "Chestnut",
        "imgly_lut_fixie": "Fixie",
        "imgly_lut_fridge": "Fridge",
        "imgly_lut_front": "Sunny 70s",
        "imgly_lut_k2": "Flat Black",
        "imgly_lut_mellow": "Mellow",
        "imgly_lut_sin": "Hard Stuff",
        "imgly_lut_texas": "Oltdtimer",
        "imgly_lut_ad1920": "1920 A.D.",
        "imgly_lut_ancient": "Ancient",
        "imgly_lut_bleached": "Kalmen",
        "imgly_lut_bleachedblue": "Bleached Blue",
        "imgly_lut_blues": "Polaroid",
        "imgly_lut_blueshadows": "Zephyr",
        "imgly_lut_breeze": "Levante",
        "imgly_lut_bw": "Black & White",
        "imgly_lut_classic": "Classic",
        "imgly_lut_colorful": "Colorful",
        "imgly_lut_cool": "Snappy",
        "imgly_lut_cottoncandy": "Cotton Candy",
        "imgly_lut_creamy": "Creamy",
        "imgly_lut_eighties": "Low Fire",
        "imgly_lut_elder": "Colla",
        "imgly_lut_evening": "Sunrise",
        "imgly_lut_fall": "Moss",
        "imgly_lut_food": "Food",
        "imgly_lut_glam": "Glam",
        "imgly_lut_gobblin": "Gobblin",
        "imgly_lut_highcarb": "High Carb",
        "imgly_lut_highcontrast": "High Contrast",
        "imgly_lut_k1": "K1",
        "imgly_lut_k6": "K6",
        "imgly_lut_kdynamic": "pebble",
        "imgly_lut_keen": "Keen",
        "imgly_lut_lenin": "Lemon",
        "imgly_lut_litho": "Litho",
        "imgly_lut_lomo100": "Lomo 100",
        "imgly_lut_lucid": "Lucid",
        "imgly_lut_neat": "Neat",
        "imgly_lut_nogreen": "Pumpkin",
        "imgly_lut_orchid": "Solanus",
        "imgly_lut_pale": "Pale",
        "imgly_lut_pitched": "Pitched",
        "imgly_lut_plate": "Wheathered",
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
        "imgly_duotone_sunset": "Sunset",
        "imgly_filters_analog": "Analog",
        "imgly_filters_bw": "Black & White",
        "imgly_filters_retro": "Retro",
        "imgly_filters_special": "Special",
        "imgly_filters_summer": "Summer",
        "imgly_filters_winter": "Winter",
        "imgly_filters_legacy": "Legacy",
        "all": "All"
      }
    },
    "focus": {
      "title": {
        "name": "Focus"
      },
      "text": {
        "blurRadius": "Blur radius"
      },
      "button": {
        "none": "None",
        "radial": "Radial",
        "mirrored": "Mirrored"
      }
    },
    "frame": {
      "title": {
        "name": "Frame"
      },
      "text": {
        "scale": "Scale"
      },
      "button": {
        "none": "None"
      },
      "asset": {
        "imgly_frame_dia": "Dia",
        "imgly_frame_art_decor": "Art Decor",
        "imgly_frame_black_passepartout": "Black Passepartout",
        "imgly_frame_lowpoly_shadow": "Low Poly",
        "imgly_frame_wood_passepartout": "Wood Passepartout"
      }
    },
    "library": {
      "title": {
        "searchResults": "Search results for \"${query}\"",
        "photoRollLoadFail": "Failed to load Photo Roll"
      },
      "text": {
        "photoRollLoadFail": "Failed to load photos for the photo roll: ${error}",
        "noSearchResults": "Sorry, but we couldn't find any photos for <strong>\"${query}\"</strong>."
      },
      "placeholder": {
        "search": "Search for photos"
      }
    },
    "splash": {
      "button": {
        "upload": "Upload your image"
      },
      "title": {
        "photoRoll": "Free stock footage",
        "webcam": "Webcam"
      },
      "text": {
        "photoRoll": "Select from thousands of Free Stock Photos",
        "upload": "Upload a picture from your library or just drag and drop",
        "webcam": "Take a picture with your webcam or phone"
      }
    },
    "sticker": {
      "title": {
        "name": "Sticker",
        "loadingStickersFailed": "Failed to load stickers"
      },
      "asset": {
        "all": "All",
        "imgly_sticker_emoticons": "Emoticons",
        "imgly_sticker_shapes": "Shapes"
      }
    },
    "text": {
      "title": {
        "name": "Text",
        "loadingFontsFailed": "Failed to load fonts"
      },
      "text": {
        "loadingFontsFailed": "Some fonts might not be available."
      },
      "button": {
        "size": "Size",
        "font": "Font",
        "alignment": "Alignment",
        "foreground": "Foreground",
        "background": "Background",
        "takeToFront": "To Front"
      },
      "placeholder": {
        "defaultText": "Double-click to edit"
      }
    },
    "transform": {
      "title": {
        "name": "Transform"
      },
      "button": {
        "none": "Original"
      },
      "text": {
        "rotation": "Rotation"
      },
      "asset": {
        "imgly_transform_common_custom": "Custom",
        "imgly_transform_common_square": "Square",
        "imgly_transform_common_4-3": "4:3",
        "imgly_transform_common_16-9": "16:9",
        "imgly_transform_facebook_ad": "FB Ad",
        "imgly_transform_facebook_post": "FB Post",
        "imgly_transform_facebook_cover": "FB Cover",
        "imgly_transform_facebook_profile": "FB Profile"
      }
    }
  }
}

```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
