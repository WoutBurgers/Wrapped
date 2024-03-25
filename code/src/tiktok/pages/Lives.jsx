import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function Lives({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const lives = tiktokSlides.lives
    
    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{lives.s1}</Subtitle>
                    <br />
                    <Title>{lives.b1}</Title>
                    <br />
                    <Subtitle>{lives.s2}</Subtitle>
                    <br />
                    <Title>{lives.b2}</Title>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

Lives.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
