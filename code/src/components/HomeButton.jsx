import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/ArrowBack'
import { Button } from '@mui/material'

export default function HomeButton() {
    return (
        <div className="home-button-container">
            <Button variant="outlined" startIcon={<HomeIcon />} className="home-button">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    Home
                </Link>
            </Button>
        </div>
    )
}
