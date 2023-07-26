import CalculateResults from './CalculateResults';
import Upload from './Upload'
import React from 'react'

const tiktokRoutes = [
    {
      path: "/tiktok/upload/",
      component: <Upload />,
    },
    {
      path: "/tiktok/calculateResults/",
      component: <CalculateResults />,
    },
  ];
  
  export default tiktokRoutes;