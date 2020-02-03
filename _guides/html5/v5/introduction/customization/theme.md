---
layout: guides/content
title: &title Color Palettes
description: Learn how easily customize the color palettes of individual tools in the PhotoEditor SDK for HTML5.

menuitem: *title
order: 1
platform: html5
version: v5
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


![Color Palette]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/color_palette.png){: .center-image style="padding: 20px; max-height: 400px;"}

One of the striking features of the major rewrite is theme cutomization. Our PhotoEditorSDK comes with two themes `light` and `dark`. Defaults to `dark` . The color palette consists of 10 default colors out of the box, from which a theme is created for the UI.
To make the integration of PhotoEditorSDK in your app seamless, the theme customisations can be done on three levels.

## Color Customization
You could just change the `primary` to get the primary color overall as accent color in the UI. 

Here the color values can be  `web colors`, `hex`, `rgb()` or `rgba()` in string format

```js
const editor = new PhotoEditorSDKUI({
  theme: 'light', 
  custom: {
    themes: {
      light: {
        primary: 'palevioletred'
      }
    }
  }
})
```

Additionally, the both UIs allows you to easily and individually customize each one of these colors for each section on the UI that uses them.

```js
const editor = new PhotoEditorSDKUI({
  theme: 'light', 
  custom: {
    themes: {
      light: {
        tooltip: {
          background: 'darkgray'
        }
      }
    }
  }
})
```

Here is the list of all colors you can customize. To understand the sections, you can refer to the [Naming Convention]() that we have in place

