import React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

export default function Ready({ next }) {
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
        </div>
    )
}

Ready.propTypes = {
    next: PropTypes.func,
}
