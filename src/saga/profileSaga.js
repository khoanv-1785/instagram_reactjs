import { call, put, takeLatest } from 'redux-saga/effects'
import {
    GET_USER_PUBLIC_PROFILE,
    GET_MORE_POSTS_BY_USERNAME,
    LOAD_MORE_COMMENT_PROFILE
} from '../constants/actionTypes'
import {
    getUserPublicProfileSuccess,
    getMorePostsByUsernameSuccess,
    loadMoreCommentProfileSuccess,
} from '../actions/profileActions'
import { loadMoreCommentAPI } from '../api/postAPI'
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

export {
    watchGetUserPublicProfileSaga,
    watchGetMorePostsByUsernameSaga,
    watchLoadMoreCommentProfileSaga,
}