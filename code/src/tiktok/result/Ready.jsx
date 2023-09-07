import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function Ready() {
    return (
        <div className="standard-style">
            <h1>Your TikTok Wrapped is ready!</h1>
            <p>
                We have found some very VERY interesting results...!
                <br></br>
                Are you ready to reveal the results!?
                <br></br>
            </p>

            <Link to="/tiktok/viewedVideos" style={{ textDecoration: 'none', color: 'white' }}>
                <Button variant="contained">Lets see my TikTok Wrapped!</Button>
            </Link>
        </div>
    )
}
