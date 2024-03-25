import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function Blocked({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const blocked = tiktokSlides.blocked
    
    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{blocked.s1}</Subtitle>
                    <br />
                    <Title>{blocked.b1}</Title>
                    <br />
                    <Subtitle>{blocked.s2}</Subtitle>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

Blocked.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
