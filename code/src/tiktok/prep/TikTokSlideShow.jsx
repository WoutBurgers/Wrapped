import React, { useEffect, useState } from 'react'
import Upload from '../pages/Upload'
import CalculateResults from '../pages/CalculateResults'
import PrepareSlides from '../pages/PrepareSlides'
import Ready from '../pages/Ready'
import ViewedVideos from '../pages/ViewedVideos'
import Weekday from '../pages/Weekday'
import LongestSession from '../pages/LongestSession'
import LastPage from '../pages/LastPage'
import Character from '../pages/Character'

export default function TikTokSlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [useAutomatedSlides, setUseAutomatedSlides] = useState(true)
    const [slideDirection, setSlideDirection] = useState('slide-in')
    const [isAnimationActive, setIsAnimationActive] = useState(false)

    const nextSlide = () => {
        setIsAnimationActive(true)
        setSlideDirection('slide-out-right') // Slide out to the right
        setTimeout(() => {
            setCurrentSlide((prevSlide) => prevSlide + 1)
            setSlideDirection('slide-in-left') // Slide in from the left
            setIsAnimationActive(false)
        }, 500) // Adjust the delay to match your CSS animation duration
    }

    const previousSlide = () => {
        setIsAnimationActive(true)
        setSlideDirection('slide-out-left') // Slide out to the left
        setTimeout(() => {
            setCurrentSlide((prevSlide) => prevSlide - 1)
            setSlideDirection('slide-in-right') // Slide in from the right
            setIsAnimationActive(false)
        }, 500) // Adjust the delay to match your CSS animation duration
    }

    useEffect(() => {
        if (isAnimationActive) {
            document.body.style.overflowX = 'hidden'
        } else {
            document.body.style.overflowX = 'auto'
        }
    }, [isAnimationActive])

    const change = () => {
        setUseAutomatedSlides(!useAutomatedSlides)
    }

    useEffect(() => {
        if (currentSlide >= 4 && useAutomatedSlides && currentSlide <= slides.length - 2) {
            console.log('test')
            setTimeout(() => {
                nextSlide()
            }, 5000)
        }
    }, [currentSlide])

    const slides = [
        <Upload key="upload" next={nextSlide} />,
        <CalculateResults key="calculate" next={nextSlide} />,
        <PrepareSlides key="prepare" next={nextSlide} />,
        <Ready key="ready" next={nextSlide} change={change} checked={useAutomatedSlides} />,
        <Character key="viewed" next={nextSlide} back={null} showButtons={!useAutomatedSlides} />,
        <ViewedVideos key="viewed" next={nextSlide} back={null} showButtons={!useAutomatedSlides} />,
        <Weekday key="weekday" next={nextSlide} back={previousSlide} showButtons={!useAutomatedSlides} />,
        <LongestSession key="session" next={nextSlide} back={previousSlide} showButtons={!useAutomatedSlides} />,
        <LastPage key="last" />,
    ]

    return <div className={`slide-container ${slideDirection}`}>{slides[currentSlide]}</div>
}
