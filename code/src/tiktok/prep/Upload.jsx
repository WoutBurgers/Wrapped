import React, { useContext, useState } from 'react'
import { Button } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'
import { useNavigate } from 'react-router-dom'
import HomeButton from '../../components/HomeButton'
import { Context } from '../../DataProvider'
import JSZip from 'jszip'

export default function Upload() {
    const navigate = useNavigate()
    const { setTikTokData } = useContext(Context)
    const [errorMessage, setErrorMessage] = useState('')

    const handleUploadFile = async (event) => {
        const uploadedFile = event?.target?.files[0]

        if (uploadedFile) {
            try {
                const zip = new JSZip()
                const zipData = await zip.loadAsync(uploadedFile)

                for (const fileName in zipData.files) {
                    const file = zipData.files[fileName]

                    if (file.name.endsWith('.json')) {
                        const jsonData = await file.async('string')
                        handleSuccess(jsonData)
                        return
                    }
                }

                setErrorMessage('No valid JSON file found in the zip.')
            } catch (error) {
                if (uploadedFile.type === 'application/json') {
                    const jsonData = await uploadedFile?.text()
                    if (jsonData) {
                        handleSuccess(jsonData)
                    } else {
                        setErrorMessage('Invalid JSON file. Try another JSON file.')
                    }
                } else {
                    setErrorMessage('Invalid file format. Please upload a zip file or a JSON file.')
                }
            }
        }
    }

    const handleSuccess = (data) => {
        const json = JSON.parse(data)
        setTikTokData(json)
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

            {errorMessage && (
                <p style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
                    <ErrorIcon sx={{ marginRight: '5px' }} /> {errorMessage}
                </p>
            )}
        </div>
    )
}
