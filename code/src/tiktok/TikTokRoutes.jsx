import CalculateResults from './CalculateResults'
import Ready from './Ready'
import Upload from './Upload'
import React from 'react'
import ViewedVideos from './result/ViewedVideos'
import ViewedVideosScreen from './screenshots/ViewedVideosScreen'

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
]

export default tiktokRoutes
