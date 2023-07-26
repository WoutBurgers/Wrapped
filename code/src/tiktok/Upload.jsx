import React from 'react'
import Button from '@mui/material/Button'
import './../Main.css'
import HomeButton from '../components/HomeButton'

export default function Upload() {
    return (
        <div className="standard-style">
            <HomeButton />
            <h1>TikTok Wrapped </h1>
            <p>Upload the zip file with your TikTok Data! 📁</p>

            <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden />
            </Button>
        </div>
    )
}
