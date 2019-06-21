import { createSelector } from 'reselect'
const createPostGlobalState = state => state.createPostReducer

export const getActiveStepIndexSelector = createSelector(createPostGlobalState, createPostReducer => createPostReducer.activeStepIndex)