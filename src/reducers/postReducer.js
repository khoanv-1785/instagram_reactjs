import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,

} from '../constants/actionTypes'
const initialState = {
    isFetching: false,
    currentPage: 0,
    nextPage: 0,
    prevPage: 0,
    totalPages: 0,
    posts: [],
    errors: [],
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_POSTS_SUCCESS:
            state.posts = state.posts.concat(action.data.posts)
            return {
                ...state,
                isFetching: false,
                currentPage: action.data.currentPage,
                nextPage: action.data.nextPage,
                totalPages: action.data.totalPages,

            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: action.errors,
            }
        default:
            return state
    }
}

export default postReducer