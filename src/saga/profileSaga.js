import { call, put, takeLatest } from 'redux-saga/effects'
import {
    GET_USER_PUBLIC_PROFILE,
    GET_MORE_POSTS_BY_USERNAME,
} from '../constants/actionTypes'
import { getUserPublicProfileSuccess } from '../actions/profileActions'
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
        console.log(response)
    } catch (err) {
        // handle error
    }
}

function* watchGetMorePostsByUsernameSaga() {
    yield takeLatest(GET_MORE_POSTS_BY_USERNAME, workGetMorePostsByUsernameSaga)
}

export {
    watchGetUserPublicProfileSaga,
    watchGetMorePostsByUsernameSaga
}