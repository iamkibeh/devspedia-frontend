import React from 'react'
import DevsDashboard from './DevsDashboard'

const Profile = () => {
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
          <form action='#'>
            <div className='form-field'>
              <label htmlFor='username'>username</label>
              <input type='text' name='u-name' id='username' />
            </div>
            <div className='form-field'>
              <label htmlFor='image-url'>image url</label>
              <input type='text' name='image-url' id='image-url' />
            </div>
            <div className='form-field'>
              <label htmlFor='github-url'>github url</label>
              <input type='text' name='github-url' id='github-url' />
            </div>
            <div className='form-field'>
              <label htmlFor='linkedin-url'>linkedin url</label>
              <input type='text' name='linkedin-url' id='linkedin-url' />
            </div>
            <div className='form-field'>
              <label htmlFor='twitter-url'>twitter url</label>
              <input type='text' name='twitter-url' id='twitter-url' />
            </div>
            <div className='form-field-buttons'>
              <button>cancel</button>
              <button type='submit'>save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile
