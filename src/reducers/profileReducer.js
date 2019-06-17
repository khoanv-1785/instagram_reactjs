import {
    GET_POSTS_BY_USERNAME,
    GET_POSTS_BY_USERNAME_SUCCESS,
    GET_USER_PUBLIC_PROFILE_SUCCESS,
    GET_MORE_POSTS_BY_USERNAME,
    GET_MORE_POSTS_BY_USERNAME_SUCCESS,
    LOAD_MORE_COMMENT_PROFILE_SUCCESS,
    SELECT_CURRENT_POST,
    REQUEST_CLOSE_MODAL,
    NEXT_POST,
    PREV_POST,
    DELETE_COMMENT_PROFILE_SUCCESS,
} from '../constants/actionTypes'
import _ from 'lodash'

const profileInitialState = {
    isFetching: false,
    posts: [],
    profilePagination: {
        currentPage: 0,
        nextPage: 0,
        totalPages: 0,
        totalCount: 0
    },
    publicProfile: {},
    currentPost: {},
    isNextPost: true,
    isPrevPost: true,
    isOpenModal: false,
}
const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_USERNAME:
            return {
                ...state,
                isFetching: true,
            }
        case GET_POSTS_BY_USERNAME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.data.posts,
                profilePagination: action.data.meta,
            }
        case GET_USER_PUBLIC_PROFILE_SUCCESS:
            return {
                ...state,
                publicProfile: action.publicProfile
            }
        case GET_MORE_POSTS_BY_USERNAME:
            return {
                ...state,
                isFetching: true
            }
        case GET_MORE_POSTS_BY_USERNAME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                profilePagination: action.data.meta,
                posts: state.posts.concat(action.data.posts)

            }
        case SELECT_CURRENT_POST:
            const currentPostIndex = _.findIndex(state.posts, post => post.id === action.post.id)
            if (currentPostIndex === 0) {
                return {
                    ...state,
                    isPrevPost: false,
                    isNextPost: true,
                    currentPost: state.posts[currentPostIndex],
                    isOpenModal: true
                }
            } else if (currentPostIndex === state.posts.length - 1) {
                return {
                    ...state,
                    isPrevPost: true,
                    isNextPost: false,
                    currentPost: state.posts[currentPostIndex],
                    isOpenModal: true
                }
            } else {
                return {
                    ...state,
                    currentPost: state.posts[currentPostIndex],
                    isNextPost: true,
                    isPrevPost: true,
                    isOpenModal: true,
                }
            }
        case NEXT_POST:
            const currentNextPostIndex = _.findIndex(state.posts, post => post.id === action.postId)
            if (currentNextPostIndex === state.posts.length - 2) {
                return {
                    ...state,
                    isNextPost: false,
                    isPrevPost: true,
                    currentPost:  state.posts[currentNextPostIndex + 1]
                }
            } else {
                return {
                    ...state,
                    isNextPost: true,
                    isPrevPost: true,
                    currentPost:  state.posts[currentNextPostIndex + 1]
                }
            }


        case PREV_POST:
            const currentPrevPostIndex = _.findIndex(state.posts, post => post.id === action.postId)
            if (currentPrevPostIndex  === 1) {
                return {
                    ...state,
                    isNextPost: true,
                    isPrevPost: false,
                    currentPost:  state.posts[currentPrevPostIndex - 1]
                }
            } else {
                return {
                    ...state,
                    isNextPost: true,
                    isPrevPost: true,
                    currentPost:  state.posts[currentPrevPostIndex - 1]
                }
            }
        case REQUEST_CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false,
            }
        case LOAD_MORE_COMMENT_PROFILE_SUCCESS:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    comments: state.currentPost.comments.concat(action.comments)
                }
            }
        case DELETE_COMMENT_PROFILE_SUCCESS: 
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    comments: state.currentPost.comments.filter(comment => comment.id !== action.commentId)
                }
            }
        default:
            return state
    }
}

export default profileReducer