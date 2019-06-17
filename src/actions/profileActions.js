import {
    GET_POSTS_BY_USERNAME,
    GET_POSTS_BY_USERNAME_SUCCESS,
    GET_USER_PUBLIC_PROFILE,
    GET_USER_PUBLIC_PROFILE_SUCCESS,
    GET_MORE_POSTS_BY_USERNAME,
    GET_MORE_POSTS_BY_USERNAME_SUCCESS,
    LOAD_MORE_COMMENT_PROFILE,
    LOAD_MORE_COMMENT_PROFILE_SUCCESS,
    SELECT_CURRENT_POST,
    REQUEST_CLOSE_MODAL,
    REQUEST_OPEN_MODAL,
    NEXT_POST,
    PREV_POST,
    DELETE_COMMENT_PROFILE,
    DELETE_COMMENT_PROFILE_SUCCESS
} from '../constants/actionTypes'

// get posts by username
export const getPostsByUsername = (username) => {
    return {
        type: GET_POSTS_BY_USERNAME,
        username,
    }
}

export const getPostsByUsernameSuccess = data => {
    return {
        type: GET_POSTS_BY_USERNAME_SUCCESS,
        data,
    }
}

// get public profile of user 
export const getUserPublicProfile = username => {
    return {
        type: GET_USER_PUBLIC_PROFILE,
        username
    }
}

export const getUserPublicProfileSuccess = publicProfile => {
    return {
        type: GET_USER_PUBLIC_PROFILE_SUCCESS,
        publicProfile,
    }
}

// get more post by username
export const getMorePostsByUsername = (username, currentPage) => {
    return {
        type: GET_MORE_POSTS_BY_USERNAME,
        username, 
        currentPage,
    }
}

export const getMorePostsByUsernameSuccess = data => {
    return {
        type: GET_MORE_POSTS_BY_USERNAME_SUCCESS,
         data,
    }
}

// get more comment of post in profile
export const loadMoreCommentProfile = (postId, currentPage) => {
    return {
        type: LOAD_MORE_COMMENT_PROFILE,
        postId,
        currentPage,
    }
}

export const loadMoreCommentProfileSuccess = (postId, comments) => {
    return {
        type: LOAD_MORE_COMMENT_PROFILE_SUCCESS,
        postId,
        comments,
    }
}

export const selectCurrentPost = (post) => {
    return {
        type: SELECT_CURRENT_POST,
        post,
    }
}

export const requestOpenModal = () => {
    return {
        type: REQUEST_OPEN_MODAL
    }
}

export const requestCloseModal = () => {
    return {
        type: REQUEST_CLOSE_MODAL
    }
}

export const nextPost = postId => {
    return {
        type: NEXT_POST,
        postId,
    }
}

export const prevPost = postId => {
    return {
        type: PREV_POST,
        postId,
    }
}

export const deleteCommentProfile = (postId, commentId) => {
    return {
        type: DELETE_COMMENT_PROFILE,
        postId,
        commentId,
    }
}

export const deleteCommentProfileSuccess = (postId, commentId) => {
    return {
        type: DELETE_COMMENT_PROFILE_SUCCESS,
        postId, 
        commentId,
    }
}