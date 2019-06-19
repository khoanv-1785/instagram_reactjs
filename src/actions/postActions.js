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
    LIKE_POST,
    LIKE_POST_SUCCESS,
    DISLIKE_POST,
    DISLIKE_POST_SUCCESS,
    UPLOAD_POST,
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

// like/dislike post
export const likePost = postId => {
    return {
        type: LIKE_POST,
        postId
    }
}

export const likePostSuccess = postId => {
    return {
        type: LIKE_POST_SUCCESS,
        postId,
    }
}

export const dislikePost = postId => {
    return {
        type: DISLIKE_POST,
        postId,
    }
}

export const dislikePostSuccess = postId => {
    return {
        type: DISLIKE_POST_SUCCESS,
        postId,
    }
}

// upload post 
export const uploadPost = file => {
    let formData = new FormData()
    formData.append('photo', file)
    console.log(formData)
    console.log(file)
    return {
        type: UPLOAD_POST,
        formData,
    }
}