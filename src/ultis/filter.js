export const getFilterStyles = (brightness, contrast, saturation) => {
    return {
        filter: `brightness(${brightness * 100}%) contrast(${contrast * 100}%) saturate(${saturation * 100}%)`
    }
}

export const getImagePreview = (imageSrc, brightness, contrast, saturation ) => {
    return {
        backgroundImage: `url(${imageSrc})`,
        filter: `brightness(${brightness * 100}%) contrast(${contrast * 100}%) saturate(${saturation * 100}%)`
    }
}