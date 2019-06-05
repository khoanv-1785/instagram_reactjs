import { call, put, takeLatest, all, select } from 'redux-saga/effects'
import {
    FETCH_POSTS,
    ADD_COMMENT,
} from '../constants/actionTypes'
import {
    fetchPostsSuccess,
    fetchPostsError,
    fetchPosts,
} from '../actions/postActions'
import { fetchPostsAPI, addCommentAPI } from '../api/postAPI'

function* workFetchPostsSaga(action) {
    try {
      const response = yield call(fetchPostsAPI, action.pageNumber)
      const { posts, meta : {currentPage, nextPage, totalPages }} = response.data
      yield put(fetchPostsSuccess({posts, currentPage, nextPage, totalPages}))

    } catch (err) {
        yield put(fetchPostsError(err))
    }
}

function* watchFetchPostsSaga() {
    yield takeLatest(FETCH_POSTS, workFetchPostsSaga)
}

// add comment to post
function* workAddCommentSaga(action) {
   try {
    const response = yield call(addCommentAPI, action.postId, action.commentBody)
   } catch(err) {
       console.log(err)
   }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT, workAddCommentSaga)
}

export {
    watchFetchPostsSaga,
    watchAddComment
}