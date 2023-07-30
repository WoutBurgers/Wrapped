import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import { useNavigate } from 'react-router-dom'
import ResultBottomButtons from '../../components/ResultBottomButtons'

export default function ViewedVideos() {
    const { tiktokStats } = useContext(Context)
    const navigate = useNavigate()

    const handleDownloadClick = () => {
        navigate('/tiktok/longestSession/screen/')
    }

    const date = tiktokStats.longestWatchSession.startTime.toLocaleDateString()
    const length = Math.round(tiktokStats.longestWatchSession.lengthSec / 60)
    const hours = Math.floor(length / 60)
    const minutes = length - 60 * hours
    const comment = tiktokStats.longestWatchSession.comment

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>On {date} you set a personal record with a session of </p>
                    <br />
                    <h1>
                        {hours > 0 ? `${hours} hours and ` : ''}
                        {minutes} {length !== 1 ? 'minutes!' : 'minute!'}{' '}
                    </h1>
                    <br />
                    <p>{comment}</p>
                </div>
            </div>

            <ResultBottomButtons
                handleDownloadClick={handleDownloadClick}
                backURL="/tiktok/viewedVideos/result/"
                nextURL="/tiktok/ending/"
            />
        </>
    )
}
