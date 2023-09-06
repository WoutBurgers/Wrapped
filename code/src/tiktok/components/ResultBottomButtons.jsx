import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import ImageGenerator from '../images/ImageGenerator'

export default function ResultBottomButtons({ showBack, backURL, nextURL }) {
    const navigate = useNavigate()

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
    showBack: PropTypes.bool,
    backURL: PropTypes.string,
    nextURL: PropTypes.string,
}

ResultBottomButtons.defaultProps = {
    showBack: true,
    backURL: '',
    nextURL: '',
}
