$(window).ready(function () {
	console.log('Ahhhhhhh!', $('.image-carousel'))
  const toggle = $('.js-toggle-navigation')
  const navigation = $('.js-navigation')
  toggle.click(() => {
    $(navigation).toggleClass('is-visible')
  })

  const versionPicker = $('.js-toggle-version-picker')
  const content = $('.js-version-picker-content')
  versionPicker.click(() => {
    $(content).toggleClass('is-visible')
	})
	$('.image-carousel').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000
	})
})

// Used to toggle different languages in code blocks
function showCodeBlockLanguage(event, codeblock_id, language_id, prefix) {

	if (!prefix) {
		prefix = "multilingual-code-block"
	}
	let rootElement = document.getElementById(codeblock_id)

	let tabcontents = rootElement.getElementsByClassName(prefix + "__tabcontents__item")
	for (i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = 'none'
	}

	let tabbuttons = rootElement.getElementsByClassName(prefix + "__tabs__button")
	for (i = 0; i < tabbuttons.length; i++) {
		tabbuttons[i].className = tabbuttons[i].className.replace(" is-active", "")
	}

	document.getElementById(codeblock_id + '_' + language_id).style.display = "block"
	event.currentTarget.className += " is-active"
}




function createIFrameWithCode (element, html) {
	const iframe = document.createElement('iframe')
	iframe.style = 'width: 100%; height: 100%; border: 0'
	element.innerHTML = ''
	element.appendChild(iframe)
	iframe.contentWindow.document.open()
	iframe.contentWindow.document.write(html)
	iframe.contentWindow.document.close()
}

function createPESDKIFrame (element, code = '', baseurl = 'http://static.photoeditorsdk.com/demo/') {
	const html = `
	<!DOCTYPE html>
<html>
  <head>
    <!-- React Dependencies for the SDK UI -->
    <script src="${baseurl}/js/vendor/react.production.min.js"></script>
    <script src="${baseurl}/js/vendor/react-dom.production.min.js"></script>
    <script src="${baseurl}/js/vendor/prop-types.min.js"></script>
    <!-- PhotoEditor SDK-->
    <script src="${baseurl}/js/PhotoEditorSDK.min.js"></script>
    <!-- PhotoEditor SDK UI -->
    <script src="${baseurl}/js/PhotoEditorSDK.UI.DesktopUI.min.js"></script>
    <link rel="stylesheet" href="${baseurl}/css/PhotoEditorSDK.UI.DesktopUI.min.css" />
  </head>

  <body style="overflow: hidden; margin: 0">
		<div id="editor" style="width: 100vw; height: 100vh;"></div>
		<div style='display: none' id="err"></div>
		<script>
		  var PESDK_ASSETS_URL = '${baseurl}/assets/'
			var PESDK_LICENSE_STRING = '{"owner":"Imgly Inc.","version":"2.1","enterprise_license":true,"available_actions":["magic","filter","transform","sticker","text","adjustments","brush","focus","frames","camera"],"features":["adjustment","filter","focus","overlay","transform","text","sticker","frame","brush","camera"],"platform":"HTML5","app_identifiers":["photoeditorsdk.com","*.photoeditorsdk.com","localhost","127.0.0.1"],"api_token":"1xGBv1RhFBWENvLqYY-wlw","domains":["https://api.photoeditorsdk.com"],"issued_at":1498486036,"expires_at":null,"signature":"E80kO7c0z5cDRAZqBrOY71IZOyfs2Z099yPeVg+sefHxNsWr4KHAQEbkvXbUrz+BFRZoBBL1rwMpLITaUUXaQXk9Az/y+xWBVF+V0LsdcDknY6SHdMSJt3jQFR7tmY0lBqX7GlrMZQa57Z08D4b6xEbO9+WawUmQWR4segqRJDlVyVABegtgw/5TfjAFApW7QEB/J9SexOHO7J3KU3jQ5YWk3JB364dB/rqDs2JKoMU1yTcSQ0XWVbEmT0v6FzTZd8mQ0cUBhsSst7tEsjokmKcjYcQ1WgQepItcv8I/M10EzhvG/V4H54GCShAnS60tigwj7ZqnUQUCGd3BwKrppKQwrWDA2EMx1NlEbZ+AMdBEGaj27JbNznxVB80vKGKsKOBl0U8+H1zYdERhQ71OQ1dYbFKP8Gr9W6HAI3xWNynrFjcWOVMSw+7qBGbc7ptwbyi2mgjc3cV/NKwl002i92N6FGvRpTfIT1bt6UH+ZZvcrLTYXYmiaww6urSThRfYijCe7xHjP/6ZNeS4BbBya+2b6ws9MtWD3jnkXgfKiu1Lukbe6yE8LC16ag9z/Qvld79/QDniMJn2feIAQh3nP2QKzEfHysRff5lDEhBX1sFlb8sgdq8DUQkAqciVezG/6PUKDjAFWw9I68IRHJ3h5Q3YmCWt8kZiCgincOr9eoM="}'
			${code}
    </script>
  </body>
</html>
	`

	createIFrameWithCode(element, html)
}