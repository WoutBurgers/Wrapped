import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'

const Subtitle = ({ children }) => {
    const typingAnimation = keyframes`
        0% {
            width: 0;
            white-space: nowrap;
        }
        100% {
            width: 100%;
            white-space: normal;
        }
    `

    const fadeInAnimation = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `

    const StyledSubtitle = styled.p`
        animation: ${(props) => css`
            ${typingAnimation} 1.0s steps(${props.children.length}, end),
            ${fadeInAnimation} 1s ease-in;
        `};
    `

    const [text, setText] = useState('')

    useEffect(() => {
        setText(children)
    }, [children])

    return <StyledSubtitle>{text}</StyledSubtitle>
}

Subtitle.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Subtitle
