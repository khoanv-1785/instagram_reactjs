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