```js
  shape: {
    /**
     * Border Radius for small sized components
     * Color Selection, Checkbox
     */
    radiusSmall: 2,
    /**
     * Border Radius for medium sized components
     * Button, Tooltip, Cards, Dropdown, Color Picker, Input
     */
    radiusMedium: 4,
    /**
     * Border Radius for large sized components
     * Modal
     */
    radiusLarge: 4,
  },
  typography: {
    fontFamily: 'Fira Sans',
    provider: 'google',
  },
   /** Base Colors */
  /** Overall background color. This color is used if not overriden by a component */
  background: '#000000',
  /** Overall foreground color. This color is used if not overriden by a component */
  foreground: '#FFFFFF',
  primary: '#365afc',
  warning: '#ffba5c',
  error: '#c2393a',
  success: '#39c26c',
  focusOutlineColor: 'rgba(255, 255, 255, 0.12)',
  /** Portals */
  modal: {
    background: '#424242',
    bodyForeground: 'rgba(255, 255, 255, 0.90)',
    headerForeground: 'rgba(255, 255, 255, 0.60)',
    backdrop: 'rgba(0, 0, 0, 0.6)',
  },
  tooltip: {
    background: '#424242',
    foreground: 'rgba(255, 255, 255, 0.90)',
  },
  colorPicker: {
    listBackground: '#333333',
    listShadow: `0 12px 17px 2px rgba(0,0,0,0.14),
      0 5px 22px 4px rgba(0,0,0,0.12),
      0 7px 8px -4px rgba(0,0,0,0.20)`,
    controls: '#ffffff',
  },
  dropdown: {
    background: 'transparent',
    foreground: 'rgba(255, 255, 255, 0.90)',
    hoverColor: 'rgba(255, 255, 255, 0.60)',
    borderColor: '#333333',
    caretColor: 'rgba(255, 255, 255, 0.38)',
    listBackground: '#333333',
    listBorder: '#333333',
    listForeground: 'rgba(255, 255, 255, 0.60)',
    /**
     * According to material design
     * shadows are applied for dark theme
     * they don't really work for light theme
     */
    listShadow: `0 12px 17px 2px rgba(0,0,0,0.14),
      0 5px 22px 4px rgba(0,0,0,0.12),
      0 7px 8px -4px rgba(0,0,0,0.20)`,
  },
  /** Components */
  /** Scrollbar handle color, track color is transparent */
  scrollbar: {
    handleColor: 'rgba(255, 255, 255, 0.2)',
  },
  /** Button colors in different states and variations */
  button: {
    borderColor: '#333333',
    hoverBackground,
    hoverForeground: 'rgba(255, 255, 255, 0.60)',
    activeForeground: primary,
    activeBackground,
    primaryBackground: '#242424',
    primaryForeground: 'rgba(255, 255, 255, 0.90)',
    secondaryBackground: 'transparent',
    secondaryForeground: 'rgba(255, 255, 255, 0.60)',
  },
  checkbox: {
    background: '#333333',
    foreground,
    hoverBackground,
    activeForeground: foreground,
    activeBackground: primary,
  },
  card: {
    background: '#333333',
    foreground: 'rgba(255, 255, 255, 0.90)',
    borderColor: 'transparent',
    hoverBackground,
    activeBorderColor: primary,
    activeBackground,
    /** card in PhotoEditorSDK always has a label */
    labelBackground: 'linear-gradient(transparent, rgba(0, 0, 0, 0.6))',
    labelForeground: 'rgba(255, 255, 255, 0.90)',
    disabledBackground: 'rgba(0, 0, 0, 0.3)',
  },
  /** relevant only for Basic UI **/
  tab: {
    titleForeground: 'rgba(255, 255, 255, 0.60)',
    activeBorderColor: primary,
    activeForeground: 'rgba(255, 255, 255, 0.90)',
  },
  textInput: {
    foreground: 'rgba(255, 255, 255, 0.90)',
    hoverColor: 'rgba(255, 255, 255, 0.40)',
    background: 'transparent',
    borderColor: '#333333',
  },
  slider: {
    trackColor: 'rgba(255, 255, 255, 0.4)',
    activeTrackColor: primary,
    thumbBackground: '#171717',
    thumbBorderColor: primary,
  },
   /** App sections */
  toolbar: {
    foreground: 'rgba(255, 255, 255, 0.90)',
    background: '#242424',
    activeBackground,
    activeForeground: primary,
    borderColor: 'transparent',
  },
  toolControlBar: {
    // opaque '#171717' color with 90% opacity
    background: 'rgba(23, 23, 23, 0.9)',
    borderColor: 'transparent',
    separator: '#333333',
    titleForeground: 'rgba(255, 255, 255, 0.60)',
    labelForeground: 'rgba(255, 255, 255, 0.60)',
  },
  canvasActionBar: {
    background: 'linear-gradient(0deg, transparent 0%,  rgba(0, 0, 0, 0.6) 98%)',
    foreground: 'rgba(255, 255, 255, 0.90)',
    buttonForeground: 'rgba(255, 255, 255, 0.60)',
    buttonBackground: 'transparent',
  },
  spriteActionBar: {
    background: '#424242',
    foreground: 'rgba(255, 255, 255, 0.90)',
    separator: 'rgba(255, 255, 255, 0.38)',
  },
  canvasContainer: {
    background: '#0B0B0B',
    controlsOutline: 'rgba(255, 255, 255, 0.5)',
    controls: '#ffffff',
    cropBackdrop: 'rgba(0, 0, 0, 0.5)',
  },

```

## Typography

you can customize the font that you load for the PhotoEditorSDK, 

```js
const editor = new PhotoEditorSDKUI({
  theme: 'light', 
  custom: {
    themes: {
      light: {
        typography: {
          fontURI: '../' // font path reltive to font assets
          fontFamily: '',
          format: 'ttf',
          provider: 'file',
          skipLoading: false // Most users load font while initialising their app, In that case, you can choose to skip loading it again
        }
      }
    }
  }
})
```

Moreover, you can also load font from `Google Fonts`

## Shape

Border radius is one of the important part of any design system. To make the PhotoEditorSDK similar to your design system, you can configure `shape`

```js
const editor = new PhotoEditorSDKUI({
  theme: 'dark', 
  custom: {
    themes: {
      dark: {
        shape: {
          /** Border Radius for small sized components, Color Selection, Checkbox **/
          radiusSmall: 2,
          /** Border Radius for small sized components, Button, Tooltip, Cards, Dropdown, Color Picker, Input **/
          radiusMedium: 4,
          /** Border Radius for small sized components, Modal **/
          radiusLarge: 4,
        }
      }
    }
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

