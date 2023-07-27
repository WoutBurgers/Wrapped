import React, { useContext, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Context } from '../DataProvider'

export default function Ready() {
    const { tiktokStats } = useContext(Context)

    useEffect(() => {
        console.log(tiktokStats)
    }, [])

    return (
        <div className="standard-style">
            <h1>Your TikTok Wrapped is ready!</h1>
            <p>
                We have found some very VERY interesting results...!
                <br></br>
                Are you ready to reveal the results!?{' '}
            </p>

            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Button variant="contained">Lets see my TikTok Wrapped!</Button>
            </Link>
        </div>
    )
}
