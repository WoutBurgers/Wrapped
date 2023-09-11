import React, { useEffect, useContext } from 'react'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../DataProvider'
import slides from './PrepSlides'

export default function PrepareSlides() {
    const navigate = useNavigate()
    const { tiktokStats, setTikTokSlides } = useContext(Context)

    useEffect(() => {
        async function prepSlides() {
            await Promise.all([await slides(tiktokStats, updateSlides)])

            navigate('/tiktok/ready/')
        }
        console.log(tiktokStats)
        prepSlides()
    }, [])

    const updateSlides = async (name, value) => {
        setTikTokSlides((prevStats) => ({
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
