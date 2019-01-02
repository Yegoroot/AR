import React from 'react'
import ReactDOM from 'react-dom'

import 'assets/scss/material-kit-react.css?v=1.3.0'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
