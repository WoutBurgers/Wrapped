import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="standard-style">
            <h1>Lets Get Wrapped</h1>
            <p>Find out your social media habits! 🫵</p>
            <div>
                <div className="menu-buttons">
                    <Link to="/tiktok/upload/" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant="contained">TikTok</Button>
                    </Link>
                </div>
                <div className="menu-buttons">
                    <Link to="/twitter/upload/" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant="contained">Twitter</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
