import {
    NEXT_STEP_CREATE_POST,
    PREV_STEP_CREATE_POST,
} from '../constants/actionTypes'

const initialState = {
    activeStepIndex: 0
}

const createPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_STEP_CREATE_POST:
            return {
                ...state,
                activeStepIndex: state.activeStepIndex + 1
            }
        case PREV_STEP_CREATE_POST:
            return {
                ...state,
                activeStepIndex: state.activeStepIndex - 1
            }
        default:
            return state
    }
}

export default createPostReducer