import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import ResultBottomButtons from '../components/ResultBottomButtons'
import PropTypes from 'prop-types'
import Title from '../../styled-components/Title'
import Subtitle from '../../styled-components/SubTitle'
import Image from '../../styled-components/Image'

export default function Character({ next, back, showButtons }) {
    const { tiktokSlides } = useContext(Context)

    const character = tiktokSlides.character
    return (
        <>
            <div className="standard-style">
                <div>
                    <Subtitle>{character.s1}</Subtitle>
                    <br />
                    <Image src={`/character-images/${character.image}`} alt="Character Image" />
                    <Title>{character.b1}</Title>
                    <Subtitle>{character.s2}</Subtitle>
                </div>
            </div>

            {showButtons ? <ResultBottomButtons back={back} next={next} /> : null}
        </>
    )
}

Character.propTypes = {
    next: PropTypes.func,
    back: PropTypes.func,
    showButtons: PropTypes.bool,
}
