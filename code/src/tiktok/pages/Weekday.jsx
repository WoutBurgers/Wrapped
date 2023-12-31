import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function Weekday({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const weekday = tiktokSlides.weekday

    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{weekday.s1}</Subtitle>
                    <br />
                    <Title>{weekday.b1}</Title>
                    <br />
                    <Subtitle>{weekday.s2}</Subtitle>
                    <br />
                    <Title>{weekday.b2}</Title>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

Weekday.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
