---
layout: guides/content
title: &title Changing Icons

description: PhotoEditor SDK for HTML5 can be customized easily. Learn how to quickly set up your editor in the proper language for your target audience.

menuitem: *title
order: 3
platform: html5
version: v5_rc_3
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

Changing icons is a subset of component customization. You can use following strategies to change the icons in PhotoEditor SDK.

## Toolbar Item Icons

The `ToolbarItem` customization provides you a way to replace the default component toolbar item component. Available only for AdvancedUI. 

The React component Props `icon`, `label`, `isActive`, `onClick`, `tool` has be handled for this customization. To use your icons you can discard the `icon` prop and replace it with your own icon.


```js
import { Tool } from 'photoeditorsdk'
import textIcon from '../path to the icon'
import stickerIcon from '../path to the icon'

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
const Label = styled.div`
  max-width: 48px;
  text-align: center;
  font-size: 12px;
  margin: 4px;
`

const RelativeDiv = styled.div`
  position: relative;
`

const ToolbarItem = ({ label, isActive, onClick, tool }) => {
  const getIcon = () => {
    if (Tool.STICKER === tool) {
      return <img src={stickerIcon} />
    } else if (Tool.TEXT === tool) {
      return <img src={textIcon} />
    }
    return icon
  }
  return (
    <RelativeDiv>
      <ToolbarItemStyles className={isActive ? 'active' : ''} onClick={onClick}>
        {getIcon()}
      </ToolbarItemStyles>
      {isActive && <Label>{label}</Label>}
    </RelativeDiv>
  )
}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      advancedUIToolbarItem: ToolbarItem
    }
  }
})

```

## Buttons
This will replace the listed buttons in PhotoEditor SDK UI. Available in both `AdvancedUI` and `BasicUI`.

The React component Props `icon`, `label`, `isDisabled` and `onClick` has be handled for this customization. Since this is all part of a big theme you can use the `theme` props like you would use it in any themable Styled Components.
you can choose to use, buttons as button and label, only button, only label, the possiblities are endless.

```js

const Button = styled.div`
  padding: 8px;
  color: ${({ disabled, theme: { button } }) => disabled ? button.secondaryForeground : button.primaryForeground};
  cursor: ${({ disabled }) => disabled ? 'inherit' : 'pointer'};
`

const Undo = ({ isDisabled, onClick }) => (
  <Button onClick={isDisabled ? null : onClick} disabled={isDisabled}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
    </svg>
  </Button>
)

const Redo = ({ isDisabled, onClick, icon, label }) => (
  <Button onClick={isDisabled ? null : onClick} disabled={isDisabled}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" />
    </svg>
  </Button>
)

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      buttons: {
        mainCanvasActionUndo: Undo,
        mainCanvasActionRedo: Redo,
      }
    }
  }
})

```

Here's a list of all the customizable buttons:
* `mainCanvasActionUndo`
* `mainCanvasActionRedo`
* `mainCanvasActionExport`
* `mainCanvasActionClose`
* `canvasActionEdit`
* `canvasActionBringToFront`
* `canvasActionDuplicate`
* `canvasActionDelete`
* `canvasActionInvert`
* `canvasActionFlip`
* `transformActionFlipHorizontal`
* `transformActionFlipVertical`
* `transformActionRotateClockwise`
* `transformActionRotateAntiClockwise`
