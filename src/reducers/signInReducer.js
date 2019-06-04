import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR
} from '../constants/actionTypes'

const initialState = {
    isSignIn: false,
    user: {},
    errors: [],
    isSuccess: false,
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignIn: true
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignIn: false,
                user: action.user,
                errors: [],
                isSuccess: true,
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                isSignIn: false,
                user: {},
                errors: action.errors
            }
        default:
            return state
    }
}
export default signInReducer