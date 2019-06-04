import { call, put, takeLatest, all } from 'redux-saga/effects'
import {
    FETCH_POSTS,

} from '../constants/actionTypes'
import {
    fetchPostsSuccess,
    fetchPostsError,
} from '../actions/postActions'
import { fetchPostsAPI } from '../api/postAPI'

function* workFetchPostsSaga() {
    try {
      const response = yield call(fetchPostsAPI)
      console.log(response)
    } catch (err) {
        console.log(err)
    }
}

function* watchFetchPostsSaga() {
    yield takeLatest(FETCH_POSTS, workFetchPostsSaga)
}

export {
    watchFetchPostsSaga
}