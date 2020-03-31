function writeLocal (convertedJson, button, textnode, filename){
	var url = URL.createObjectURL(new Blob([convertedJson], {type: "application/json"}));
	console.log(url)
	textnode.innerHTML = "<p><h3> Converted succeeded! <a href=\"" + url + "\" download=\"" + filename + "\" target=\"_blank\">Get file</a></h3></p>";
	button.disabled = false;
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
        try{
            writeLocal(JSON.stringify(reactUILangConvert(JSON.parse(json_data))), button, outputnode, filename);
        }
        catch(e){
            alert("An error has occurred. Please check your file")  
        }
	}

	json_file_reader.readAsText(fileinput.files[0])
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