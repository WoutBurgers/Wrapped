import html2canvas from 'html2canvas';

export const downloadScreenshot = (elementRef) => {
  // Capture the screenshot of the specified element using html2canvas
  html2canvas(elementRef.current).then((canvas) => {
    // Convert the canvas to an image URL
    const imgData = canvas.toDataURL('image/png');

    // Create a temporary link and trigger the download
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = imgData;
    link.click();
  });
};
