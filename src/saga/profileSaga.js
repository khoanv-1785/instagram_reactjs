import { call, put, takeLatest } from 'redux-saga/effects'
import {
    GET_USER_PUBLIC_PROFILE,
    GET_MORE_POSTS_BY_USERNAME,
    LOAD_MORE_COMMENT_PROFILE,
    DELETE_COMMENT_PROFILE,
    ADD_COMMENT_PROFILE,
} from '../constants/actionTypes'
import {
    getUserPublicProfileSuccess,
    getMorePostsByUsernameSuccess,
    loadMoreCommentProfileSuccess,
    deleteCommentProfileSuccess,
    addCommentProfileSuccess,
} from '../actions/profileActions'
import {
    loadMoreCommentAPI,
    deleteCommentAPI,
    addCommentAPI,
} from '../api/postAPI'
import {
    getUserPublicProfileAPI,
    getMorePostsByUsernameAPI,
} from '../api/profileAPI'

function* workGetUserPublicProfileSaga(action) {
    try {
        const response = yield call(getUserPublicProfileAPI, action.username)
        yield put(getUserPublicProfileSuccess(response.data.user))
    } catch (err) {
        // handle error
    }
}

function* watchGetUserPublicProfileSaga() {
    yield takeLatest(GET_USER_PUBLIC_PROFILE, workGetUserPublicProfileSaga)
}

function* workGetMorePostsByUsernameSaga(action) {
    try {
        const response = yield call(getMorePostsByUsernameAPI, action.username, action.currentPage)
        yield put(getMorePostsByUsernameSuccess(response.data))
    } catch (err) {
        // handle error
    }
}

function* watchGetMorePostsByUsernameSaga() {
    yield takeLatest(GET_MORE_POSTS_BY_USERNAME, workGetMorePostsByUsernameSaga)
}

function* workLoadMoreCommentProfileSaga(action) {
    try {
        const response = yield call(loadMoreCommentAPI, action.postId, action.currentPage)
        yield put(loadMoreCommentProfileSuccess(action.postId, response.data.comments))
    } catch (err) {
        // handle error
    }
}

function* watchLoadMoreCommentProfileSaga() {
    yield takeLatest(LOAD_MORE_COMMENT_PROFILE, workLoadMoreCommentProfileSaga)
}

function* workDeleteCommentProfileSaga(action) {
    try {
        const { postId, commentId } = action
        const response = yield call(deleteCommentAPI, postId, commentId)
        yield put(deleteCommentProfileSuccess(postId, commentId))
    } catch (err) {
        // handle error
    }
}

function* watchDeleteCommentProfileSaga() {
    yield takeLatest(DELETE_COMMENT_PROFILE, workDeleteCommentProfileSaga)
}

// add commnent profile.
function* workAddCommentProfileSaga(action) {
    try {
        const  response = yield call(addCommentAPI, action.postId, action.commentBody)
        yield put(addCommentProfileSuccess(action.postId, response.data.comment))
    } catch (err) {
        // handle err
    }
}

function* watchAddCommentProfileSaga() {
    yield takeLatest(ADD_COMMENT_PROFILE, workAddCommentProfileSaga)
}

export {
    watchGetUserPublicProfileSaga,
    watchGetMorePostsByUsernameSaga,
    watchLoadMoreCommentProfileSaga,
    watchDeleteCommentProfileSaga,
    watchAddCommentProfileSaga,
}
