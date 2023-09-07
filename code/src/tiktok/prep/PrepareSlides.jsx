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
            await slides(tiktokStats, updateSlides)
        }

        prepSlides()

        navigate('/tiktok/ready/')
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
