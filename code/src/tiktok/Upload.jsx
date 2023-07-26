import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HomeButton from '../components/HomeButton'
import { Context } from '../DataProvider' 

export default function Upload() {
    const navigate = useNavigate()
    const { setTikTokData } = useContext(Context);


    const handleUploadFile = (event) => {
        const uploadedFile = event.target.files[0]
        setTikTokData(uploadedFile)

        navigate('/tiktok/calculateResults/')
    }

    const handleDownloadData = () => {
        window.open('https://www.tiktok.com/setting/download-your-data', '_blank')
    }

    return (
        <div className="standard-style">
            <HomeButton />
            <h1>TikTok Wrapped</h1>
            <p>Upload the zip file with your TikTok Data! 📁</p>

            <div className="buttons">
                <Button variant="outlined" component="label" className="custom-button" onClick={handleDownloadData}>
                    Open TikTok and request my data.
                </Button>
            </div>
            <div className="buttons">
                <Button variant="contained" component="label" className="custom-button">
                    I have the data file, upload here!
                    <input type="file" hidden onChange={handleUploadFile} />
                </Button>
            </div>
        </div>
    )
}
