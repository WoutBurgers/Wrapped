import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DownloadIcon from '@mui/icons-material/Download'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export default function ResultBottomButtons({ handleDownloadClick, showBack, backURL, nextURL }) {
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

            <Button variant="contained" color="primary" onClick={handleDownloadClick} style={{ margin: '0 8px' }}>
                <DownloadIcon />
            </Button>

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
    handleDownloadClick: PropTypes.func.isRequired,
    showBack: PropTypes.bool,
    backURL: PropTypes.string,
    nextURL: PropTypes.string,
}

ResultBottomButtons.defaultProps = {
    showBack: true,
    backURL: '',
    nextURL: '',
}
