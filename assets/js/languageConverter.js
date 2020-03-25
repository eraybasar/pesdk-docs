function writeLocal (convertedJson, button, textnode, filename){
	var url = URL.createObjectURL(new Blob([convertedJson], {type: "application/json"}));
	console.log(url)
	textnode.innerHTML = "<p><h3> Converted succeeded! <a href=\"" + url + "\" download=\"" + filename + "\" target=\"_blank\">Get file</a></h3></p>";
	button.disabled = false;
}

function convertDesktop(button) {
	var fileinput = document.getElementById('jsonfile');
	var outputnode = document.getElementById('output');
	
	if ((fileinput.files.length != 1)) return alert("You must select a jsonfile!");
	var filename = fileinput.files[0].name.split(".").slice(0, -1);
	button.disabled = true;
	var json_data;
	var json_file_reader = new FileReader();

	json_file_reader.onload = function() {
		json_data = json_file_reader.result;
		writeLocal(JSON.stringify(desktopUILangConvert(JSON.parse(json_data))), button, outputnode, filename);
	}

	json_file_reader.readAsText(fileinput.files[0])
}

function convertReact(button) {
	var fileinput = document.getElementById('jsonfile');
	var outputnode = document.getElementById('output');
	
	if ((fileinput.files.length != 1)) return alert("You must select a jsonfile!");
	var filename = fileinput.files[0].name.split(".").slice(0, -1);
	button.disabled = true;
	var json_data;
	var json_file_reader = new FileReader();

	json_file_reader.onload = function() {
		json_data = json_file_reader.result;
		writeLocal(JSON.stringify(reactUILangConvert(JSON.parse(json_data))), button, outputnode, filename);
	}

	json_file_reader.readAsText(fileinput.files[0])
}



