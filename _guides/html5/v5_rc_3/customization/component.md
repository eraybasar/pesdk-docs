---
layout: guides/content
title: &title Components

description: PhotoEditor SDK for HTML5 can be customized easily. Learn how to quickly set up your editor in the proper language for your target audience.

menuitem: *title
order: 2
platform: html5
version: v5_rc_3
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

This is the most exciting feature for the major release. Not only you can customize the [colors and fonts]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/customization/theme), you could simply provide a React Component and it will be rendered instead of PhotoEditoSDK default Component.

the following are the customizable components. Refer to the [nomenclature]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/concepts/nomenclature) to understand the naming convention.

## Category Card in AdvancedUI 
This will replace the category cards in the `toolControlBar`.

The React component will receive the following props: `image`, `label`, `isActive`, `tool` and `onClick`. Since these components are all part of a theme context you can use the `theme` props like you would use it in any themable `styled-components`.

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

const editor = await PhotoEditorSDKUI.init({
  custom: {
    components: {
      advancedUICategoryCard: CategoryCard
    }
  }
})

```
## Item Card in AdvancedUI 
This will replace the item cards in the `toolControlBar`. Available only in `AdvancedUI`.

The React component will receive the following props: `image`, `label`, `isActive`, `onClick`, `tool`.

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

const editor = await PhotoEditorSDKUI.init({
  custom: {
    components: {
      advancedUIItemCard: ItemCard
    }
  }
})

```
## Toolbar Item in AdvancedUI
This will replace the icons in the `toolbar`. Available only in `AdvancedUI`.

The React component will receive the following props: `icon`, `label`, `isActive`, `onClick`, `tool`. You can choose to use the default icons or replace them with your own icons.

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

const editor = await PhotoEditorSDKUI.init({
  custom: {
    components: {
      advancedUIToolbarItem: ToolbarItem
    }
  }
})

```
## Loader
This will replace the initial loading screen. Available in both `AdvancedUI` and `BasicUI`.

The React component will receive the following props: `show`.

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

const editor = await PhotoEditorSDKUI.init({
  custom: {
    components: {
      loader: Loader
    }
  }
})

```
