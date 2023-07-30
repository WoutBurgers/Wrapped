import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/ArrowBack'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function HomeButton() {
    return (
        <div className="home-button-container">
            <Link to="/">
                <Button variant="outlined" startIcon={<HomeIcon />} className="home-button">
                    <Typography style={{ textDecoration: 'none', color: 'white' }}>Home</Typography>
                </Button>
            </Link>
        </div>
    )
}
