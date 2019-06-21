import {
    NEXT_STEP_CREATE_POST,
    PREV_STEP_CREATE_POST,
} from '../constants/actionTypes'

export const nextStepCreatePost = () => {
    return {
        type: NEXT_STEP_CREATE_POST,
    }
}

export const prevStepCreateposts = () => {
    return {
        type: PREV_STEP_CREATE_POST,
    }
}