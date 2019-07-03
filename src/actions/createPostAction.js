import {
    NEXT_STEP_CREATE_POST,
    PREV_STEP_CREATE_POST,
    DROP_IMAGE,
    EDIT_IMAGE,
    RESET_EDIT_IMAGE,
    CHANGE_CAPTION,
    CHANGE_LOCATION,
    UPLOAD_POST,
    UPLOAD_POST_SUCCESS,
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

// drop image 
export const dropImage = imageFile => {
    return {
        type: DROP_IMAGE,
        imageFile,
    }
}

// edit image
export const editImage = imageData  => {
    return {
        type: EDIT_IMAGE,
        imageData,
    }
}

export const resetEditImage = () => {
    return {
        type: RESET_EDIT_IMAGE,
    }
}

export const changeLocation = location => {
    return {
        type: CHANGE_LOCATION,
        location,
    }
}

export const changeCaption = caption => {
    return {
        type: CHANGE_CAPTION,
        caption,
    }
}
export const uploadPost = post => {
    return {
    }
}