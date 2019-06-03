import { watchSignInSaga, watchSignUpSaga } from './userAuthenSaga'
import { all } from 'redux-saga/effects';

export default function * rootSaga () {
	yield all([
		watchSignInSaga(),
		watchSignUpSaga(),
	])
}

