import { call, put, takeLatest } from 'redux-saga/effects'
import {
    FETCH_POSTS,
    ADD_COMMENT,
    LOAD_MORE_COMMENT,
    DELETE_COMMENT,
    GET_POSTS_BY_USERNAME,
    LIKE_POST,
    DISLIKE_POST,
    UPLOAD_POST,
} from '../constants/actionTypes'
import {
    fetchPostsSuccess,
    fetchPostsError,
    addCommentSuccess,
    loadMoreCommentSuccess,
    deleteCommentSuccess,
    likePostSuccess,
    dislikePostSuccess,
} from '../actions/postActions'
import { getPostsByUsernameSuccess } from '../actions/profileActions'
import {
    fetchPostsAPI,
    addCommentAPI,
    loadMoreCommentAPI,
    deleteCommentAPI,
    getPostsByUsernameAPI,
    likePostAPI,
    disLikePostAPI,
    uploadPostAPI,
} from '../api/postAPI'

function* workFetchPostsSaga(action) {
    try {
        const response = yield call(fetchPostsAPI, action.pageNumber)
        const { posts, meta: { currentPage, nextPage, totalPages } } = response.data
        yield put(fetchPostsSuccess({ posts, currentPage, nextPage, totalPages }))

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
    } catch (err) {
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
    } catch (err) {
        // hadle error
    }
}

function* watchLoadMoreCommentSaga() {
    yield takeLatest(LOAD_MORE_COMMENT, workLoadMoreCommentSaga)
}

//delete comment by id
function* workDeleteCommentSaga(action) {
    try {
        const { postId, commentId } = action
        const response = yield call(deleteCommentAPI, postId, commentId)
        yield put(deleteCommentSuccess(postId, commentId))
    } catch (err) {
        // handle error
    }
}

function* watchDeleteCommentSaga() {
    yield takeLatest(DELETE_COMMENT, workDeleteCommentSaga)
}

function* workGetPostsByUsernameSaga(action) {
    try {
        const response = yield call(getPostsByUsernameAPI, action.username, action.pageNumber)
        yield put(getPostsByUsernameSuccess(response.data))
    } catch (err) {
        // handle error
    }
}

function* watchGetPostsByUsernameSaga() {
    yield takeLatest(GET_POSTS_BY_USERNAME, workGetPostsByUsernameSaga)
}

function* workLikePostSaga(action) {
    try {
        const response = yield call(likePostAPI, action.postId)
        console.log(response)
    } catch (err) {
        // handle error
    }
}

function* watchLikePostSaga() {
    yield takeLatest(LIKE_POST, workLikePostSaga)
}

function* workDisLikePostSaga(action) {
    try {
        const response = yield call(disLikePostAPI, action.postId)
        console.log(response)
    } catch (err) {
        // handle error
    }
}

function* watchDisLikePostSaga() {
    yield takeLatest(DISLIKE_POST, workDisLikePostSaga)
}

function* workUploadPostSaga(action) {
    try {
        const response = yield call(uploadPostAPI, action.formData)
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

function* watchUploadPostSaga() {
    yield takeLatest(UPLOAD_POST, workUploadPostSaga)
}
export {
    watchFetchPostsSaga,
    watchAddComment,
    watchLoadMoreCommentSaga,
    watchDeleteCommentSaga,
    watchGetPostsByUsernameSaga,
    watchLikePostSaga,
    watchDisLikePostSaga,
    watchUploadPostSaga,
}