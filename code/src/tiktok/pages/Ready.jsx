import React, { useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import { Context } from '../../DataProvider'
import PropTypes from 'prop-types'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function Ready({ next, change, checked }) {
    const { tiktokData, tiktokStats, tiktokSlides } = useContext(Context)

    useEffect(() => {
        const printResults = () => {
            console.log('Your TikTok data: ', tiktokData)
            console.log('Your TikTok stats: ', tiktokStats)
            console.log('Your TikTok slides: ', tiktokSlides)
        }
        printResults()
    }, [])

    return (
        <div className="standard-style">
            <h1>Your TikTok Wrapped is ready!</h1>
            <p>
                We have found some very VERY interesting results...!
                <br></br>
                Are you ready to reveal the results!?
                <br></br>
            </p>

            <Button variant="contained" onClick={() => next()}>
                Lets see my TikTok Wrapped!
            </Button>

            <br />
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={change} />}
                    label="Use the automated slideshow"
                />
            </FormGroup>
        </div>
    )
}

Ready.propTypes = {
    next: PropTypes.func,
    change: PropTypes.func,
    checked: PropTypes.bool,
}
