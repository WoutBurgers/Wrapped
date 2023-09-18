import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'

export default function LongestSession({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const longestSession = tiktokSlides.longestSession

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>{longestSession.s1}</p>
                    <br />
                    <h1>{longestSession.b1}</h1>
                    <br />
                    <p>{longestSession.s2}</p>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

LongestSession.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
