
export const getImageReviewStyle = (imageSrc, brightness = 0, contrast = 0, saturation = 0, sepia = 0, hueRotate = 0, grayScale = 0) => {
    return {
        backgroundImage: `url(${imageSrc})`,
        filter: `
            brightness(${brightness}) 
            contrast(${contrast}) 
            saturate(${saturation}) 
            sepia(${sepia}) 
            hue-rotate(${hueRotate}deg)
            grayscale(${grayScale})
             `
    }
}

export const getFilterStyles = (brightness = 0, contrast = 0, saturation = 0, sepia = 0, hueRotate = 0, grayScale = 0) => {
    return {
        filter: `
            brightness(${brightness}) 
            contrast(${contrast}) 
            saturate(${saturation}) 
            sepia(${sepia}) 
            hue-rotate(${hueRotate}deg)
            grayscale(${grayScale})
             `
    }
}
