---
layout: guides/content
title: &title Filter # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - html5
version:
  - v3_6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Filter

## Overview



## Custom Filters 

You can create custom filters by extending the [`Filter` class](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.Filter.html).
A filter has a [`PrimitivesStack`](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.Filter.PrimitivesStack.html)
which holds a list of [`FilterPrimitives`](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.FilterPrimitives.html).


```js
const { Filter, FilterPrimitives } = PhotoEditorSDK
class BWHardFilter extends Filter {
  constructor (...args) {
    super(...args)
    this._stack.push(new FilterPrimitives.Grayscale())
    this._stack.push(new FilterPrimitives.Contrast({
      contrast: 1.5
    }))
  }
}

/**
 * A unique string that identifies this filter
 */
BWHardFilter.identifier = 'bwhard'

/**
 * This string is used in the UI
 */
BWHardFilter.displayName = 'B&W Hard'
```

You can now pass the filter to the `FilterOperation`:

```js
const filterOperation = new PhotoEditorSDK.Operations.FilterOperation(sdk, {
  filter: new BWHardFilter()
})
```

