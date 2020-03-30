---
layout: guides/content
title: &title Localization
description: The PhotoEditor SDK for HTML5 can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.

menuitem: *title
order: 1
platform: html5
version: v5_rc_3
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

International web applications have international users. That's why our editor supports localization.

## Changing UI language
We have localization available already in English (EN) and German (DE) and you can easily switch languages by adding the `language` String (Defaults to `en`) property to the configuration object passed to the UI.

```js
const editor = await PhotoEditorSDKUI.init({
  language: 'en' // 'en' or 'de'
})
```

## Changing labels for existing languages

You can change the text of a button or label by adding the component key with a new text to the `config.custom.languages` object
The language objects should have the same structure as our default languages. You'll find the English language object at the bottom of the page. 

```js
const editor = await PhotoEditorSDKUI.init({
  language: 'en',
  custom: {
    languages: {
      en: englishLaguageObject
    }
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Changing only what needs changing

You can also use the localization feature to simply change the button text with any word (can be the same language). In this case you don't even have to supply the entire language object. It is enough to overwrite the words you want to change. 

### Example
Changing the export button to say `Save` instead of `Export`:

```js
const editor = await PhotoEditorSDKUI.init({
 custom: {
    languages: {
      en: {
        mainCanvasActions: {
          buttonExport: 'Save'
        }
      }
    }
  }
})
```

## Adding a custom language

PhotoEditor SDK provides a configuration support for multiple language. You can define labels in multiple languages and add them to configuration.
```js
import nl from './nl'
import es from './es'

