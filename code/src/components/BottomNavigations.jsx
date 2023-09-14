import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import GradingIcon from '@mui/icons-material/Grading'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'

export default function BottomNavigations() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link to="/privacy-policy/">
                <Fab variant="extended" size="small" color="primary">
                    <PrivacyTipIcon sx={{ mr: 1 }} />
                    Privacy Policy
                </Fab>
            </Link>
            <Link to="/terms-of-service/">
                <Fab variant="extended" size="small" color="primary">
                    <GradingIcon sx={{ mr: 1 }} />
                    Terms of Service
                </Fab>
            </Link>
            <Fab variant="extended" size="small" color="primary">
                <AccountCircleIcon sx={{ mr: 1 }} />
                About Me
            </Fab>
        </Box>
    )
}
