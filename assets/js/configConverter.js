 /*
 *  DesktopConfig
 */

let clipboard;

var desktopUIConfig = {
    license: null,                  //string
    container: null,                //DOMElement
    language: null,                 //string
    logLevel: null,                 //string - ['trace','info','warn','error','log']
    responsive: null,               //boolean
    preloader: null,                //boolean
    crossOrigin: null,              //String?  [anonymous,use-credentials,none]
    assets: {                       //Object
        baseUrl: null,              //String
        resolver: null              //Function
    },
    editor: {
        image: null,                //Image? (URL maybe)
        pixelRatio: null,           //Number
        preferredRenderer: null,    //String
        forceCrop: null,            //Boolean
        transparent: null,          //Boolean
        clearColor:null,            //Array, String or PhotoEditorSDK.Color
        displayCloseButton:null,    //Boolean
        displayResizeMessage:null,  //Boolean
        maxMegaPixels:{             //Object
            desktop:null,           //Number
            mobile:null             //Number
        },
        enableDrag: null,           //Boolean
        enableZoom: null,           //Boolean
        enablePositionSnapping:null,//Boolean
        enableRotationSnapping:null,//Boolean
        enableExport:null,          //Boolean
        smoothDownscaling:null,     //Boolean
        tools: null,                //Array - [transform, filter, adjustments, focus, text, textdesign, sticker, brush, frame, overlay]
        defaultControl: null,       //String
        controlsOrder: null,        //Array - [library, transform, filter, adjustments, focus, text, textdesign, sticker, brush, frame, overlay]
        operationsOrder: null,      //Array
        controlsOptions: null,      //Object
        snappingOptions: {          //Object
            position: {             //Object
                threshold: null,    //number
                padding: {          //Object
                    left: null,     //Number
                    right: null,    //Number
                    top: null,      //Number
                    bottom: null,   //Number
                }
            },
            rotation: {
                angels: null,       //Array - [0, 45, 90, 135, 180, 225, 270, 315]
                threshold: null     //Number
            }
        },
        export: {                   //Object
            format: null,           //String
            type: null,             //PhotoEditorSDK.RenderType
            download: null,         //Boolean
            fileBasename: null,     //String
            quality: null           //number
        }
    }            
}

function getNewConfigFromDesktopConfig(desktopobj){
    return {
        container: getElementOfObject('container', desktopobj),
        image: getElementOfObject('image',getObjectOfObject('editor',desktopobj)),
        language: getStringOfObject('language', desktopobj),
        assetBaseUrl: getStringOfObject('baseUrl',getObjectOfObject('assets',desktopobj)),
        displayResizeWarning: getBooleanOfObject('displayResizeMessage',getObjectOfObject('editor',desktopobj)),
        enableZoom: getBooleanOfObject('enableZoom',getObjectOfObject('editor',desktopobj)),
        tools: getElementOfObject('tools',getObjectOfObject('editor',desktopobj)),
        snapping: {
            position: {
                enabled: getBooleanOfObject('enablePositionSnapping',getObjectOfObject('editor',desktopobj)),
                threshold: getElementOfObject('threshold',getObjectOfObject('position',getObjectOfObject('snappingOptions',getObjectOfObject('editor',desktopobj)))),
            },
            rotation: {
                enabled: getBooleanOfObject('enableRotationSnapping',getObjectOfObject('editor',desktopobj)),
                threshold: getElementOfObject('threshold',getObjectOfObject('rotation',getObjectOfObject('snappingOptions',getObjectOfObject('editor',desktopobj)))),
                angels: getElementOfObject('angels',getObjectOfObject('rotation',getObjectOfObject('snappingOptions',getObjectOfObject('editor',desktopobj)))),
            }
        },
        export: {
            image: {
                exportType: getElementOfObject('type',getObjectOfObject('export',getObjectOfObject('editor',desktopobj))),
                format: getElementOfObject('format',getObjectOfObject('export',getObjectOfObject('editor',desktopobj))),
                quality: getElementOfObject('quality',getObjectOfObject('export',getObjectOfObject('editor',desktopobj))),
                enableDownload: getBooleanOfObject('download',getObjectOfObject('export',getObjectOfObject('editor',desktopobj))),
            },
            filename: getStringOfObject('fileBasename',getObjectOfObject('export',getObjectOfObject('editor',desktopobj))),
        },
        engine: {
            license: getStringOfObject('license', desktopobj),
            crossOrigin: getStringOfObject('crossOrign',desktopobj), //Convert None to ''
        },
    }
}

