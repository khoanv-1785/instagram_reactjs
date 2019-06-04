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
    totalPage: 0,
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
            return {
                ...state,
                isFetching: false,
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching: false,
            }
        default:
            return state
    }
}

export default postReducer