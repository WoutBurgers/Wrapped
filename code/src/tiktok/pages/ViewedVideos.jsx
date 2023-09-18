import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'

export default function ViewedVideos({ next, back, showButtons }) {
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

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

ViewedVideos.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
