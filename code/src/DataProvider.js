import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const Context = createContext();

export default function DataProvider({ children }) {
  const [tiktokData, setTikTokData] = useState([])
  const test = 'test'

  return (
    <Context.Provider value={{ test, tiktokData, setTikTokData }}>
      {children}
    </Context.Provider>
  );
}


DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

