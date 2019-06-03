import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/vendors/cssgram.min.css'
import './styles/vendors/normalize.css'
import './styles/vendors/skeleton.css'

ReactDOM.render(
		<App />
	, document.getElementById('root')

);
serviceWorker.unregister();
