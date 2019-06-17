import { createSelector } from 'reselect'
const profileGlobalSelector = state => state.profileReducer

export const getIsFetchingProfileSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.isFetching)
export const getPostsProfileSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.posts)
export const getProfilePaginationSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.profilePagination)
export const getUserProfileSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.publicProfile)
export const getCurrentPostSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.currentPost)
export const getIsNextPostSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.isNextPost)
export const getIsPrevPostSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.isPrevPost)
export const getIsOpenModalSelector = createSelector(profileGlobalSelector, profileReducer => profileReducer.isOpenModal)