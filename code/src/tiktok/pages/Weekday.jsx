import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'

export default function Weekday({ next, back }) {
    const { tiktokSlides } = useContext(Context)

    const weekday = tiktokSlides.weekday

    return (
        <>
            <div className="standard-style">
                <div>
                    <p>{weekday.s1}</p>
                    <br />
                    <h1>{weekday.b1}</h1>
                    <br />
                    <p>{weekday.s2}</p>
                    <br />
                    <h1>{weekday.b2}</h1>
                </div>
            </div>

            <ResultBottomButtons next={next} back={back} />
        </>
    )
}

Weekday.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
}
