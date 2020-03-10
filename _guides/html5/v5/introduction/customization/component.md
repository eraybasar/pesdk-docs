---
layout: guides/content
title: &title Components

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

This is the most exciting feature for the major release. Not only you can customize the [colors and fonts]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/introduction/customization/theme), you could simply provide a React Component and it will be rendered instead of PhotoEditoSDK default Component.

the following are the customizable components. Refer to the [nomenclature]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/introduction/concepts/nomenclature) to understand the naming convention.

## Category Card
This will replace the category cards in the `toolControlBar`. Available only in `AdvancedUI`

The React component Props `image`, `label`, `isActive`, `onClick` has be handled for this customization. Since this is all part of a big theme you can use the `theme` props like you would use it in any themable `styled-components`.

```jsx
const CardStyles = styled.button`
  height: 50px;
  width: 180px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-clip: content-box;
  &.active {
    border: 3px solid ${(props) => props.theme.primary};
  }
`

const Label = styled.label`
  max-width: 180px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
`

const CategoryCard = ({ image, label, isActive, onClick }) => {
  const style = { backgroundImage: `url(${image})` }
  return (
    <div>
      <CardStyles style={style} onClick={onClick} />
      <Label>{label}</Label>
    </div>
  )
}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      categoryCard: CategoryCard
    }
  }
})

```
## Item Card
This will replace the item cards in the `toolControlBar`. Available only in `AdvancedUI`.

The React component Props `image`, `label`, `isActive`, `onClick` has be handled for this customization.

```js
const CardStyles = styled.button`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-clip: content-box;
  padding: 5px;
  &.active {
    border: 3px solid ${(props) => props.theme.primary};
  }
`

const Label = styled.label`
  max-width: 80px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
`

const ItemCard = ({ image, label, isActive, onClick }) => {
  const style = { backgroundImage: `url(${image})` }
  return (
    <div>
      <CardStyles onClick={onClick} style={style} className={isActive ? 'active' : ''} />
      <Label>{label}</Label>
    </div>
  )
}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      itemCard: ItemCard
    }
  }
})

```
## ToolbarItem
This will replace the icons in the `toolbar`. Available only in `AdvancedUI`.

The React component Props `icon`, `label`, `isActive`, `onClick` has be handled for this customization. You can choose to use the default icons or replace them with your own icons.

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
const Label = styled.div`
  max-width: 48px;
  text-align: center;
  font-size: 12px;
  margin: 4px;
`

const RelativeDiv = styled.div`
  position: relative;
`

const ToolbarItem = ({ icon, label, isActive, onClick }) => {
  return (
    <RelativeDiv>
      <ToolbarItemStyles className={isActive ? 'active' : ''} onClick={onClick}>
        {icon}
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
## Loader
This will replace the initial loading screen. Available in both `AdvancedUI` and `Basic UI`.

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
  return <Backdrop className={show ? 'show' : ''}><LoaderStyles>Loading ...</LoaderStyles></Backdrop>
}

const editor = new PhotoEditorSDKUI({
  custom: {
    components: {
      loader: Loader
    }
  }
})

```
## Buttons
This will replace the listed buttons in the PhotoEditorSDKUI. Available in both `AdvancedUI` and `Basic UI`.

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
        canvasUndo: Undo,
        canvasRedo: Redo,
      }
    }
  }
})

```

Here's a list of all the customizable buttons:
* `canvasUndo`
* `canvasRedo`
* `canvasExport`
* `canvasClose`
* `canvasActionEdit`
* `canvasActionBringToFront`
* `canvasActionDuplicate`
* `canvasActionDelete`
* `canvasActionInvert`
* `canvasActionFlip`