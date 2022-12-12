import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import './dev.css'

const Settings = () => {
  const dev_id = parseInt(localStorage.getItem('dev'))
  const [profile, setProfile] = useState({})
  const [dev, setDev] = useState({})
  const [errors, setErrors] = useState(false)
  useEffect(() => {
    fetch(`https://devspedia-api-production.up.railway.app/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('dev-token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const myProfile = data.find((profile) => profile.dev.id === dev_id)
        if (myProfile) {
          setProfile(myProfile)
          localStorage.setItem('profile', `${profile.id}`)
        } else {
          setErrors(true)
        }
      })
  }, [dev_id, profile.id])

  useEffect(() => {
    fetch(`https://devspedia-api-production.up.railway.app/devs/${dev_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('dev-token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDev(data)
      })
  }, [dev_id])

  return (
    <>
      {errors ? (
        <div className='error'>
          <h2>You have not created your profile!</h2>
          <p>
            <Link to='/dev/dashboard/create-profile'>click</Link> here to create
            one
          </p>
        </div>
      ) : (
        <div className='profile-container'>
          <div className='profile-image'>
            <img src={profile.image_url} alt='profile pic' />
          </div>
          <div className='profile-content'>
            <h5>
              {dev.fname} {dev.lname}
            </h5>
            <div className='social-links'>
              <p>
                <a href={profile.github} target='blank'>
                  github
                </a>
              </p>
              |
              <p>
                <a href={profile.linkedin} target='blank'>
                  linkedin
                </a>
              </p>
              |
              <p>
                <a href={profile.twitter} target='blank'>
                  twitter
                </a>
              </p>
            </div>
          </div>
          <div className='bio-content'>
            <p>{profile.bio}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Settings
