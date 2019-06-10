import {
    GET_POSTS_BY_USERNAME,
    GET_POSTS_BY_USERNAME_SUCCESS,
    GET_USER_PUBLIC_PROFILE_SUCCESS,
} from '../constants/actionTypes'
const profileInitialState = {
    isFetching: false,
    posts: [],
    profilePagination: {},
    publicProfile: {},
}
const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_USERNAME:
            return {
                ...state,
                isFetching: true,
            }
        case GET_POSTS_BY_USERNAME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.data.posts,
                profilePagination: action.data.meta,
            }

        case GET_USER_PUBLIC_PROFILE_SUCCESS:
            return {
                ...state,
                publicProfile: action.publicProfile
            }
        default:
            return state
    }
}

export default profileReducer