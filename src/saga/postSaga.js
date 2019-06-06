import { call, put, takeLatest, all, select } from 'redux-saga/effects'
import {
    FETCH_POSTS,
    ADD_COMMENT,
    LOAD_MORE_COMMENT,
} from '../constants/actionTypes'
import {
    fetchPostsSuccess,
    fetchPostsError,
    addCommentSuccess,
    loadMoreCommentSuccess,
} from '../actions/postActions'
import { fetchPostsAPI, addCommentAPI, loadMoreCommentAPI } from '../api/postAPI'

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
    yield put(addCommentSuccess(action.postId, response.data.comment))
   } catch(err) {
       console.log(err)
   }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT, workAddCommentSaga)
}

function* workLoadMoreCommentSaga(action) {
    try {
        const { postId, currentPage } = action
        const response = yield call(loadMoreCommentAPI, postId, currentPage)
        yield put(loadMoreCommentSuccess(postId, response.data.comments))
    } catch(err) {
        // hadle error
    }
}

function* watchLoadMoreCommentSaga() {
    yield takeLatest(LOAD_MORE_COMMENT, workLoadMoreCommentSaga)
}

export {
    watchFetchPostsSaga,
    watchAddComment,
    watchLoadMoreCommentSaga,
}