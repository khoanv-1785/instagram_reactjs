import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_ERROR,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    LOAD_MORE_COMMENT,
    LOAD_MORE_COMMENT_SUCCESS,
    DELETE_COMMENT,
    DELETE_COMMENT_SUCCESS,
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

export const addCommentSuccess = (postId, comment)=> {
    return {
        type: ADD_COMMENT_SUCCESS,
        postId,
        comment,
    }
}

// load more comment
export const loadMoreComment = (postId, currentPage) => {
    return {
        type: LOAD_MORE_COMMENT,
        postId,
        currentPage,
    }
}

export const loadMoreCommentSuccess = (postId, comments) => {
    return {
        type: LOAD_MORE_COMMENT_SUCCESS,
        postId,
        comments,
    }
}

// delete comment 
export const deleteComment = (postId, commentId) => {
    return {
        type: DELETE_COMMENT,
        postId,
        commentId,
    }
}

export const deleteCommentSuccess = (postId, commentId) => {
    return {
        type: DELETE_COMMENT_SUCCESS,
        postId,
        commentId,
    }
}


