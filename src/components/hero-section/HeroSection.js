import React from 'react'
import myVideo from '../../videos/pexels-cottonbro-5473806.mp4'
import './herosection.css'

const HeroSection = () => {
  return (
    <>
      <div className='embedded-video'>
        <video src={myVideo} autoPlay loop muted></video>
      </div>
      <div className='overlay'></div>
      <div className='content'>
        <h1>Explore developers' articles</h1>
      </div>
    </>
  )
}

export default HeroSection
