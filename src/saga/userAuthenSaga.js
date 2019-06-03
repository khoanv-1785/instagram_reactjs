import { call, put, takeLatest } from 'redux-saga/effects'
import { signUp, signIn } from '../api/userAuthenAPI'
import { signUpSuccess, signUpError } from '../actions/userAuthenAction'
import { SIGN_UP, SIGN_IN } from '../constants/actionTypes'

function* workSignUpSaga(action) {
     try {
        const result = yield call(signUp, action.user)
        if(!result.isAxiosError) {
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

function* watchSignUpSaga () {
    yield takeLatest(SIGN_UP, workSignUpSaga)
}

function* wordSignInSaga(action) {
    try {
        const result = yield call(signIn, action.user)
        console.log(result)
        if (!result.isAxiosError) {
            // handle call axios success
        } else {
            // handle call axios error
        }
    } catch(err) {
        console.log(err)
    }
}

function* watchSignInSaga() {
    yield takeLatest(SIGN_IN, wordSignInSaga)
}

export {
    watchSignUpSaga,
    watchSignInSaga,
}