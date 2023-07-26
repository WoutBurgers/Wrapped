import CalculateResults from './CalculateResults';
import Ready from './Ready';
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
    {
      path: "/tiktok/ready/",
      component: <Ready />,
    },
  ];
  
  export default tiktokRoutes;