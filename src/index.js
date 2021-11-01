import 'react-hot-loader'

import React from 'react'
import ReactDOM from 'react-dom'

import 'assets/scss/material-kit-react.css?v=1.3.0'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()

if (!localStorage.getItem('confirmOk')) {
  window.confirm(
    'На этом сайте есть ошибки, не использовать как опорный. Поситите новый проект madinah.best'
  )
  localStorage.setItem('confirmOk', true)
}
