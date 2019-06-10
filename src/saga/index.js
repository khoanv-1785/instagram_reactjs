import { 
	watchSignInSaga,
	watchSignUpSaga,
} from './userAuthenSaga'
import { 
	watchFetchPostsSaga, 
	watchAddComment,
	watchLoadMoreCommentSaga,
	watchDeleteCommentSaga,
	watchGetPostsByUsernameSaga,
} from './postSaga'
import {
	watchGetUserPublicProfileSaga,
} from './profileSaga'
import { all } from 'redux-saga/effects';

export default function * rootSaga () {
	yield all([
		watchSignInSaga(),
		watchSignUpSaga(),
		watchFetchPostsSaga(),
		watchAddComment(),
		watchLoadMoreCommentSaga(),
		watchDeleteCommentSaga(),
		watchGetPostsByUsernameSaga(),
		watchGetUserPublicProfileSaga(),
	])
}

