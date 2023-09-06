import React, { useContext } from 'react'
import { Context } from '../../DataProvider'

import ResultBottomButtons from '../components/ResultBottomButtons'

export default function ViewedVideos() {
    const { tiktokStats } = useContext(Context)

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>Since {tiktokStats.firstVideo.toLocaleDateString()} you have watched</p>
                    <br />
                    <h1>{tiktokStats.viewedVideos} videos! </h1>
                </div>
            </div>

            <ResultBottomButtons showBack={false} nextURL="/tiktok/longestSession/result/" />
        </>
    )
}
