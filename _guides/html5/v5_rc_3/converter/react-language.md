---
layout: guides/content
title: &title Language Converter - React
description: Convert the old custom language file to the new format

platform: html5
version: v5_rc_3
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
<script src="/assets/js/reactLanguageConverter.js"></script>
<br/>
Upload the old file and click on "Convert File". The converter will provide you the new file.
<input id="jsonfile" type="file" accept=".json" name="lang" />
<input id="convertButton" type="button"  value="Convert File" onclick="convertReact(this);" />
<div id="output"></div>
<br/>
<div class="documentation__disclaimer">
<h4 id="cors">Warning</h4> 
  1. Please check the structure of your old language file and the correctness of the generated language file.<br/> 
  2. If anything is wrong, please contact support.<br/>
  3. Please make sure you are using a modern browser.
</div>
