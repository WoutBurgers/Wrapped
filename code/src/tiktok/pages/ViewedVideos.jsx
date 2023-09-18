import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'

export default function ViewedVideos({ next, back }) {
    const { tiktokSlides } = useContext(Context)

    const viewedVideos = tiktokSlides.viewedVideos

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>{viewedVideos.s1}</p>
                    <br />
                    <h1>{viewedVideos.b1}</h1>
                </div>
            </div>

            <ResultBottomButtons back={back} next={next} />
        </>
    )
}

ViewedVideos.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
}
