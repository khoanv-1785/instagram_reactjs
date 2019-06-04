import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR
} from '../constants/actionTypes'

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
    }
}

export const fetchPostsSuccess = (data) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        data,
    }
}

export const fetchPostsError = (errors) => {
    return {
        type: FETCH_POSTS_ERROR,
        errors,
    }
}