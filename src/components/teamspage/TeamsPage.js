import React, { useState, useEffect } from 'react'
import { SliderData } from './assets/SliderData'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import './teamspage.css'
import { TypeAnimation } from 'react-type-animation'

const TeamsPage = () => {
  // set the current image to display
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setCurrentImage(
        currentImage === SliderData.length - 1 ? 0 : currentImage + 1
      )
    }, 5000)

    return () => {
      clearTimeout(myTimeout, 4000)
    }
  }, [currentImage])

  const prevSlide = () => {
    setCurrentImage(
      currentImage === 0 ? SliderData.length - 1 : currentImage - 1
    )
  }
  const nextSlide = () => {
    setCurrentImage(
      currentImage === SliderData.length - 1 ? 0 : currentImage + 1
    )
  }
  return (
    <>
      <div className='teams-container'>
        <h2 className='meet-us'>
          <TypeAnimation
            sequence={['meet', 1000, 'meet our', 1000, 'meet our team', 1000]}
            cursor={false}
            wrapper='h2'
            easing='ease-in-out'
            repeat={1}
          />
          {/* meet <span>our</span> team */}
        </h2>
        <div className='sliding-images-container'>
          <FaAngleLeft className='prev-slide' onClick={prevSlide} />
          <FaAngleRight className='next-slide' onClick={nextSlide} />

          <div className='card-container'>
            <div className='developer-content'>
              <div className='developer-content-child'>
                <h4>{SliderData[currentImage].name}</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias nihil fuga tenetur nam aut vitae ratione provident
                  omnis, illum assumenda eos magni inventore! Sequi ipsum qui,
                  similique accusantium dolorum atque.
                </p>
              </div>
            </div>
            <img
              src={SliderData[currentImage].image}
              alt=''
              className='img-card'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamsPage
