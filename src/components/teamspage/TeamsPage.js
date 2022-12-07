import React, { useState, useEffect } from 'react'
import { SliderData } from './assets/SliderData'
import './teamspage.css'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

const TeamsPage = () => {
  const [reviewDisplay, setReviewDisplay] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setReviewDisplay(
        reviewDisplay === SliderData.length - 1 ? 0 : reviewDisplay + 1
      )
    }, 15000)

    return () => {
      clearTimeout(myTimeout, 15000)
    }
  }, [reviewDisplay])
  return (
    <>
      <div className='teams-container'>
        <h2 className='meet-us'>
          <TypeAnimation
            sequence={['Meet', 1000, 'Meet Our', 1000, 'Meet Our Team', 1000]}
            cursor={false}
            wrapper='h2'
            easing='ease-in-out'
            repeat={1}
          />
          {/* meet <span>our</span> team */}
        </h2>
        <div className={inView ? 'sliding-images-container' : null} ref={ref}>
          {SliderData.map((review, ind) => {
            return (
              <div
                className={
                  reviewDisplay === ind
                    ? 'active-developer'
                    : 'not-active-developer'
                }
                key={ind}
              >
                <div className='card-div'>
                  <img src={review.image} alt='avatar of a person' />
                  <p>{review.name}</p>
                </div>
                <div className='bio-sec'>
                  <p>{review.bio}</p>
                  <p className='my-date'>
                    <span>{review.name}</span> {review.date}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TeamsPage
