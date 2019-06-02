import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR
} from '../constants/actionTypes'

const initialState = {
   isSignIn: false,
   user: '',
   error: ''
}

const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}
export default signInReducer