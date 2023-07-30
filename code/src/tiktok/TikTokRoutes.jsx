import CalculateResults from './CalculateResults'
import Ready from './Ready'
import Upload from './Upload'
import React from 'react'
import ViewedVideos from './result/ViewedVideos'
import ViewedVideosScreen from './screenshots/ViewedVideosScreen'
import LongestSession from './result/LongestSession'
import LongestSessionScreen from './screenshots/LongestSessionScreen'
import LastPage from './LastPage'

const tiktokRoutes = [
    {
        path: '/tiktok/upload/',
        component: <Upload />,
    },
    {
        path: '/tiktok/calculateResults/',
        component: <CalculateResults />,
    },
    {
        path: '/tiktok/ready/',
        component: <Ready />,
    },
    {
        path: '/tiktok/viewedVideos/result/',
        component: <ViewedVideos />,
    },
    {
        path: '/tiktok/viewedVideos/screen/',
        component: <ViewedVideosScreen />,
    },
    {
        path: '/tiktok/longestSession/result/',
        component: <LongestSession />,
    },
    {
        path: '/tiktok/longestSession/screen/',
        component: <LongestSessionScreen />,
    },
    {
        path: '/tiktok/ending/',
        component: <LastPage />,
    },
]

export default tiktokRoutes