const editor = await PhotoEditorSDKUI.init({
 custom: {
   language: 'en', // change the language key here, based on which language has to be loaded
    languages: {
      en: {
        mainCanvasActions: {
          buttonExport: 'Save'
        }
      },
      nl: nl,
      es: es,
    }
  }
})
```

Again, in this case you don't even have to supply the entire language object. It is enough to define the words you want to change. For the rest of the labels, it leans on the fallback langauge i.e., English.


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Complete Language Object for reference

```js
{
   common: {
    error: 'Error',
    warning: 'Warning',
    color: {
      colorPicker: {
        hex: 'Hex',
        r: 'R',
        g: 'G',
        b: 'B',
        sliderHue: 'Color',
        sliderOpacity: 'Color Opacity',
      },
    },
  },
  mainCanvasActions: {
    buttonExport: 'Export Image',
    buttonUndo: 'Undo',
    buttonRedo: 'Redo',
    buttonClose: 'Close',
  },
  infoModals: {
    exporting: {
      heading: 'Exporting...',
      body: 'Just a few seconds...',
    },
    saving: {
      heading: 'Saving...',
      body: 'Just a few seconds...',
    },
    loading: {
      heading: 'Loading...',
      body: 'Just a few seconds...',
    },
    resizing: {
      heading: 'Resizing...',
      body: 'Just a few seconds...',
    },
    loadingFonts: {
      heading: 'Loading Fonts...',
      body: 'Just a few seconds...',
    },
  },
  errorModals: {
    imageLoading: {
      body:
        'Failed to load image. This can have multiple reasons, e.g. the file is corrupted or the file type is not supported',
      buttonYes: 'Reload',
    },
    rendering: {
      body: 'An error has occurred while rendering the image',
      buttonYes: 'Reload',
    },
    fontLoading: {
      heading: 'Failed to load font',
      body: 'The following fonts could not be loaded: ${error}',
      buttonNo: 'Close',
    },
    webcamUnavailable: {
      body: 'Unable to display webcam image (Error: ${error})',
      buttonYes: 'Close',
    },
    stickerLoading: {
      body: 'Unable to load the sticker',
      buttonNo: 'Close',
    },
    unsupportedSerializationVersion: {
      body: 'Serialization version is not supported',
      buttonNo: 'Close',
    },
  },
  warningModals: {
    imageResized: {
      heading: 'Image resized',
      body: 'Your image has been resized to ${width}x${height} pixels',
    },
    discardChanges: {
      body: 'You have unsaved changes. Are you sure you want to discard the changes?',
      buttonYes: 'Discard changes',
      buttonNo: 'Keep Changes',
    },
    unsavedChanges: {
      body: 'You have unsaved changes. Are you sure you want to exit?',
      buttonYes: 'Exit without saving',
      buttonNo: 'Cancel',
    },
  },
  library: {
    title: 'Library',
    controls: {
      buttonUpload: 'Upload Image',
      buttonWebcamOpen: 'Open Webcam',
      buttonWebcamClose: 'Close Webcam',
      placeholderSearch: 'Search Library',
      noResults: 'No Results',
    },
  },
  filter: {
    title: 'Filters',
    controls: {
      buttonReset: 'Remove Filter',
      sliderIntensity: 'Filter Intensity',
    },
    categories: {
      imgly_filter_category_duotone: 'DuoTone',
      imgly_filter_category_bw: 'B & W',
      imgly_filter_category_vintage: 'Vintage',
      imgly_filter_category_smooth: 'Smooth',
      imgly_filter_category_cold: 'Cold',
      imgly_filter_category_warm: 'Warm',
      imgly_filter_category_legacy: 'Legacy',
    },
    items: {
      imgly_lut_celsius: 'Inferno',
      imgly_lut_chest: 'Chestnut',
      imgly_lut_fixie: 'Fixie',
      imgly_lut_fridge: 'Fridge',
      imgly_lut_front: 'Sunny 70s',
      imgly_lut_k2: 'Flat Black',
      imgly_lut_mellow: 'Mellow',
      imgly_lut_sin: 'Hard Stuff',
      imgly_lut_texas: 'Oldtimer',
      imgly_lut_ad1920: '1920 A.D.',
      imgly_lut_ancient: 'Ancient',
      imgly_lut_bleached: 'Kalmen',
      imgly_lut_bleachedblue: 'Joran',
      imgly_lut_blues: 'Polaroid',
      imgly_lut_blueshadows: 'Zephyr',
      imgly_lut_breeze: 'Levante',
      imgly_lut_bw: 'Greyed',
      imgly_lut_classic: 'Classic',
      imgly_lut_colorful: 'Colorful',
      imgly_lut_cool: 'Snappy',
      imgly_lut_cottoncandy: 'Candy',
      imgly_lut_creamy: 'Creamy',
      imgly_lut_eighties: 'Low Fire',
      imgly_lut_elder: 'Colla',
      imgly_lut_evening: 'Sunrise',
      imgly_lut_fall: 'Moss',
      imgly_lut_food: 'Food',
      imgly_lut_glam: 'Glam',
      imgly_lut_gobblin: 'Gobblin',
      imgly_lut_highcarb: 'High Carb',
      imgly_lut_highcontrast: 'Hicon',
      imgly_lut_k1: 'K1',
      imgly_lut_k6: 'K6',
      imgly_lut_kdynamic: 'Pebble',
      imgly_lut_keen: 'Keen',
      imgly_lut_lenin: 'Lemon',
      imgly_lut_litho: 'Litho',
      imgly_lut_lomo: 'Lomo',
      imgly_lut_lomo100: 'Lomo 100',
      imgly_lut_lucid: 'Lucid',
      imgly_lut_neat: 'Neat',
      imgly_lut_nogreen: 'Pumpkin',
      imgly_lut_orchid: 'Solanus',
      imgly_lut_pale: 'Pale',
      imgly_lut_pitched: 'Pitched',
      imgly_lut_plate: 'Weathered',
      imgly_lut_pola669: 'Green Gap',
      imgly_lut_polasx: 'Pola SX',
      imgly_lut_pro400: 'Pro 400',
      imgly_lut_quozi: 'Quozi',
      imgly_lut_sepiahigh: 'Sepia',
      imgly_lut_settled: 'Settled',
      imgly_lut_seventies: 'Seventies',
      imgly_lut_soft: 'Soft',
      imgly_lut_steel: 'Steel',
      imgly_lut_summer: 'Summer',
      imgly_lut_sunset: 'Golden',
      imgly_lut_tender: 'Tender',
      imgly_lut_twilight: 'Twilight',
      imgly_lut_winter: 'Softy',
      imgly_lut_x400: 'Dusty',
      imgly_duotone_desert: 'Desert',
      imgly_duotone_peach: 'Peach',
      imgly_duotone_clash: 'Clash',
      imgly_duotone_plum: 'Plum',
      imgly_duotone_breezy: 'Breezy',
      imgly_duotone_deepblue: 'Deep Blue',
      imgly_duotone_frog: 'Frog',
      imgly_duotone_sunset: 'Sunset',
    },
  },
  adjustment: {
    title: 'Adjust',
    controls: {
      buttonReset: 'Reset Adjustment',
    },
    categories: {
      basics: 'Basic',
      refinements: 'Refinements',
    },
    items: {
      brightness: 'Brightness',
      saturation: 'Saturation',
      contrast: 'Contrast',
      gamma: 'Gamma',
      sharpness: 'Sharpness',
      clarity: 'Clarity',
      exposure: 'Exposure',
      shadows: 'Shadows',
      highlights: 'Highlights',
      whites: 'Whites',
      blacks: 'Blacks',
      temperature: 'Temperature',
    },
  },
  focus: {
    title: 'Focus',
    controls: {
      buttonReset: 'Remove Focus',
      sliderIntensity: 'Focus Intensity',
    },
    items: {
      radial: 'Radial',
      mirrored: 'Mirrored',
      linear: 'Linear',
      gaussian: 'Gaussian',
    },
    history: {
      focusPosition: 'Focus Position',
      focusSize: 'Focus Size',
    },
  },
  overlay: {
    title: 'Overlays',
    controls: {
      buttonReset: 'Remove Overlay',
      sliderOpacity: 'Overlay Opacity',
      carouselBlendMode: 'Overlay Blend mode',
      blendModeNormal: 'Normal',
      blendModeOverlay: 'Overlay',
      blendModeHardLight: 'Hard Light',
      blendModeSoftLight: 'Soft Light',
      blendModeMultiply: 'Multiply',
      blendModeDarken: 'Darken',
      blendModeLighten: 'Lighten',
      blendModeScreen: 'Screen',
      blendModeColorBurn: 'Color Burn',
      tabOpacity: 'Opacity',
      tabBlendMode: 'Blend Mode',
    },
    items: {
      imgly_overlay_bokeh: 'Bokeh',
      imgly_overlay_chop: 'Chop',
      imgly_overlay_clouds: 'Clouds',
      imgly_overlay_golden: 'Golden',
      imgly_overlay_grain: 'Grain',
      imgly_overlay_hearts: 'Hearts',
      imgly_overlay_lightleak1: 'Light Leak 1',
      imgly_overlay_lightleak2: 'Light Leak 2',
      imgly_overlay_metal: 'Metal',
      imgly_overlay_mosaic: 'Mosaic',
      imgly_overlay_painting: 'Painting',
      imgly_overlay_paper: 'Paper',
      imgly_overlay_rain: 'Rain',
      imgly_overlay_vintage: 'Vintage',
      imgly_overlay_wall1: 'Wall',
      imgly_overlay_wall2: 'Wall 2',
      imgly_overlay_wood: 'Wood',
    },
  },
  sticker: {
    title: 'Stickers',
    controls: {
      buttonUpload: 'Upload Sticker',
      sliderOpacity: 'Sticker Opacity',
      selectColor: 'Sticker Color',
      tabColor: 'Color',
      tabOpacity: 'Opacity',
    },
    categories: {
      imgly_sticker_emoticons: 'Emoticons',
      imgly_sticker_shapes: 'Shapes',
      imgly_sticker_custom: 'Custom',
    },
    items: {
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
      buttonBringToFront: 'Move to front',
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
  },
  text: {
    title: 'Text',
    controls: {
      buttonNew: 'New Text',
      dropdownFontFamily: 'Font Family',
      textFontSize: 'Font Size',
      selectAlignment: 'Alignment',
      selectFontColor: 'Font Color',
      selectBackgroundColor: 'Background Color',
      sliderLineSpacing: 'Line Spacing',
      tabColor: 'Color',
      tabBgColor: 'Bg Color',
      tabAlignment: 'Alignment',
      tabLineHeight: 'Line Height',
      tabFontSize: 'Font Size',
    },
    canvasControls: {
      placeholderText: 'Write Something',
      buttonSave: 'Done',
      buttonClose: 'Cancel',
      inputText: 'Text Input',
    },
    canvasActions: {
      buttonEdit: 'Edit',
      buttonDelete: 'Delete',
      buttonBringToFront: 'Move to front',
      buttonDuplicate: 'Duplicate',
    },
    history: {
      add: 'Text',
      edit: 'Text edit',
      resize: 'Text resize',
      position: 'Text position',
      alignment: 'Text alignment',
      textColor: 'Text color',
      backgroundColor: 'Text background color',
      fontFamily: 'Font family',
      fontStyle: 'Font style',
      lineSpacing: 'Line spacing',
      width: 'Text width',
      delete: 'Text delete',
      order: 'Text order',
    },
  },
  textdesign: {
    title: 'Text Design',
    controls: {
      buttonNew: 'New Text Design',
      buttonShuffle: 'Shuffle Layout',
      selectColor: 'Text Color',
      tabColor: 'Color',
      tabShuffle: 'Shuffle',
    },
    canvasControls: {
      placeholderText: 'Write Something',
      buttonSave: 'Done',
      buttonClose: 'Schließen',
      inputText: 'Text Input',
    },
    canvasActions: {
      buttonEdit: 'Edit',
      buttonInvert: 'Invert',
      buttonDelete: 'Delete',
      buttonBringToFront: 'Move to front',
      buttonDuplicate: 'Duplicate',
    },
    history: {
      add: 'Text design',
      edit: 'Text design edit',
      resize: 'Text design resize',
      position: 'Text design position',
      color: 'Text design color',
      shuffle: 'Text design shuffle',
      invert: 'Text design invert',
      padding: 'Text design padding',
      order: 'Text design order',
      delete: 'Text design delete',
    },
  },
  frame: {
    title: 'Frames',
    controls: {
      buttonReset: 'Remove Frame',
      sliderOpacity: 'Frame Opacity',
      sliderSize: 'Frame Size',
      selectColor: 'Frame Color',
      tabColor: 'Color',
      tabOpacity: 'Opacity',
      tabSize: 'Size',
    },
    items: {
      imgly_frame_dia: 'Dia',
      imgly_frame_art_decor: 'Art Decor',
      imgly_frame_black_passepartout: 'Black',
      imgly_frame_lowpoly_shadow: 'Low Poly',
      imgly_frame_wood_passepartout: 'Wood',
    },
  },
  brush: {
    title: 'Brush',
    controls: {
      buttonReset: 'Remove Brush',
      sliderSize: 'Brush Size',
      sliderHardness: 'Brush Hardness',
      selectColor: 'Brush Color',
      tabSize: 'Size',
      tabHardness: 'Hardness',
      tabColor: 'Color',
    },
    history: {
      brushStroke: 'Brush Stroke',
    },
  },
  transform: {
    title: 'Transform',
    controls: {
      buttonReset: 'Reset to default',
      checkboxKeepResolution: 'Keep Resolution',
      inputCropSize: 'Crop Size',
      inputHeight: 'h',
      inputWidth: 'w',
      tabFlipAndRotate: 'Flip & Rotate',
      tabResolution: 'Resolution',
      tabCropSize: 'Crop Size',
      selectFlipRatio: 'Flip Crop Ratio',
    },
    categories: {
      imgly_transforms_common: 'Common Crops',
      imgly_transforms_facebook: 'Facebook',
    },
    items: {
      imgly_transform_common_custom: 'Custom',
      imgly_transform_common_square: 'Square',
      imgly_transform_common_4: '4:3',
      imgly_transform_common_16: '16:9',
      imgly_transform_facebook_profile: 'Profile Pic',
      imgly_transform_facebook_ad: 'Ad',
      imgly_transform_facebook_post: 'Post',
      imgly_transform_facebook_cover: 'Cover',
    },
    transformActions: {
      buttonFlipHorizontal: 'Flip Horizontal',
      buttonFlipVertical: 'Flip Vertical',
      buttonRotateClockwise: 'Rotate Clockwise',
      buttonRotateAntiClockwise: 'Rotate Anticlockwise',
    },
  },
}

```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
