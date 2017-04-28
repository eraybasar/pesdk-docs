# Documentation of the PhotoEditor SDK 

## Run locally
The docs are generated using [Jekyll](https://jekyllrb.com/). In order to run them locally, install Jekyll:
```
$ gem install jekyll bundler
```

And launch it:

```
$ bundle exec jekyll serve
``` 

## Definition of Meta tags
Every document starts with a preamble like this:

```yml
---
layout: page
title: Getting Started with HTML5
platform: html5 # The platform this document belongs to
version: 3_6 # The version this document belongs to
category: # The categories this page belongs to
  - guide
  - feature
tags: &tags # Tags that are necessary
  - photo editor 
published: true # Either published or not (not published = not visible on page)
---
```

## Adding new versions
In order to add a new version to one of the platforms you need to do the following:
1. Duplicate the last versions folder in `_guides/<platform>/` and rename it to the new version (e.g. `_guides/ios/v6_5` duplicated as `_guides/ios/v7`)
2. Replace all ocurrences of the old version identifier with the new version (find & replace `v6_5` -> `v7` in `_guides/ios/v7`)
3. Repeat steps 1 and 2 for the `_layouts/guides/<platform>` folder
4. Duplicate the old versions assets in `assets/images/guides/<platform>` and rename the folder to the current version
5. Upon release, ensure that all index files load the new version by default
