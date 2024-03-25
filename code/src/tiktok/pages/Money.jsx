import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function Money({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const money = tiktokSlides.money
    
    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{money.s1}</Subtitle>
                    <Subtitle>{money.s2}</Subtitle>
                    <br />
                    <Title>{money.b1}</Title>
                    <br />
                    <Subtitle>{money.s3}</Subtitle>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

Money.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
