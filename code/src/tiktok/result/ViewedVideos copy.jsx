import React, { useContext } from 'react'
import { Context } from '../../DataProvider'


export default function ViewedVideos() {

    const { tiktokStats } = useContext(Context)

    
  return (
    <div>
      <p>Since {tiktokStats.firstVideo.toDateString()} you have watched</p>
      <br></br>
      <h1>{tiktokStats.viewedVideos}</h1>
      <br></br>
      <p>videos!</p>
    </div>
  )
}
