import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'

export default function ViewedVideos() {
    const { tiktokSlides } = useContext(Context)

    const longestSession = tiktokSlides.longestSession

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>{longestSession.s1}</p>
                    <br />
                    <h1>{longestSession.b1}</h1>
                    <br />
                    <p>{longestSession.s2}</p>
                </div>
            </div>

            <ResultBottomButtons currentURL="/tiktok/longestSession/" />
        </>
    )
}
