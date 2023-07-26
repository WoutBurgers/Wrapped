import React from 'react'
import { Button } from '@mui/material'
import './../Main.css'
import HomeButton from '../components/HomeButton'

export default function Upload() {
    return (
        <div className="standard-style">
            <HomeButton />
            <div>
                <h1>Twitter Wrapped</h1>
                <p>Upload the zip file with your Twitter Data! 📁</p>
            </div>

            <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden />
            </Button>
        </div>
    )
}
