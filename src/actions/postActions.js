import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_ERROR,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
   
} from '../constants/actionTypes'

export const fetchPosts = (pageNumber) => {
    return {
        type: FETCH_POSTS,
        pageNumber,
    }
}

export const fetchPostsSuccess = (data) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        data,
    }
}

export const fetchPostsError = errors => {
    return {
        type: FETCH_POSTS_ERROR,
        errors,
    }
}

// add comment
export const addComment = (postId, commentBody) => {
    return {
        type: ADD_COMMENT,
        postId,
        commentBody,
    }
}
