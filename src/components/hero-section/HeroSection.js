import React from 'react'
import myVideo from '../../videos/pexels-cottonbro-5473806.mp4'
import './herosection.css'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <>
      <div className='embedded-video'>
        <video src={myVideo} autoPlay loop muted></video>
      </div>
      <div className='overlay'></div>
      <div className='content'>
        <h1>
          <TypeAnimation
            sequence={[
              'Explore',
              1000,
              "Explore developers'",
              1000,
              'Explore developers articles',
              1000,
            ]}
            cursor={false}
            wrapper='div'
            easing='ease-in-out'
            repeat={2}
          />
          {/* Explore developers' articles */}
        </h1>
      </div>
    </>
  )
}

export default HeroSection
