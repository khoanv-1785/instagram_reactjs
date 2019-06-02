import {
    SIGN_IN,
    SIGN_IN_SUCCESS, 
    SIGN_IN_ERROR,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
} from '../constants/actionTypes'

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        user,
    }
}

export const signInSuccess = (response) => {
    return {
        type: SIGN_IN_SUCCESS,
        response
    }
}

export const signInError = error => {
    return {
        type: SIGN_IN_ERROR,
        error
    }
}

export const signUp = user => {
    return {
        type: SIGN_UP,
        user
    }
}

export const signUpSuccess = token => {
    return {
        type: SIGN_UP_SUCCESS,
        token,
    }
}

export const signUpError = error => {
    return {
        type: SIGN_UP_ERROR,
        error,
    }
}