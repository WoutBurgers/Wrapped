import React, { useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function CalculateResults() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/tiktok/ready/')
        }, 2000)
    })

    return (
        <div className="standard-style">
            <CircularProgress style={{ margin: '20px' }} />
        </div>
    )
}
