---
layout: guides/content
title: &title Language Converter
description: Convert the old language file to the new file

platform: html5
version: v5
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
<script src="/assets/js/languageConverter.js"></script>

<div class="documentation__disclaimer">
<h4 id="cors">Warning</h4> 
Please check the structure of your old language file and the correctness of the generated file.<br/> 
If anything is wrong, please contact the support<br/>
Please make sure you are using a modern browser.
</div>
<br/>
<input id="jsonfile" type="file" accept=".json" name="lang" />
<input id="convertButton" type="button"  value="Converting - Desktop" onclick="convertDesktop(this);" />
<input id="convertButton" type="button"  value="Converting - React" onclick="convertReact(this);" />
<div id="output"></div>
