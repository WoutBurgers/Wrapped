import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function LongestSession({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const longestSession = tiktokSlides.longestSession

    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{longestSession.s1}</Subtitle>
                    <br />
                    <Title>{longestSession.b1}</Title>
                    <br />
                    <Subtitle>{longestSession.s2}</Subtitle>
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
