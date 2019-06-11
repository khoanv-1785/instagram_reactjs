import {
    GET_POSTS_BY_USERNAME,
    GET_POSTS_BY_USERNAME_SUCCESS,
    GET_USER_PUBLIC_PROFILE,
    GET_USER_PUBLIC_PROFILE_SUCCESS,
    GET_MORE_POSTS_BY_USERNAME,
    GET_MORE_POSTS_BY_USERNAME_SUCCESS,
} from '../constants/actionTypes'

// get posts by username
export const getPostsByUsername = (username, pageNumber) => {
    return {
        type: GET_POSTS_BY_USERNAME,
        username,
        pageNumber,
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

export const getMorePostsByUsernameSuccess = posts => {
    return {
        type: GET_MORE_POSTS_BY_USERNAME_SUCCESS,
        posts,
    }
}