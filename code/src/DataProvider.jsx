import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const Context = createContext();

export default function DataProvider({ children }) {
  const [tiktokData, setTikTokData] = useState({})
  const [tiktokStats, setTikTokStats] = useState({
    viewedVideos: 0,
    firstVideo: new Date(),
  })

  return (
    <Context.Provider value={{ tiktokData, setTikTokData, tiktokStats, setTikTokStats}}>
      {children}
    </Context.Provider>
  );
}


DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
