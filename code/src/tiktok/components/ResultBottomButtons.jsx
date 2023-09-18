import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PropTypes from 'prop-types'
import ImageGenerator from '../images/ImageGenerator'

export default function ResultBottomButtons({ next, back }) {
    const showBack = back !== null
    const showNext = next !== null

    return (
        <div style={{ position: 'fixed', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                disabled={!showBack}
                onClick={() => {
                    if (showBack) {
                        back()
                    }
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
                    if (showNext) {
                        next()
                    }
                }}
                style={{ marginLeft: '8px' }}
            >
                Next
            </Button>
        </div>
    )
}

ResultBottomButtons.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
}
