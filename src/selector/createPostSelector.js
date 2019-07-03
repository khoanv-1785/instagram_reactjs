import { createSelector } from 'reselect'
const createPostGlobalState = state => state.createPostReducer

export const getActiveStepIndexSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.activeStepIndex)
export const getImageFileSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.imageFile)
export const getFormDataSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.formData)
export const getStylesSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.styles)
export const getImageSrcSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.imageSrc)
export const getLocationSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.location)
export const getCaptionSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.caption)