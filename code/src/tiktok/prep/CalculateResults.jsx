import React, { useEffect, useContext } from 'react'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import viewedVideos from '../stats/ViewedVideos'
import { Context } from '../../DataProvider'
import sessions from '../stats/Sessions'
import comments from '../stats/Comments'
import likes from '../stats/Likes'
import live from '../stats/Lives'
import shares from '../stats/Shares'
import gifts from '../stats/Gifts'
import blocked from '../stats/Blocked'
import profile from '../stats/Profile'

export default function CalculateResults() {
    const navigate = useNavigate()
    const { tiktokData, setTikTokStats } = useContext(Context)

    useEffect(() => {
        let calculationsTimeout

        async function handleCalculations() {
            await Promise.all([
                viewedVideos(tiktokData, update),
                sessions(tiktokData, update),
                comments(tiktokData, update),
                likes(tiktokData, update),
                live(tiktokData, update),
                shares(tiktokData, update),
                gifts(tiktokData, update),
                blocked(tiktokData, update),
                profile(tiktokData, update),
            ])

            calculationsTimeout = setTimeout(() => {
                navigate('/tiktok/prepareSlides/')
            }, 2000)
        }

        handleCalculations()

        return () => {
            clearTimeout(calculationsTimeout)
        }
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
