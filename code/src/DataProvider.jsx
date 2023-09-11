import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

export default function DataProvider({ children }) {
    const [tiktokData, setTikTokData] = useState({})
    const [tiktokStats, setTikTokStats] = useState({})
    const [tiktokSlides, setTikTokSlides] = useState({})

    return (
        <Context.Provider
            value={{ tiktokData, setTikTokData, tiktokStats, setTikTokStats, tiktokSlides, setTikTokSlides }}
        >
            {children}
        </Context.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
