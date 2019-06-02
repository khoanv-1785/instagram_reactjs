import {
    SIGN_UP,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR
} from '../constants/actionTypes'

const initialState = {
    isSignUp: false,
    token: 'Hoc vien cong nghe buu chinh vien thong',
    error: ''
}
const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default signUpReducer