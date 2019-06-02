import rootCounterSaga from '../saga/rootCounterSaga';
import { all } from 'redux-saga/effects';

export default function * rootSaga () {
	yield all([
		rootCounterSaga()
	])
}