/*
    RegEx Functions
*/

function getElementOfObject(regexstring, objstring){
    if(objstring){
        let stringpart = objstring.match(new RegExp('(' + regexstring + '\:.*\,)', 'g'))
        if(stringpart){
            return stringpart[0].split(':')[1].split(',')[0]
        }
        else{
            return null
        }
    }
}

function getObjectOfObject(regexstring, objstring){
    try{
        let stringpart = objstring.match(new RegExp('(' + regexstring + '\: *\{((\{.*\})*|[^{}])*\} *\,)', 'g'))[0]
        if(stringpart){
            return stringpart
        }
        else{
            return null
        }
    }catch(e){
        console.log('error')
        return null
    }
}

function getBooleanOfObject(regexstring, objstring){
    if(objstring){
        let stringpart = objstring.match(new RegExp('(' + regexstring + '\:.*\,)', 'g'))
        if(stringpart){
            if(stringpart[0].split(':')[1].split(',')[0].includes('true')){
                return true
            }
            else if(stringpart[0].split(':')[1].split(',')[0].includes('false')){
                return false
            }
            else{
                return false
            } 
        }
        else{
            return null
        }
    }
}
function getStringOfObject(regexstring, objstring){
    if(objstring){
        let stringpart = objstring.match(new RegExp('(' + regexstring + '\: *\'.*\'\,)', 'g'))
        if(stringpart){
            return "'" + stringpart[0].split("'")[1] + "'"
        }
        else{
            return null
        }
    }
}



/* 
 * General Functions
*/

function filterObjects(obj){
    for(let key in obj){
        if(!(obj[key] === null || obj[key] === undefined) && typeof obj[key] === 'object'){
            filterObjects(obj[key])
            if(Object.keys(obj[key]).length === 0){
                delete obj[key]
            }
        }
        if(obj[key] === null || obj[key] === undefined) {
            delete obj[key]
        }
    }
    return obj
}

function iterateOverObject(object, tab){
    let objstring = ''
    Object.keys(object).forEach(function(key) {
        objstring += ' \t '.repeat(tab)
        if(object[key] !== null && typeof object[key] === 'object'){
            objstring += key + ': { \n '
            objstring += iterateOverObject(object[key],tab+1)
            objstring += ' \t '.repeat(tab)
            objstring += '},'
        }else{
            objstring += key + ':' + object[key] + ','  
        }
        objstring += ' \n '
    })
    return objstring
}


function createNewObject(object){
    return 'const editor = new PhotoEditorSDKUI({ \n' + iterateOverObject(object,1) + '})'
}


function configToNewConfig(oldConfig){
    let output = ''
    try{
        let desktopUIString =  oldConfig.replace(/(\r\n|\n|\r)/gm, "").match(/PhotoEditorSDK.UI.DesktopUI\(\{.+\}\)/g)[0].split("(")[1]
        if(desktopUIString){
            let desktopobj = JSON.parse(JSON.stringify(desktopUIString.substring(0,desktopUIString.length-1)))
            output = getNewConfigFromDesktopConfig(desktopobj)
        }
        return createNewObject(filterObjects(output));
    }catch(e){
        console.log(e)
        return '<h1>Unvaild Config</h1><br/>Please make sure that your old Configuration is valid'
    }
}


function writeConfig(convertedJson){
	let outputnode = document.getElementById('output_config');
	outputnode.innerHTML = convertedJson.replace(/(?:\r\n|\r|\n)/g, '<br>').replace(/(?:\t)/g, '&#8195;');
}

function convertConfig(textarea) {
    let convertedConfig = configToNewConfig(textarea.value);
    clipboard = convertedConfig;
	writeConfig(convertedConfig);
}


function copyToClipboard(){
    navigator.clipboard.writeText(clipboard)
}