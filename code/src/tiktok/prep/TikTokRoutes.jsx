import CalculateResults from './CalculateResults'
import Ready from '../result/Ready'
import Upload from './Upload'
import React from 'react'
import ViewedVideos from '../result/ViewedVideos'
import LongestSession from '../result/LongestSession'
import LastPage from '../result/LastPage'
import Weekday from '../result/Weekday'

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
        path: '/tiktok/longestSession/result/',
        component: <LongestSession />,
    },
    {
        path: '/tiktok/weekday/result/',
        component: <Weekday />,
    },
    {
        path: '/tiktok/ending/',
        component: <LastPage />,
    },
]

export default tiktokRoutes
