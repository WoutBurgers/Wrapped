import React, { useEffect, useState } from 'react'
import Upload from '../pages/Upload'
import CalculateResults from '../pages/CalculateResults'
import PrepareSlides from '../pages/PrepareSlides'
import Ready from '../pages/Ready'
import ViewedVideos from '../pages/ViewedVideos'
import Weekday from '../pages/Weekday'
import LongestSession from '../pages/LongestSession'
import LastPage from '../pages/LastPage'

export default function TikTokSlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [useAutomatedSlides, setUseAutomatedSlides] = useState(true)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1)
    }

    useEffect(() => {
        if (currentSlide >= 4 && useAutomatedSlides && currentSlide <= slides.length - 2) {
            console.log('test')
            setTimeout(() => {
                nextSlide()
            }, 1000)
        }
    }, [currentSlide])

    const previousSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1)
    }

    const change = () => {
        setUseAutomatedSlides(!useAutomatedSlides)
    }

    const slides = [
        <Upload key="upload" next={nextSlide} />,
        <CalculateResults key="calculate" next={nextSlide} />,
        <PrepareSlides key="prepare" next={nextSlide} />,
        <Ready key="ready" next={nextSlide} change={change} checked={useAutomatedSlides} />,
        <ViewedVideos key="viewed" next={nextSlide} back={null} showButtons={!useAutomatedSlides} />,
        <Weekday key="weekday" next={nextSlide} back={previousSlide} showButtons={!useAutomatedSlides} />,
        <LongestSession key="session" next={nextSlide} back={previousSlide} showButtons={!useAutomatedSlides} />,
        <LastPage key="last" />,
    ]

    return <div>{slides[currentSlide]}</div>
}
