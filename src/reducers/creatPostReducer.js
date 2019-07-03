import {
    NEXT_STEP_CREATE_POST,
    PREV_STEP_CREATE_POST,
    DROP_IMAGE,
    EDIT_IMAGE,
    RESET_EDIT_IMAGE,
    CHANGE_CAPTION,
    CHANGE_LOCATION,
} from '../constants/actionTypes'

const initialState = {
    activeStepIndex: 0,
    imageFile: {}, // chua thong tin cua file anh
    formData: [], // chua 1 mang thong tin ve bai post.,
    imageSrc: '', // duong dan file anh 
    styles: {},
    location: '',
    caption: '',
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
        case EDIT_IMAGE:
            return {
                ...state,
                imageSrc: action.imageData.imageSrc,
                styles: action.imageData.styles,
            }
        case RESET_EDIT_IMAGE:  
            return {
                ...state,
                imageSrc: '',
                styles: {},
                location: '',
                caption: '',
            }
        case CHANGE_CAPTION: 
            return {
                ...state,
                caption: action.caption,
            }
        case CHANGE_LOCATION:
            return {
                ...state,
                location: action.location,
            }
        default:
            return state
    }
}

export default createPostReducer