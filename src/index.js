import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import App from './components/App'
import './css/index.css'

library.add(faCoffee, faFacebook)

ReactDOM.render(<App />, document.getElementById('root'))
