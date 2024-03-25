import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function Emoji({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const emoji = tiktokSlides.emoji
    
    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{emoji.s1}</Subtitle>
                    <br />
                    <Title>{emoji.b1}</Title>
                    <br />
                    <Subtitle>{emoji.s2}</Subtitle>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

Emoji.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
