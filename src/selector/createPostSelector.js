import { createSelector } from 'reselect'
const createPostGlobalState = state => state.createPostReducer

export const getActiveStepIndexSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.activeStepIndex)
export const getImageFileSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.imageFile)
export const getFormDataSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.formData)
