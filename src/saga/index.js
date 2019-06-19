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
	watchLikePostSaga,
	watchDisLikePostSaga,
	watchUploadPostSaga,
} from './postSaga'
import {
	watchGetUserPublicProfileSaga,
	watchGetMorePostsByUsernameSaga,
	watchLoadMoreCommentProfileSaga,
	watchDeleteCommentProfileSaga,
	watchAddCommentProfileSaga,
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
		watchGetMorePostsByUsernameSaga(),
		watchLoadMoreCommentProfileSaga(),
		watchDeleteCommentProfileSaga(),
		watchAddCommentProfileSaga(),
		watchLikePostSaga(),
		watchDisLikePostSaga(),
		watchUploadPostSaga(),
	])
}

