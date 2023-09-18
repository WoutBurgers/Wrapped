import React, { useEffect, useContext } from 'react'
import { CircularProgress } from '@mui/material'
import { Context } from '../../DataProvider'
import slides from '../prep/PrepSlides'
import PropTypes from 'prop-types'

export default function PrepareSlides({ next }) {
    const { tiktokStats, setTikTokSlides } = useContext(Context)

    useEffect(() => {
        async function prepSlides() {
            await Promise.all([await slides(tiktokStats, updateSlides)])

            next()
        }
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

PrepareSlides.propTypes = {
    next: PropTypes.func,
}
