import { toJpeg } from 'html-to-image'

export const generateImageFromHTML = async (element) => {
    try {
        const dataUrl = await toJpeg(element)
        return dataUrl
    } catch (error) {
        console.error('Error generating image:', error)
        throw error
    }
}
