import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR
} from '../constants/actionTypes'

const initialState = {
    isSignUp: false,
    token: '',
    errors: [],
    isSuccess: false,
}
const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                isSignUp: true,
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isSignUp: false,
                token: action.token,
                errors: [],
                isSuccess: true,
            }
        case SIGN_UP_ERROR:
            return {
                ...state,
                isSignUp: false,
                errors: action.errors,
                token: '',
            }
        default:
            return state
    }
}

export default signUpReducer