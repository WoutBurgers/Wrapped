import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const jumpAnimation = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  } 
  50% {
    transform: scale(0.1);
    opacity: 0;
  }
  70% {
    transform: translateY(-10px) scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const StyledImage = styled.img`
    max-width: 70vw;
    animation: ${jumpAnimation} 1.7s ease-in;
`

const Image = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const img = new window.Image()
        img.src = src
        img.onload = () => {
            setIsLoaded(true)
        }
    }, [src])

    return <StyledImage src={src} alt={alt} isLoaded={isLoaded} />
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Image
