import { call, put, takeLatest } from 'redux-saga/effects'
import { signUp, signIn } from '../api/userAuthenAPI'
import {
    signUpSuccess,
    signUpError,
    signInSuccess,
    signInError
} from '../actions/userAuthenAction'
import { SIGN_UP, SIGN_IN } from '../constants/actionTypes'

function* workSignUpSaga(action) {
    try {
        const result = yield call(signUp, action.user)
        if (!result.isAxiosError) {
            // handle success of axios.
            const { authenticationToken } = result.data.user
            localStorage.setItem('authenticationToken', authenticationToken)
            yield put(signUpSuccess(authenticationToken))
        } else {
            // handle error of axios
            const errors = result.response.data.errors
            yield put(signUpError(errors))
        }
    } catch (err) {
        // handle error of saga
        yield put(signUpError(err))
    }
}

function* watchSignUpSaga() {
    yield takeLatest(SIGN_UP, workSignUpSaga)
}

function* wordSignInSaga(action) {
    const user = {
        email: action.user.email_signin,
        password: action.user.password_signin,
    }
    try {
        const result = yield call(signIn, user)
        if (!result.isAxiosError) {
            // handle call axios success
            const { user } = result.data
            localStorage.setItem('authenticationToken', user.authenticationToken)
            yield put(signInSuccess(user))
        } else {
            // handle call axios error
            const { errors } = result.response.data
            yield put(signInError(errors))
        }
    } catch (err) {
        yield put(signInError(err))
    }
}

function* watchSignInSaga() {
    yield takeLatest(SIGN_IN, wordSignInSaga)
}

export {
    watchSignUpSaga,
    watchSignInSaga,
}