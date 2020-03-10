import React, { Component } from 'react'

import { UIEvent, deepmergeAll, PhotoEditorSDKUI, PhotoEditorSDKUIComponent } from 'photoeditorsdk'
import { ExampleLibraryProvider } from './provider'
// import { custom } from './customconf'
// import { tools } from './toolconf'
import { initControls } from './controls'
import './utils'
// import './app.css'

class App extends Component {
  state = { loaded: false }
  /** set loadingLocalImage to true to work with local image */
  loadingLocalImage = true
  /** If this config is changed the it will always override the control gui settings */
  userConfig = {
    image: 'https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg',
    // layout: 'basic',
    // order: 'reverse',
    // theme: 'light',
    engine: {
      license: '{"api_token":"sg46Yc7FMggIXP_qmN2exg","app_identifiers":["localhost"],"available_actions":[],"domains":["https://api.photoeditorsdk.com"],"enterprise_license":false,"expires_at":null,"features":["camera","library","export","customassets","whitelabel","adjustment","brush","filter","focus","frame","overlay","sticker","text","textdesign","transform"],"issued_at":1580307432,"minimum_sdk_version":"1.0","owner":"","platform":"HTML5","products":["pesdk"],"version":"2.4","signature":"MQsTKUkJ0YTekRm1cjSVqXfwybqEVdENQSxvu73XePbmuBuZxR6UcRL1Ot+yOT9DcCA5/mprxQmi4G+ex5iu0dKwF+UlW3H+XJLXgl0Cg19q1PmB3xW+1yiP6J3oqu4GSjwVeLALJWsmz7Fkep1YaTAsBl/nt2ttogBpQdc0rWNLscOvIhVIcJ2NBwOb9QgaHtJW6DdAwuRENld92atBcyQIGjVXuEZj5Ef/zwLwonXObufccMS9M1elCfhzrLtAZZ/D/E0gqp1FDk8FuetMEeCGZP18Fcra75MNcTg/cEnkAHUBYyO9yhmAqTt+Dj3BgMKED4utHW0oq2P338Vyhu3tEYbOZqQJhjAqYwqR6UBRNDfMsL6A99cfWR01RkF07qNW2qCxDe6fqYejoAPIkRwtFblLrrvbNsvXc3J1otTuw+rVQiZIsfjt6Zd/4keabg8+S8LLpGaSuS+uvfMRb7fepy26o4G8nJZI+t1RH6KHDGXsOJSAmwLCs8hpxrCFvWtvDOy9RZkSGUhM5NfIGwuN4VMMC6ej4t8ett/79EULsbeKFQdTHPM/Uk/tEPZM74R/G7Ei04J+rygkNvOWekh2+lkL1hSMzGoY3lZ+YfUj4FnF7o03L8kvVwmaiAsYoXJmDa/XYIVl15bQKKzVMMtaXGlBIzzviaM3sN2zvtU="}',
    },
    library: {
      enableUpload: true,
      enableWebcam: true,
      provider: ExampleLibraryProvider,
    },
    // ...tools,
    // custom,
  }
  config = this.userConfig
  editor = null
  pesdk = null
  constructor(props) {
    super(props)
    this.pesdk = React.createRef()
  }

  componentDidMount() {
    // const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount))
    // const { controllers, config } = initControls(this.serialize, this.deserialize, this.exportfn)
    // controllers.forEach((controller) => {
    //   controller.onFinishChange(async () => {
    //     this.config = null
    //     this.forceUpdate()
    //     await wait()
    //     const changedConfig = JSON.unflatten(config)
    //     this.config = deepmergeAll([changedConfig, this.userConfig])
    //     this.editor.dispose()
    //     this.init()
    //   })
    // })
    // this.init()
    var ui = this.pesdk.current.ui
    // You can register event callbacks and access
    // all SDK function through the ui property
    ui.on(UIEvent.EDITOR_READY, () => {
      console.log(ui, this.pesdk.current)
    })
    console.log(this.pesdk.current.editor)

  }

  exportfn = () => {
    this.editor.export(false).then((image) => {
      console.log(image)
    })
  }

  serialize = (options) => {
    this.editor.serialize(options).then((serialized) => {
      if (options.mode === 'download') {
        var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(serialized, true, 2))
        var link = document.createElement('a')
        link.setAttribute('href', dataStr)
        link.setAttribute('download', 'serialization-3.8.0.json')
        link.click()
      } else if (options.mode === 'log') {
        console.log(JSON.stringify(serialized, true, 2))
      }
    })
  }

  deserialize = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'application/JSON'
    fileInput.addEventListener('change', () => {
      if (fileInput.files == null || !fileInput.files.length) { return }
      const file = fileInput.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        const data = JSON.parse(reader.result)
        this.editor.deserialize(data).then(() => {
          console.log('Finished deserialization')
        }).catch((error) => { console.error('errror', error) })
      }
      reader.readAsText(file)
    })
    fileInput.click()
  }

  init() {
    /** Example of loading alocal image  */
    // if (this.loadingLocalImage) {
    //   const image = new Image()
    //   image.onload = () => {
    //     this.config.image = image
    //     this.initEditor()
    //   }
    //   image.src = './example.png'
    // } else {
    //   this.initEditor()
    // }
  }

  initEditor() {
    this.setState({ loaded: true })
    // this.editor = new PhotoEditorSDKUI({ ...this.config, container: document.getElementById('container') })
    window.editor = this.editor
    // this.editor.on(UIEvent.EDITOR_READY, () => {
    //   // console.log('Editor is ready')
    // })
    // this.editor.on(UIEvent.EXPORT, (imageSrc) => {
    //   // console.log('exported', imageSrc)
    // })
  }

  render() {
    return (
      <div id="container" className="container">
        <PhotoEditorSDKUIComponent {...this.config} ref={this.pesdk} />
      </div>
    )
  }
}

export default App;