function desktopUILangConvert(oldInput){
    console.log('desktop')
	if (oldInput && oldInput.pesdk) {
	const getLabel = (newLocale, attr1, attr2) => {
		if (attr2) {
		return newLocale && newLocale[attr1] && newLocale[attr1][attr2]
		}
		return newLocale && newLocale[attr1]
	}
	/** same as remove undefined without one call deep */
	const removeUndefinedRe = (nobj) => {
		return Object.keys(nobj).reduce((acc1, key1) => {
		if (nobj[key1]) {
			return { ...acc1, [key1]: nobj[key1] }
		}
		return acc1
		}, {})
	}
	const removeUndefined = (obj) => {
		return Object.keys(obj).reduce((acc, key) => {
		if (obj[key]) {
			if (typeof obj[key] === 'object') {
			return { ...acc, [key]: removeUndefinedRe(obj[key]) }
			}
			return { ...acc, [key]: obj[key] }
		}
		return acc
		}, {})
	}

	const editor = oldInput.pesdk.editor
	const common = oldInput.pesdk.common
	const library = oldInput.pesdk.library
	const filter = oldInput.pesdk.filter
	const transform = oldInput.pesdk.transform
	const adjustments = oldInput.pesdk.adjustments
	const focus = oldInput.pesdk.focus
	const text = oldInput.pesdk.text
	const textdesign = oldInput.pesdk.textdesign
	const sticker = oldInput.pesdk.sticker
	const brush = oldInput.pesdk.brush
	const frame = oldInput.pesdk.frame
	const overlay = oldInput.pesdk.overlay

	const newCommon = {
		error: getLabel(common, 'title', 'error')
	}

	const newFilter = {
		title: getLabel(filter, 'title', 'name'),
		items: getLabel(filter, 'asset')
	}

	const newAdjustment = {
		title: getLabel(adjustments, 'title', 'name'),
		controls: {
		buttonReset: getLabel(adjustments, 'button', 'reset')
		},
		categories: {
		basics: getLabel(adjustments, 'title', 'basics'),
		refinements: getLabel(adjustments, 'title', 'refinements')
		},
		items: adjustments.text
	}

	const newFocus = {
		title: getLabel(focus, 'title', 'name'),
		items: getLabel(focus, 'button'),
		controls: {
		buttonReset: getLabel(focus, 'button', 'none')
		}
	}

	const newOverlay = {
		title: getLabel(overlay, 'title', 'name'),
		items: getLabel(overlay, 'asset'),
		controls: {
		buttonReset: getLabel(overlay, 'button', 'none'),
		blendModeNormal: getLabel(overlay, 'title', 'normal'),
		blendModeOverlay: getLabel(overlay, 'title', 'overlay'),
		blendModeHardLight: getLabel(overlay, 'title', 'hardLight'),
		blendModeSoftLight: getLabel(overlay, 'title', 'softLight'),
		blendModeMultiply: getLabel(overlay, 'title', 'multiply'),
		blendModeDarken: getLabel(overlay, 'title', 'darken'),
		blendModeLighten: getLabel(overlay, 'title', 'lighten'),
		blendModeScreen: getLabel(overlay, 'title', 'screen'),
		blendModeColorBurn: getLabel(overlay, 'title', 'colorBurn')
		}
	}

	const newFrame = {
		title: getLabel(frame, 'title', 'name'),
		items: getLabel(frame, 'asset'),
		controls: {
		buttonReset: getLabel(frame, 'button', 'none'),
		selectColor: getLabel(frame, 'button', 'fill')
		}
	}

	const newBrush = {
		title: getLabel(brush, 'title', 'name'),
		controls: {
		sliderSize: getLabel(brush, 'title', 'width'),
		sliderHardness: getLabel(brush, 'title', 'hardness')
		}
	}

	const transformAsset = getLabel(transform, 'asset') || {}

	const newTransform = {
		title: getLabel(transform, 'title', 'name'),
		categories: {
		imgly_transforms_common: getLabel(transformAsset, 'imgly_transforms_common', 'name'),
		imgly_transforms_facebook: getLabel(transformAsset, 'imgly_transforms_facebook', 'name')
		},
		items: Object.keys(transformAsset).reduce((acc, categoryKey) => {
		const category = transform.asset[categoryKey]
		const items = Object.keys(category.asset).reduce((itemacc, itemKey) => ({ ...itemacc, [itemKey]: category.asset[itemKey] }), {})
		return { ...acc, ...items }
		}, {}),
		controls: {
		checkboxKeepResolution: transform.dimensions.lock,
		buttonReset: transform.button.reset
		}
	}

	const newLibrary = {
		title: getLabel(library, 'title', 'name'),
		controls: {
		placeholderSearch: getLabel(library, 'placeholder', 'search'),
		noResults: getLabel(library, 'text', 'noResults')
		}
	}

	const newSticker = {
		title: getLabel(sticker, 'title', 'name'),
		controls: {
		sliderOpacity: getLabel(sticker, 'title', 'opacity'),
		buttonUpload: getLabel(sticker, 'button', 'upload')
		},
		categories: {
		imgly_sticker_emoticons: getLabel(sticker, 'asset', 'imgly_sticker_emoticons'),
		imgly_sticker_shapes: getLabel(sticker, 'asset', 'imgly_sticker_shapes')
		},
		items: getLabel(sticker, 'asset')
	}

	const newText = {
		title: getLabel(text, 'title', 'name'),
		controls: {
		dropdownFontFamily: getLabel(text, 'title', 'font') + ' ' + getLabel(text, 'title', 'size'),
		buttonNew: text.button.new,
		selectBackgroundColor: getLabel(text, 'title', 'background')
		},
		canvasControls: {
		placeholderText: getLabel(text, 'placeholder', 'defaultText')
		}
	}

	const newTextdesign = {
		title: getLabel(textdesign, 'title', 'name'),
		controls: {
		buttonNew: getLabel(textdesign, 'button', 'new')
		},
		canvasActions: {
		buttonInvert: getLabel(textdesign, 'button', 'invert')
		}
	}

	const errorModals = {
		stickerLoading: {
		body: getLabel(sticker, 'text', 'stickerLoadingError')
		},
		fontLoading: {
		heading: getLabel(editor, 'title', 'fontLoadingError'),
		body: getLabel(editor, 'text', 'fontLoadingError')
		},
		rendering: {
		body: getLabel(editor, 'text', 'renderingError')
		},
		webcamUnavailable: {
		body: getLabel(editor, 'text', 'webcamUnavailableError')
		}
	}

	const infoModals = {
		loading: { heading: getLabel(editor, 'text', 'loading') },
		resizing: { heading: getLabel(editor, 'text', 'resizing') },
		loadingFonts: { heading: getLabel(editor, 'text', 'loadingFonts') },
		exporting: { heading: getLabel(editor, 'text', 'exporting') },
		saving: { heading: getLabel(editor, 'text', 'saving') }
	}

	const warningModals = {
		discardChanges: {
		title: getLabel(editor, 'title', 'discardChangesWarning'),
		body: getLabel(editor, 'text', 'discardChangesWarning'),
		buttonYes: getLabel(editor, 'button', 'discardChangesWarningDiscard'),
		buttonNo: getLabel(editor, 'button', 'discardChangesWarningKeep')
		},
		imageResized: {
		heading: getLabel(editor, 'title', 'imageResizedWarning_maxMegaPixels')
		}
	}

	const mainCanvasActions = {
		buttonExport: getLabel(editor, 'button', 'export'),
		buttonClose: getLabel(editor, 'button', 'close')
	}

	const newLocale = {
		common: removeUndefined(newCommon),
		mainCanvasActions: removeUndefined(mainCanvasActions),
		infoModals: removeUndefined(infoModals),
		warningModals: removeUndefined(warningModals),
		errorModals: removeUndefined(errorModals),
		library: removeUndefined(newLibrary),
		filter: removeUndefined(newFilter),
		adjustment: removeUndefined(newAdjustment),
		focus: removeUndefined(newFocus),
		overlay: removeUndefined(newOverlay),
		sticker: removeUndefined(newSticker),
		text: removeUndefined(newText),
		textdesign: removeUndefined(newTextdesign),
		frame: removeUndefined(newFrame),
		brush: removeUndefined(newBrush),
		transform: removeUndefined(newTransform)
	}
	console.log(newLocale)
	return newLocale
	} 
	else {
		console.error('input.pesdk is undefined')
	}
}



