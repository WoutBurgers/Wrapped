import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

export default function DataProvider({ children }) {
    const [tiktokData, setTikTokData] = useState({})
    const [tiktokStats, setTikTokStats] = useState({
        viewedVideos: 0,
        firstVideo: new Date(),
        totalWatchTimeSec: 0,
        totalSessions: 0,
        averageSessionLengthSec: 0,
        latestVideoWatched: new Date(),
        longestWatchSession: {
            startTime: new Date(),
            endTime: new Date(),
            lengthSec: 0,
        },
        mostActiveWeekday: {
            weekday: '',
            averageUsageTime: 0,
        },
        averagePerDay: 0,
    })

    return (
        <Context.Provider value={{ tiktokData, setTikTokData, tiktokStats, setTikTokStats }}>
            {children}
        </Context.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
