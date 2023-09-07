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
            comment: '',
        },
        mostActiveWeekday: {
            weekday: '',
            averageUsageTime: 0,
        },
        averagePerDay: 0,
    })

    const [tiktokSlides, setTikTokSlides] = useState({
        slides: ['/tiktok/viewedVideos/', '/tiktok/longestSession/', '/tiktok/weekday/', '/tiktok/ending/'],
        viewedVideos: {},
        longestSession: {},
        weekday: {},
    })

    return (
        <Context.Provider
            value={{ tiktokData, setTikTokData, tiktokStats, setTikTokStats, tiktokSlides, setTikTokSlides }}
        >
            {children}
        </Context.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
