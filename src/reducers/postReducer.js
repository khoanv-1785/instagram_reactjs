import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    ADD_COMMENT_SUCCESS,
    LOAD_MORE_COMMENT_SUCCESS,
    DELETE_COMMENT_SUCCESS,
} from '../constants/actionTypes'
const initialState = {
    isFetching: false,
    currentPage: 0,
    nextPage: 0,
    prevPage: 0,
    totalPages: 0,
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
            state.posts = state.posts.concat(action.data.posts)
            return {
                ...state,
                isFetching: false,
                currentPage: action.data.currentPage,
                nextPage: action.data.nextPage,
                totalPages: action.data.totalPages,

            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching: false,
                errors: action.errors,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            comments: [
                                ...post.comments,
                                action.comment
                            ]
                        }
                    } else {
                        return post
                    }
                })
            }
        case LOAD_MORE_COMMENT_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            comments: post.comments.concat(action.comments)
                        }
                    } else {
                        return post
                    }
                })
            }
        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            comments: post.comments.filter(comment => comment.id !== action.commentId)
                        }
                    } else {
                        return post
                    }
                })

            }
        default:
            return state
    }
}

export default postReducer