---
layout: guides/content
title: &title FAQ # title as shown in the menu and
description: A collection of frequently asked questions for the PhotoEditor SDK for iOS including framework size, Swift, Delta updates, Bitcode and app thinning.
menuitem: *title
order: 4
platform: ios
version: v10
category:
  - guide
  - introduction
  - faq
tags: &tags # tags that are necessary
  - photo editor
published: true # Either published or not
---

{% assign faqPages = site.guides | where: "version", "v10" | where: "faq", true | where: "platform", "ios" | sort: "order" %}

{% assign general = faqPages | where: "faq-category", "general" %}
{% assign errors = faqPages | where: "faq-category", "errors" %}
{% assign license = faqPages | where: "faq-category", "license" %}


## License

{% for page in license %}
[{{ page.title }}]({{ page.url }})
{% endfor %}

## General

{% for page in general %}
[{{ page.title }}]({{ page.url }})
{% endfor %}

## Common Errors

{% for page in errors %}
[{{ page.title }}]({{ page.url }})
{% endfor %}


### Anything missing?

Did you not find the answer to your question on this page? Feel free to [contact us](https://support.photoeditorsdk.com) and we will be more than happy to help!
