import React, { useEffect, useContext } from 'react'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import viewedVideos from '../stats/ViewedVideos'
import { Context } from '../../DataProvider'
import sessions from '../stats/Sessions'

export default function CalculateResults() {
    const navigate = useNavigate()
    const { tiktokData, setTikTokStats } = useContext(Context)

    useEffect(() => {
        async function handleCalculations() {
            await viewedVideos(tiktokData, update)
            await sessions(tiktokData, update)
        }

        handleCalculations()

        navigate('/tiktok/prepareSlides/')
    }, [])

    const update = async (name, value) => {
        setTikTokStats((prevStats) => ({
            ...prevStats,
            [name]: value,
        }))
    }

    return (
        <div className="standard-style">
            <CircularProgress style={{ margin: '20px' }} />
        </div>
    )
}
