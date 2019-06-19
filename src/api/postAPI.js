import { API_END_POINT } from '../constants/api'
import axios from 'axios'
const token = localStorage.getItem('authenticationToken')
const intance = axios.create({
    baseURL: API_END_POINT,
    headers: {
        Authorization : `Token ${token}`
    }
})

export const fetchPostsAPI = (pageNumber) => {
    return intance.get(`/posts?page=${pageNumber}`)
}

export const addCommentAPI = (postId, commentBody) => {
    return intance.post(`/posts/${postId}/comments`, {body: commentBody})
}

export const loadMoreCommentAPI = (postId, currentPage) => {
    return intance.get(`/posts/${postId}/comments?page=${currentPage + 1}`)
}

export const deleteCommentAPI = (postId, commentId) => {
    return intance.delete(`/posts/${postId}/comments/${commentId}`)
}

export const getPostsByUsernameAPI = (username) => {
    return intance.get(`/users/${username}/posts`)
}

export const likePostAPI = (postId) => {
    return intance.post(`users/posts/${postId}/likes`)
}

export const disLikePostAPI = (postId) => {
    return intance.delete(`users/posts/${postId}/likes`)
}

export const uploadPostAPI = formData => {
    return intance.post('/posts', formData)
}