# Documentation of the PhotoEditor SDK

## Run locally
The docs are generated using [Jekyll](https://jekyllrb.com/). In order to run them locally, install Jekyll:
```
$ gem install --path=vendor
```

To build the site:

```
$ bundle exec jekyll build
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
1. Duplicate the last versions folder in `_guides/<platform>/` and rename it to the new version (e.g. `_guides/ios/v6` duplicated as `_guides/ios/v7`)
2. Replace all ocurrences of the old version identifier with the new version (find & replace `v6` -> `v7` in `_guides/ios/v7`)
3. Repeat steps 1 and 2 for the `_layouts/guides/<platform>` folder
4. Duplicate the old versions assets in `assets/images/guides/<platform>` and rename the folder to the current version
5. Upon release, ensure that all index files load the new version by default

## Adding multilingual code block
In order to add a code block that allows switching between programming languages, you need to create an array of snippets and a unique identifier, which can then be passed to an include:

Create the first snippet by capturing a new variable. The language title is separated from the actual fenced code block with the --- identifier:

    {% capture first_snippet %}
    Swift
    ---
    ```swift
    PESDK.analytics.isEnabled = true
    PESDK.analytics.addAnalyticsClient(AnalyticsClient())
    ```
    {% endcapture %}

Repeat for every other language and don't forget to use different variable names:

    {% capture second_snippet %}
    Objective-C
    ---
    ```objc
    PESDK.analytics.isEnabled = YES;
    [PESDK.analytics addAnalyticsClient:[PESDKAnalyticsClient new]];
    ```
    {% endcapture %}

Finally we need to combine all snippets into an array (yep, that's how you do this in Jekyll) and create a unique identifier for our code block in order to ensure that switching languages doesn't affect other blocks on the page as well. Both variables are then passed to the include which renders the code block:

    {% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
    {% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
    {% include multilingual_code_block.html snippets=snippets identifier=identifier %}

To see multilingual code blocks in action, take a look at the [iOS events documentation](http://docs.photoeditorsdk.com/guides/ios/v7/concepts/events).
