import React, { useState } from 'react'
import { VscSaveAs } from 'react-icons/vsc'
import { GiCancel } from 'react-icons/gi'

const Profile = () => {
  const dev_id = localStorage.getItem('dev')

  const [profileForm, setProfileForm] = useState({
    bio: '',
    image_url: '',
    linkedin: '',
    github: '',
    twitter: '',
    dev_id,
  })
  const handleFormChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    fetch('https://devspedia-api-production.up.railway.app/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('dev-token')}`,
      },
      body: JSON.stringify(profileForm),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        alert('profile updated succesfully!')
      })
  }
  return (
    <>
      <div className='profile-header'>
        <h3>Edit Profile</h3>
        <div className='profile-image'>
          <img
            src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='profile pic'
          />
        </div>
      </div>
      <div className='profle-body'>
        <div className='profile-form'>
          <form onSubmit={(e) => handleProfileSubmit(e)}>
            <div className='form-field'>
              <label htmlFor='bio'>Bio</label>
              <input
                type='text'
                name='bio'
                id='username'
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='image-url'>Image url</label>
              <input
                type='text'
                name='image_url'
                id='image-url'
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='github-url'>Github url</label>
              <input
                type='text'
                name='github'
                id='github-url'
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='linkedin-url'>Linkedin url</label>
              <input
                type='text'
                name='linkedin'
                id='linkedin-url'
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='twitter-url'>Twitter url</label>
              <input
                type='text'
                name='twitter'
                id='twitter-url'
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
            <div className='form-field-buttons'>
              <button className='cancel-btn' type='reset'>
                cancel
                <GiCancel className='tick-icon' />
              </button>
              <button type='submit'>
                save
                <VscSaveAs className='tick-icon' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile
