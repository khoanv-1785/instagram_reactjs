import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from './store/index'
import './styles/vendors/cssgram.min.css'
import './styles/vendors/normalize.css'
import './styles/vendors/skeleton.css'

const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')

);
serviceWorker.unregister();
