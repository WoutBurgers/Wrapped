import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'

export default function Weekday() {
    const { tiktokSlides } = useContext(Context)

    const weekday = tiktokSlides.weekday

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>{weekday.s1}</p>
                    <br />
                    <h1>{weekday.b1}</h1>
                    <br />
                    <p>{weekday.s2}</p>
                    <br />
                    <h1>{weekday.b2}</h1>
                </div>
            </div>

            <ResultBottomButtons currentURL="/tiktok/weekday/" />
        </>
    )
}
