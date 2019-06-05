import { createSelector } from 'reselect'

const postGlobalState = state => state.postReducer

export const getIsFetchingSelector = createSelector(postGlobalState, postReducer => postReducer.isFetching)
export const getCurrentPageSelector = createSelector(postGlobalState, postReducer => postReducer.currentPage)
export const getNextPageSelector = createSelector(postGlobalState, postReducer => postReducer.nextPage)
export const getPostsSelector = createSelector(postGlobalState, postReducer => postReducer.posts)
export const getTotalPagesSelector = createSelector(postGlobalState, postReducer => postReducer.totalPages)