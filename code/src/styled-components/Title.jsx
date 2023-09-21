import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'

const Title = ({ children }) => {
    const typing = keyframes`
        0% {
            width: 0;
        }
        100% {
            width: 100%;
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

    const StyledTitle = styled.h1`
        overflow: hidden;
        white-space: nowrap;
        animation: ${(props) => css`
            ${typing} 1.0s steps(${props.children.length}, end),
            ${fadeInAnimation} 1.8s ease-in;
        `};
    `

    const [text, setText] = useState('')

    useEffect(() => {
        setText(children)
    }, [children])

    return <StyledTitle>{text}</StyledTitle>
}

export default Title

Title.propTypes = {
    children: PropTypes.string.isRequired,
}
