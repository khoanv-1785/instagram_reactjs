import { createSelector } from 'reselect'

const postGlobalReducer = state => state.postReducer

//post
export const getIsFetchingSelector = createSelector(postGlobalReducer, postReducer => postReducer.isFetching)