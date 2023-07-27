import React, { useEffect, useContext } from 'react'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import viewedVideos from './stats/ViewedVideos'
import { Context } from '../DataProvider'

export default function CalculateResults() {
    const navigate = useNavigate()
    const { tiktokData, setTikTokStats } = useContext(Context)

    useEffect(() => {
        async function handleCalculations() {
            await viewedVideos(tiktokData, setTikTokStats)
        }

        handleCalculations()

        navigate('/tiktok/ready/')
    }, [])

    return (
        <div className="standard-style">
            <CircularProgress style={{ margin: '20px' }} />
        </div>
    )
}
