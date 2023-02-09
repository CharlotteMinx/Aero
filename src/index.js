import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import css from "./styles/variables.css"
ReactDOM.render(<App className={css.app} />, document.getElementById('app'))
