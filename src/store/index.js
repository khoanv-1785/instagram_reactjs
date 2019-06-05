import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'react-router-redux'
import rootSaga from '../saga/index';
// import createHistory from 'history/createBrowserHistory'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore(
		rootReducer, 
		composeEnhancers(applyMiddleware(sagaMiddleware))
	)
	sagaMiddleware.run(rootSaga);
	return store;
}