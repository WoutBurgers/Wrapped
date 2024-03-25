import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function Shares({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const shares = tiktokSlides.shares
    
    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{shares.s1}</Subtitle>
                    <br />
                    <Title>{shares.b1}</Title>
                    <br />
                    <Subtitle>{shares.s2}</Subtitle>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

Shares.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
