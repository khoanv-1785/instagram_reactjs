import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'react-router-redux'
import rootSaga from '../saga/index';
// import createHistory from 'history/createBrowserHistory'
const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
	sagaMiddleware.run(rootSaga);
	return store;
}