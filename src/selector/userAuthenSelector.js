// lay ve state cua 2 reducer signInReducer va signUpReducer.
import { createSelector } from 'reselect'

const signInGlobalSelector = state => state.signInReducer
const signUpGlobalSelector = state => state.signUpReducer

// sign in selector
export const getIsSignInSelector = createSelector(signInGlobalSelector, signInReducer => signInReducer.isSignIn)
export const getUserSelecctor = createSelector(signInGlobalSelector, signInReducer => signInReducer.user)
export const getErrorSignInSelector = createSelector(signInGlobalSelector, signInReducer => signInReducer.errors)
export const getIsSuccessSignInSelector = createSelector(signInGlobalSelector, signInReducer => signInReducer.isSuccess)

// sign up selector
export const getIsSignUpSelector = createSelector(signUpGlobalSelector, signUpReducer => signUpReducer.isSignUp)
export const getTokenSelector = createSelector(signUpGlobalSelector, signUpReducer => signUpReducer.token)
export const getErrorSignUpSelector = createSelector(signUpGlobalSelector, signUpReducer => signUpReducer.errors)
export const getIsSuccessSignUpSelector = createSelector(signUpGlobalSelector, signUpReducer => signUpReducer.isSuccess)

// khi muon ket hop hai hay nhieu state cua reducer lai vs nhau.
export const getTestSelector = createSelector(
    [signInGlobalSelector, signUpGlobalSelector],
    (signInReducer, signUpReducer) => signInReducer.user + signUpReducer.token
)