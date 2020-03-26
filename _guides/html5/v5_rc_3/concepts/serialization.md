---
layout: guides/content
title: &title Serialization # title as shown in the menu and
description: PhotoEditor SDK for HTML5 provides an option for serialization and deserialization, allowing your users to save and revise their work anytime.
menuitem: *title
order: 5
platform: html5
version: v5_rc_3
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

Since version 3.4.2, PhotoEditorSDK's Editor UI supports serialization and deserialization of
application states. This means that you can export the current state of the editor and import
it later on.

The serialization schema is specified
[here]({{ site.baseurl }}/assets/downloads/serialization/schema-3.8.0.json){: download="schema-3.8.0.json" }.

## Serialization

In order to serialize the editor state, simply call `serialize()` on the Editor instance:

```js
editor.serialize({ image: true }) // Default { image: false }
  .then((state) => {
    console.log('Editor state:', state)
  }).catch((err) => {
    console.err('An error has occured ', err)
  })
```

This will serialize the editor state and write the result to the console.

The `image` option specifies whether or not the input image should be serialized as well. Enabling
this will highly increase the size of the resulting object.

## Deserialization

In order to deserialize / load an editor state, simply call `deserialize()` on the Editor instance
and pass the editor state object:

```js
editor.deserialize(state)
  .then(() => {
    console.log('Restored state!')
  })
  .catch((err) => {
    console.err('An error has occured ', err)
  })
```

This will restore the editor state.
