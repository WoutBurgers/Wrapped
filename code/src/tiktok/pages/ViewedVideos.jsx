import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'

export default function ViewedVideos({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const viewedVideos = tiktokSlides.viewedVideos

    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{viewedVideos.s1}</Subtitle>
                    <br />
                    <Title>{viewedVideos.b1}</Title>
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
