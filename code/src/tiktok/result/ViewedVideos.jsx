import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import HomeButton from '../../components/HomeButton'
import { useNavigate } from 'react-router-dom'
import ResultBottomButtons from '../../components/ResultBottomButtons'

export default function ViewedVideos() {
    const { tiktokStats } = useContext(Context)
    const navigate = useNavigate()

    const handleDownloadClick = () => {
        navigate('/tiktok/viewedVideos/screen/')
    }

    return (
        <>
            <div className="standard-style">
                <HomeButton />
                <div>
                    <p>Since {tiktokStats.firstVideo.toLocaleDateString()} you have watched</p>
                    <br />
                    <h1>{tiktokStats.viewedVideos}</h1>
                    <br />
                    <p>videos!</p>
                </div>
            </div>

            <ResultBottomButtons handleDownloadClick={handleDownloadClick} showBack={false} nextURL="/tiktok/ready/" />
        </>
    )
}
