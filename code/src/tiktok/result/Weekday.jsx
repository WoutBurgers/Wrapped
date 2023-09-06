import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'

export default function Weekday() {
    const { tiktokStats } = useContext(Context)

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>Your most active day is </p>
                    <br />
                    <h1>{tiktokStats.mostActiveWeekday.weekday} </h1>
                    <br />
                    <p> with on average a total time of</p>
                    <br />
                    <h1>{Math.round(tiktokStats.mostActiveWeekday.averageUsageTime / 60)} minutes!</h1>
                </div>
            </div>

            <ResultBottomButtons backURL="/tiktok/longestSession/result/" nextURL="/tiktok/ending/" />
        </>
    )
}
