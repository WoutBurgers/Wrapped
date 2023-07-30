import html2canvas from 'html2canvas'

export const downloadScreenshot = (elementRef) => {
    html2canvas(elementRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const link = document.createElement('a')

        link.download = 'screenshot.png'
        link.href = imgData
        link.click()
    })
}
