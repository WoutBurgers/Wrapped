import React, { useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import Button from '@mui/material/Button'

function ImageGenerator() {
    const [imageURL, setImageURL] = useState(null)

    const generateImage = () => {
        const canvas = document.createElement('canvas')
        canvas.width = 1080
        canvas.height = 1920
        const ctx = canvas.getContext('2d')

        const backgroundImage = new Image()
        backgroundImage.src = '/background/tiktok-background.jpg'

        backgroundImage.onload = () => {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)

            // Calculate the center coordinates for the text
            const centerX = canvas.width / 2
            const centerY = canvas.height / 2

            // Adjust the font size dynamically based on canvas dimensions
            const fontSize = Math.min(canvas.width * 0.1, canvas.height * 0.1)
            ctx.font = `${fontSize}px Arial`
            ctx.fillStyle = 'white'

            // Center-align the text
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'

            // Draw the text at the center
            ctx.fillText('Text', centerX, centerY)

            const dataURL = canvas.toDataURL('image/jpeg')
            setImageURL(dataURL)

            setTimeout(() => {
                const link = document.createElement('a')
                link.href = dataURL
                link.download = 'generated_image.jpg'
                link.click()
                setImageURL(null)
            }, 0)
        }
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={generateImage} style={{ margin: '0 8px' }}>
                <DownloadIcon />
            </Button>

            {imageURL && <img src={imageURL} alt="Generated" />}
        </div>
    )
}

export default ImageGenerator
