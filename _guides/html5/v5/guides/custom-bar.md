---
layout: guides/content
title: &title Custom main action canavs bar
description: Custom main action bar tutorial

platform: html5
version: v5
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The editor provides handlers for `export` and `close` functions in the main canvas action bar.
We can make use of this to create a custom main canvas action bar.

Let's start with a design template such as this.

![UIs]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/img.png){: .center-image style="padding: 20px; max-height: 400px;"}


As we can see that some parts of main canvas action bar are situated at the bottom of the page.
- Init the editor

```jsx
import { PhotoEditorSDKUI, CanvasAction } from 'photoeditorsdk'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`
const editor = await PhotoEditorSDKUI.init({
  container: '.editor',
  image: '',
  license: '',
})
const App = () => {
  return (
    <Container>
      <div className="editor" /> /** Editor goes here */
    </Container>
  )
}
```
- Let's configure the top part first. This will ensure that the undo/redo are at the right side and get the icons insted of the default text buttons.

```diff
import { PhotoEditorSDKUI, CanvasAction } from 'photoeditorsdk'
import styled from 'styled-components'

+const Button = styled.button`
+  padding: 8px;
+  color: ${({ disabled, theme: { button } }) => (disabled ? button.secondaryForeground : button.primaryForeground)};
+  cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};
+`
+const CustomUndoIconComponent = ({ isDisabled, onClick }) => (
+  <custon button component>
+)
+
+const CustomRedoIconComponent = ({ isDisabled, onClick }) => (
+  <custon button component>
+)

const editor = await PhotoEditorSDKUI.init({
  container: '.editor',
  image: '',
  license: '',
+  mainCanvasActions: [undefined, undefined, CanvasAction.UNDO, CanvasAction.REDO],
+  custom: {
+    components: {
+      buttons: {
+        mainCanvasActionUndo: CustomUndoIconComponent,
+        mainCanvasActionRedo: CustomRedoIconComponent,
+      }
+    }
+  }
})
```

- As the editor is positioned absolute, we can position some other element absolutely in the same container and style them the way we want them to look like. To make sure there is no cards or toolbaricons behind our custom absolutely positioned div. We can provide a bottom margin to both toolbar and tool control bar.

```diff
import { PhotoEditorSDKUI, CanvasAction } from 'photoeditorsdk'

+const toolbarWidth = 55
+const toolControlbarWidth = 250
+const customBottombarHeight = 50

const editor = await PhotoEditorSDKUI.init({
  container: '.editor',
  image: '',
  license: '',
  mainCanvasActions: [undefined, undefined, CanvasAction.UNDO, CanvasAction.REDO],
+  measurements: {
+    advancedUIToolbar: {
+      width: toolbarWidth,
+      marginBottom: customBottombarHeight,
+    },
+    advancedUIToolControlBar: {
+      width: toolControlbarWidth,
+      marginBottom: customBottombarHeight,
+    },
  },
  custom: {
    components: {
      buttons: {
        mainCanvasActionUndo: CustomUndoIconComponent,
        mainCanvasActionRedo: CustomRedoIconComponent,
      }
    }
  }
})
```

- Add the custom action bar with required styling.

```diff

const toolbarWidth = 55
const toolControlbarWidth = 250
const customBottombarHeight = 50
+const accentColor = '#1e47fb'
+const text = 'white'
+
+const Done = styled.button`
+  width: 55px;
+  height: ${customBottombarHeight}px;
+  background: ${accentColor};
+  color: ${text};
+  border-top: 1px solid ${accentColor};
+  position: absolute;
+  right: 0;
+  bottom: 0;
+`
+const CancelBar = styled.div`
+  position: absolute;
+  width: ${toolControlbarWidth}px;
+  height: ${customBottombarHeight}px;
+  background: ${text};
+  color: ${accentColor};
+  border-top: 1px solid gray;
+  bottom: 0;
+  right: ${toolbarWidth}px;
+  z-index: 10;
+`
+const Cancel = styled.button`
+  width: 55px;
+  height: ${customBottombarHeight}px;
+  color: ${accentColor};
+  background: ${text};
+  position: absolute;
+  right: 0;
+  bottom: 0;
+  border: none;
+`
const App = () => {
  return (
     <Container>
      <div className="editor" /> /** Editor goes here */
+      <Done onClick={() => editor.export()}>Done</Done>
+      <CancelBar>
+        <Cancel onClick={() => editor.close()}>Cancel</Cancel>
+      </CancelBar>
    </Container>
  )
}
```

