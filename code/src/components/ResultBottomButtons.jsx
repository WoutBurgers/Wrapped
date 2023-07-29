import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DownloadIcon from '@mui/icons-material/Download'
import PropTypes from 'prop-types'

export default function ResultBottomButtons({ handleDownloadClick }) {
    return (
        <div style={{ position: 'fixed', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={() => {
                    console.log('Back button clicked')
                }}
                style={{ marginRight: '8px' }}
            >
                Back
            </Button>

            <Button variant="contained" color="primary" onClick={handleDownloadClick} style={{ margin: '0 8px' }}>
                <DownloadIcon />
            </Button>

            <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                    console.log('Next button clicked')
                }}
                style={{ marginLeft: '8px' }}
            >
                Next
            </Button>
        </div>
    )
}

ResultBottomButtons.propTypes = {
    handleDownloadClick: PropTypes.function.isRequired,
}
