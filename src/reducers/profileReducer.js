import {
    GET_POSTS_BY_USERNAME,
    GET_POSTS_BY_USERNAME_SUCCESS,
    GET_USER_PUBLIC_PROFILE_SUCCESS,
    GET_MORE_POSTS_BY_USERNAME,
    GET_MORE_POSTS_BY_USERNAME_SUCCESS,
} from '../constants/actionTypes'
const profileInitialState = {
    isFetching: false,
    posts: [],
    profilePagination: {
        currentPage: 0,
        nextPage: 0,
        totalPages: 0,
        totalCount: 0
    },
    publicProfile: {},
}
const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_USERNAME:
            state.posts = []
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
        case GET_MORE_POSTS_BY_USERNAME:
                return {
                    ...state,
                    isFetching: true
                }
        case GET_MORE_POSTS_BY_USERNAME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                profilePagination: action.data.meta,
                posts: state.posts.concat(action.data.posts)

            }
        default:
            return state
    }
}

export default profileReducer