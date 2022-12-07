import React from 'react'
import './dev.css'

const DevArticles = () => {
  return (
    <>
      <h2>create article</h2>
      <div className='profile-form article-form'>
        <form>
          <div className='form-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' required />
          </div>
          <div className='form-field'>
            <label htmlFor='image-url'>Image url</label>
            <input type='text' name='image-url' id='image-url' required />
          </div>
          <div className='form-field'>
            <label htmlFor='description'>Description</label>
            <textarea name='description' id='description' required />
          </div>
          <div className='checkbox-tick'>
            <input type='checkbox' name='is_free' id='is_free' />
            <label for='is_free'>Premium</label>
          </div>
          <div className='form-field-buttons'>
            <button>cancel</button>
            <button type='submit'>save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default DevArticles