function reactUILangConvert(oldInput){
	if (oldInput && oldInput.pesdk) {
		const getLabel = (newLocale, attr1, attr2) => {
			if (attr2) {
			return newLocale && newLocale[attr1] && newLocale[attr1][attr2]
			}
			return newLocale && newLocale[attr1]
		}

		/** same as remove undefined without one call deep */
		const removeUndefinedRe = (nobj) => {
			return Object.keys(nobj).reduce((acc1, key1) => {
			if (nobj[key1]) {
				return { ...acc1, [key1]: nobj[key1] }
			}
			return acc1
			}, {})
		}
		const removeUndefined = (obj) => {
			return Object.keys(obj).reduce((acc, key) => {
			if (obj[key]) {
				if (typeof obj[key] === 'object') {
				return { ...acc, [key]: removeUndefinedRe(obj[key]) }
				}
				return { ...acc, [key]: obj[key] }
			}
			return acc
			}, {})
		}
		const adjustments = oldInput.pesdk.adjustments
		const brush = oldInput.pesdk.brush
		const camera = oldInput.pesdk.camera
		const common = oldInput.pesdk.common
		const editor = oldInput.pesdk.editor
		const filter = oldInput.pesdk.filter
		const focus = oldInput.pesdk.focus
		const frame = oldInput.pesdk.frame
		const sticker = oldInput.pesdk.sticker
		const transform = oldInput.pesdk.transform
		const text = oldInput.pesdk.text


		const newAdjustment = {
			title: getLabel(adjustments, 'title', 'name'),
			items: getLabel(adjustments, 'text',)
		}

		const newBrush = {
			title: getLabel(brush, 'title', 'name'),
		}

		const errorModals = {
			webcamUnavailable: {
				body: getLabel(camera, 'text', 'webcamUnavailable')
			}
		}

		const infoModals = {
			loading: { heading: getLabel(common, 'text', 'loading') },
		}

		const newCommon = {
			error: getLabel(common, 'title', 'error'),
			color:{
				name:  getLabel(common, 'text', 'color')
			}
		}

		const newFilter = {
			title: getLabel(filter, 'title', 'name'),
			controls:{
				sliderIntensity: getLabel(filter, 'text', 'intensity')
			},
			items: getLabel(filter, 'asset')
		}

		const newFocus = {
			title: getLabel(focus, 'title', 'name'),
			items: getLabel(focus, 'button')
		}

		const newFrame = {
			title: getLabel(frame, 'title', 'name'),
			items: getLabel(frame, 'asset')
		}

		const newSticker = {
			title: getLabel(sticker, 'title', 'name'),
			items: getLabel(sticker, 'asset')
		}

		const newText = {
			title: getLabel(text, 'title', 'name'),
			canvasControls: {
				placeholderText: getLabel(text, 'placeholder', 'defaultText')
			}
		}

		const mainCanvasActions = {
			buttonExport: getLabel(editor, 'button', 'export'),
			buttonClose: getLabel(editor, 'button', 'close')
		}

		const transformAsset = getLabel(transform, 'asset') || {}
        
		const newTransform = {
			title: getLabel(transform, 'title', 'name'),
			items: getLabel(transform, 'asset')
		}
        
		const warningModals = {
			imageResized: {
			    heading: getLabel(editor, 'title', 'imageResizedWarning_maxMegaPixels')
			}
		}

		const newLocale = {
			common: removeUndefined(newCommon),
			mainCanvasActions: removeUndefined(mainCanvasActions),
			infoModals: removeUndefined(infoModals),
			warningModals: removeUndefined(warningModals),
			errorModals: removeUndefined(errorModals),
			filter: removeUndefined(newFilter),
			adjustment: removeUndefined(newAdjustment),
			focus: removeUndefined(newFocus),
			sticker: removeUndefined(newSticker),
			text: removeUndefined(newText),
			frame: removeUndefined(newFrame),
			brush: removeUndefined(newBrush),
			transform: removeUndefined(newTransform)
		}
		
		console.log(newLocale)
		return newLocale
	} 
	else {
		console.error('input.pesdk is undefined')
	}
}