import { watchSignInSaga, watchSignUpSaga } from './userAuthenSaga'
import { watchFetchPostsSaga } from './postSaga'
import { all } from 'redux-saga/effects';

export default function * rootSaga () {
	yield all([
		watchSignInSaga(),
		watchSignUpSaga(),
		watchFetchPostsSaga(),
	])
}

