---
layout: guides/content
title: &title Changing Icons

description: The PhotoEditor SDK for HTML5 can be customized easily. Learn how to quickly set up your editor in the proper language for your target audience.

menuitem: *title
order: 2
platform: html5
version: v5
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

Changing icons is a subset of component customization.

You can use following strategies to change the icons in the PhotoEditor SDK.

## Toolbar Item Icons

The `ToolbarItem` customization provides you a way to replace the default component toolbar item component. 

The React component Props `icon`, `label`, `isActive`, `onClick` has be handled for this customization. To use your icons you can discard the `icon` prop and replace it with your own icon.


```js
import buttonIcon from '../path to the icon'

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

const ToolbarItem = ({ label, isActive, onClick }) => {
  return (
    <RelativeDiv>
      <ToolbarItemStyles className={isActive ? 'active' : ''} onClick={onClick}>
        <img src={buttonIcon} />
      </ToolbarItemStyles>
      {isActive && <Label>{label}</Label>}
    </RelativeDiv>
  )
}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      toolbarItem: ToolbarItem
    }
  }
})

```

## Button Icon

All the buttons in the PhotoEditorSDK are replacable with custom button components.



