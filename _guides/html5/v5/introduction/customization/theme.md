---
layout: guides/content
title: &title Theme
description: Learn how easily customize the color palettes of individual tools in PhotoEditor SDK for HTML5.

menuitem: *title
order: 0
platform: html5
version: v5
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
{% capture theme_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/theme/dark.png
{% endcapture %}
{% capture theme_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/theme/light.png
{% endcapture %}

{% assign images = "" | split: "" | push: theme_dark | push: theme_light %}
{% include image_carousel.html images=images %}

Our PhotoEditor SDK UI comes with two themes `light` and `dark`. Defaults to `dark` . The color palette consists of 10 default colors out of the box, from which a theme is created for the UI.
To make the integration of PhotoEditor SDK in your app seamless, the theme customizations can be done on three levels.

## Colors
You could just change the `primary` to get the primary color overall as accent color in the UI. 

Here the color values can be `web colors`, `hex`, `rgb()` or `rgba()` in string format.

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

Here is the list of all colors you can customize. Refer to the [nomenclature]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/introduction/concepts/nomenclature) to understand the naming convention.

```js
{
  /** Base Colors */
  /** Overall background color. This color is used if not overriden by a component */
  background: '#000000',
  /** Overall foreground color. This color is used if not overriden by a component */
  foreground: '#FFFFFF',
  primary: '#365AFC',
  warning: '#FFBA5C',
  error: '#C2393A',
  success: '#39C26C',
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
    inputBorderColor: '#424242',
    listBackground: '#333333',
    listShadow: `0 12px 17px 2px rgba(0,0,0,0.14),
      0 5px 22px 4px rgba(0,0,0,0.12),
      0 7px 8px -4px rgba(0,0,0,0.20)`,
    controlsColor: '#FFFFFF',
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
    * they don't really work well with light theme,
    * so they are customizable based on your design choices
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
    activeForeground: '#365AFC',
    activeBackground: 'rgba(89, 121, 252, 0.20)',
    primaryBackground: '#242424',
    primaryForeground: 'rgba(255, 255, 255, 0.90)',
    secondaryBackground: 'transparent',
    secondaryForeground: 'rgba(255, 255, 255, 0.60)',
    hoverOverlayColor: 'rgba(255, 255, 255, 0.08)',
    inactiveOverlayColor: 'rgba(0, 0, 0, 0.3)'
  },
  checkbox: {
    background: '#333333',
    foreground: '#FFFFFF',
    activeForeground: '#FFFFFF',
    activeBackground: '#365AFC',
    inactiveOpacity: '0.3',
    hoverOpacity: '0.8'
  },
  card: {
    background: '#333333',
    foreground: 'rgba(255, 255, 255, 0.90)',
    borderColor: 'transparent',
    activeBorderColor: '#365AFC',
    activeOverlayColor: 'rgba(89, 121, 252, 0.20)',
    /** card in PhotoEditor SDK always has a label */
    labelBackground: 'linear-gradient(transparent, rgba(0, 0, 0, 0.6))',
    labelForeground: 'rgba(255, 255, 255, 0.90)',
    inactiveOverlayColor: 'rgba(0, 0, 0, 0.3)',
    hoverOverlayColor: 'rgba(255, 255, 255, 0.08)'
  },
  textInput: {
    foreground: 'rgba(255, 255, 255, 0.90)',
    hoverBorderColor: 'rgba(255, 255, 255, 0.40)',
    background: 'transparent',
    borderColor: '#333333',
    inactiveOpacity: '0.3',
  },
  slider: {
    trackColor: 'rgba(255, 255, 255, 0.4)',
    activeTrackColor: '#365AFC',
    thumbBackground: '#171717',
    thumbBorderColor: '#365AFC',
    inactiveOpacity: '0.3',
    hoverOpacity: '0.7',
  },
  selectColor: {
    activeBorderColor: '#365AFC',
    inactiveOpacity: '0.3',
  },
  /** App sections */
  toolbar: {
    foreground: 'rgba(255, 255, 255, 0.90)',
    background: '#242424',
    activeBackground: 'transparent',
    activeForeground: '#365AFC',
    borderColor: 'transparent',
  },
  toolControlBar: {
    background: 'rgba(23, 23, 23, 0.9)',
    /* Border between toolbar and toolControlBar */
    borderColor: 'transparent',
    separatorColor: '#333333',
    titleForeground: 'rgba(255, 255, 255, 0.60)',
    inputLabelForeground: 'rgba(255, 255, 255, 0.60)',
    inputLabelInactiveOpacity: '0.3',
  },
  mainCanvasActionBar: {
    background: 'linear-gradient(0deg, transparent 0%,  rgba(0, 0, 0, 0.6) 98%)',
    foreground: 'rgba(255, 255, 255, 0.90)',
    buttonForeground: 'rgba(255, 255, 255, 0.60)',
    buttonBackground: 'transparent',
    /** border between mancanvsActionBar and canvas container */
    borderColor: 'transparent',
  },
  canvasActionBar: {
    background: '#424242',
    foreground: 'rgba(255, 255, 255, 0.90)',
    separatorColor: 'rgba(255, 255, 255, 0.38)',
  },
  canvas: {
    background: '#0B0B0B',
    controlsOutline: 'rgba(255, 255, 255, 0.5)',
    controlsColor: '#FFFFFF',
    cropBackdrop: 'rgba(0, 0, 0, 0.5)',
  },
  /** Relevant only for BasicUI **/
  tab: {
    titleForeground: 'rgba(255, 255, 255, 0.60)',
    activeBorderColor: '#365AFC',
    activeForeground: 'rgba(255, 255, 255, 0.90)',
  },
}

```

## Typography

you can customize the font that you load for the PhotoEditor SDK for any theme.

```js
const editor = new PhotoEditorSDKUI({
  theme: 'dark', 
  custom: {
    themes: {
      dark: {
        typography: {
          fontURI: './fonts/imgly_font_aleo_bold.woff', // font path relative to font assets
          fontFamily: 'Aleo',
          format: 'woff',
          provider: 'file',
          // Most users load font while initialising their app,
          // In that case, you can choose to skip loading it again
          skipLoading: false
        }
      }
    }
  }
})
```

Moreover, you can load font from `Google Fonts`.

```js
const editor = new PhotoEditorSDKUI({
  theme: 'light', 
  custom: {
    themes: {
      light: {
        typography: {
          provider: 'google',
          fontFamily: 'Quicksand',
          // Most users load font while initialising their app
          // In that case, you can choose to skip loading it again
          skipLoading: false
        }
      }
    }
  }
})
```

## Shape

Border radius is one of the important part of any design system. To make PhotoEditor SDK UI shape similar to your design system, you can configure `shape` object in theme.

```js
const editor = new PhotoEditorSDKUI({
  theme: 'dark', 
  custom: {
    themes: {
      dark: {
        shape: {
          /**
            * Border Radius for small sized components,
            * Color Selection, Checkbox
            **/
          radiusSmall: 2,
          /**
            * Border Radius for medium sized components,
            * Button, Tooltip, Cards, Dropdown, Color Picker, Input
            **/
          radiusMedium: 4,
          /**
            * Border Radius for large sized components,
            * Modal
            **/
          radiusLarge: 4,
        }
      }
    }
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

