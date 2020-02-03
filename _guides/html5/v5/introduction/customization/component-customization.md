---
layout: guides/content
title: &title Component Customization
description: The PhotoEditor SDK for HTML5 can be customized easily. Learn how to quickly set up your editor in the proper language for your target audience.

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

This is the most exciting feature for the major release. Not only you can customize the [colors and fonts](), you could simply provide a React Component and it will be rendered instead of PhotoEditoSDK default Component

the following are the customizable components, to understand the naming better, you can refer to the [Naming Convention]() that we have in place

1. CategoryCard - this will replace the category cards in the `toolControlBar`. Availbale only in AdvancedUI

The React component Props `image`, `label`, `isActive`, `onClick` has be handled for this customization. Since this is all part of a big theme you can use the `theme` props like you would use it in any themable Styled Components

```jsx
const CardStyles = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-clip: content-box;
  &.active {
    border: 3px solid ${(props) => props.theme.primary};
  }
`

const Label = styled.div`
  max-width: 80px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
`

const CategoryCard = ({ image, label, isActive, onClick }) => {
 
}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      categoryCard: CategoryCard
    }
  }
})

```

2. ItemCard - this will replace the item cards in the `toolControlBar`. Availbale only in AdvancedUI

The React component Props `image`, `label`, `isActive`, `onClick` has be handled for this customization.

```js
const CardStyles = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-clip: content-box;
  &.active {
    border: 3px solid ${(props) => props.theme.primary};
  }
`

const Label = styled.div`
  max-width: 80px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
`

const ItemCard = ({ image, label, isActive, onClick }) => {

}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      itemCard: ItemCard
    }
  }
})

```

3. ToolbarItem - this will replace the icons in the `toolbar`. Availbale only in AdvancedUI

The React component Props `icon`, `label`, `isActive`, `onClick` has be handled for this customization. You can choose to use the default icons or replace them with your own themed icons.

```js

const ToolbarItemStyles = styled.li`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: transparent;
  color: ${(props) => props.theme.foreground};
  margin: 4px;
  &.active {
    color: white;
    background: ${(props) => props.theme.primary};
  }
`

const RelativeDiv = styled.div`
  position: relative;
`

const ToolbarItem = ({ icon, label, isActive, onClick }) => {

}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      toolbarItem: ToolbarItem
    }
  }
})

```

4. Loader - this will replace the initial loading screen. Availbale in both AdvancedUI and Basic UI

The React component Props `show` has be handled for this customization.

```js

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 5;
  &.show {
    opacity: 1;
  }
`

const LoaderStyles = styled.div`
  background: white;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.primary};
  padding: 20px;
`
const Loader = ({ show }) => {
}
const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      loader: Loader
    }
  }
})

```

5. Buttons - this will replace the listed buttons in the PhotoEditorSDKUI. Availbale in both AdvancedUI and Basic UI
The React component Props `icon`, `label`, `isDisabled` and `onClick` has be handled for this customization. Since this is all part of a big theme you can use the `theme` props like you would use it in any themable Styled Components
you can choose to use, buttons as button and label, only button, only label, the possiblities are endless.

```js

const Button = styled.div`
  padding: 8px;
  color: ${({ disabled, theme: { button } }) => disabled ? button.secondaryForeground : button.primaryForeground};
  cursor: ${({ disabled }) => disabled ? 'inherit' : 'pointer'};
`
const Undo = ({ isDisabled, onClick }) => (

)

const Redo = ({ isDisabled, onClick }) => (

)
const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      buttons: {
        canvasUndo: Undo,
        canvasRedo: Redo,
      }
    }
  }
})

```

Here's a list of some more customizable buttons `canvasExport`, `canvasClose`, `canvasActionEdit`, `canvasActionBringToFront`, `canvasActionDuplicate`, `canvasActionDelete`, `canvasActionInvert`, `canvasActionFlip`