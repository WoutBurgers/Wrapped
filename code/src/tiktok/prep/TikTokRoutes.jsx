import CalculateResults from './CalculateResults'
import Ready from '../result/Ready'
import Upload from './Upload'
import React from 'react'
import ViewedVideos from '../result/ViewedVideos'
import LongestSession from '../result/LongestSession'
import LastPage from '../result/LastPage'
import Weekday from '../result/Weekday'
import PrepareSlides from './PrepareSlides'

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
        path: '/tiktok/prepareSlides/',
        component: <PrepareSlides />,
    },
    {
        path: '/tiktok/ready/',
        component: <Ready />,
    },
    {
        path: '/tiktok/viewedVideos/',
        component: <ViewedVideos />,
    },
    {
        path: '/tiktok/longestSession/',
        component: <LongestSession />,
    },
    {
        path: '/tiktok/weekday/',
        component: <Weekday />,
    },
    {
        path: '/tiktok/ending/',
        component: <LastPage />,
    },
]

export default tiktokRoutes
