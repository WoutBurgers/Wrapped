import React, { useState } from 'react'
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

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1)
    }

    const previousSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1)
    }

    const slides = [
        <Upload key="upload" next={nextSlide} />,
        <CalculateResults key="calculate" next={nextSlide} />,
        <PrepareSlides key="prepare" next={nextSlide} />,
        <Ready key="ready" next={nextSlide} />,
        <ViewedVideos key="viewed" next={nextSlide} back={null} />,
        <Weekday key="weekday" next={nextSlide} back={previousSlide} />,
        <LongestSession key="session" next={nextSlide} back={previousSlide} />,
        <LastPage key="last" />,
    ]

    return <div>{slides[currentSlide]}</div>
}
