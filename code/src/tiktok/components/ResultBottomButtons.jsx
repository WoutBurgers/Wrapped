import React, { useEffect, useState, useContext } from 'react'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import ImageGenerator from '../images/ImageGenerator'
import { Context } from '../../DataProvider'

export default function ResultBottomButtons({ currentURL }) {
    const navigate = useNavigate()
    const { tiktokSlides } = useContext(Context)
    const pages = tiktokSlides.slides

    const [backURL, setBackURL] = useState('')
    const [nextURL, setNextURL] = useState('')
    const [showBack, setShowBack] = useState(true)
    const [showNext, setShowNext] = useState(true)

    useEffect(() => {
        const getUrls = () => {
            const currentIndex = pages?.indexOf(currentURL)

            if (currentIndex === -1) {
                setShowBack(false)
                setShowNext(false)
                return
            }

            if (currentIndex > 0) {
                setBackURL(pages[currentIndex - 1])
            } else {
                setShowBack(false)
            }

            if (currentIndex < pages?.length - 1) {
                setNextURL(pages[currentIndex + 1])
            } else {
                setShowNext(false)
            }
        }

        getUrls()
    }, [])

    return (
        <div style={{ position: 'fixed', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                disabled={!showBack}
                onClick={() => {
                    navigate(backURL)
                }}
                style={{ marginRight: '8px' }}
            >
                Back
            </Button>

            <ImageGenerator />

            <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                disabled={!showNext}
                onClick={() => {
                    navigate(nextURL)
                }}
                style={{ marginLeft: '8px' }}
            >
                Next
            </Button>
        </div>
    )
}

ResultBottomButtons.propTypes = {
    currentURL: PropTypes.string,
}

ResultBottomButtons.defaultProps = {
    currentURL: '',
}
