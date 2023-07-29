import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../../DataProvider'
import { downloadScreenshot } from '../DownloadPage'
import { useNavigate } from 'react-router-dom'

export default function ViewedVideosScreen() {
    const { tiktokStats } = useContext(Context)
    const partToCaptureRef = useRef(null)
    const navigate = useNavigate()

    const handleDownloadClick = async () => {
        downloadScreenshot(partToCaptureRef) 
        navigate("/tiktok/viewedVideos/result/")
    }

    useEffect(() => {
        handleDownloadClick()
    }, [])

    return (
        <>
            <div className="standard-style" ref={partToCaptureRef}>
                <p>Since {tiktokStats.firstVideo.toLocaleDateString()} you have watched</p>
                <h1>{tiktokStats.viewedVideos}</h1>
                <p>videos!</p>
            </div>
        </>
    )
}
