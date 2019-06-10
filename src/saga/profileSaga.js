import { call, put, takeLatest } from 'redux-saga/effects'
import {
    GET_USER_PUBLIC_PROFILE,
} from '../constants/actionTypes'
import { getUserPublicProfileSuccess } from '../actions/profileActions'
import { getUserPublicProfileAPI } from '../api/profileAPI'

function* wordGetUserPublicProfileSaga(action) {
    try {
      const response = yield call(getUserPublicProfileAPI, action.username)
      yield put(getUserPublicProfileSuccess(response.data.user))
    } catch (err) {
        // handle error
    }
}

function* watchGetUserPublicProfileSaga() {
    yield takeLatest(GET_USER_PUBLIC_PROFILE, wordGetUserPublicProfileSaga)
}

export {
    watchGetUserPublicProfileSaga
}