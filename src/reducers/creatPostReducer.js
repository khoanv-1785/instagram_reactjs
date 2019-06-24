import {
    NEXT_STEP_CREATE_POST,
    PREV_STEP_CREATE_POST,
    DROP_IMAGE,
} from '../constants/actionTypes'

const initialState = {
    activeStepIndex: 0,
    imageFile: {}, // chua thong tin cua file anh
    formData: [], // chua 1 mang thong tin ve bai post.
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
        case DROP_IMAGE:
            return {
                ...state,
                imageFile: action.imageFile,
            }
        default:
            return state
    }
}

export default createPostReducer