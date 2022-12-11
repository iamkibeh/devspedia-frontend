import React, { useState } from 'react'
import './dev.css'
import { VscSaveAs } from 'react-icons/vsc'
import { GiCancel } from 'react-icons/gi'
import { redirect, useNavigate } from 'react-router-dom'

const DevArticles = () => {
  const dev_id = localStorage.getItem('dev')
  const [newArticle, setNewArticles] = useState({
    title: '',
    content: '',
    minutes_to_read: '',
    featured_image: '',
    dev_id,
    is_free: true,
  })
  const navigate = useNavigate()

  console.log()
  const handleArticleChange = (e) => {
    setNewArticles({
      ...newArticle,
      [e.target.name]: e.target.value,
    })
  }
  console.log(newArticle)
  const handleSaveArticle = (e) => {
    e.preventDefault()
    fetch(`https://devspedia-api-production.up.railway.app/myarticles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('dev-token')}`,
      },
      body: JSON.stringify({
        title: newArticle.title,
        content: newArticle.content,
        minutes_to_read: newArticle.minutes_to_read,
        featured_image: newArticle.featured_image,
        dev_id: newArticle.dev_id,
        is_free: newArticle.is_free,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('article posted succesfully')
        console.log(data)
      })

    e.target.reset()
    navigate('/dev/dashboard/articles')
  }
  return (
    <>
      <h2>create article</h2>
      <div className='profile-form article-form'>
        <form onSubmit={handleSaveArticle}>
          <div className='form-field'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              required
              onChange={(e) => handleArticleChange(e)}
            />
          </div>
          <div className='form-field'>
            <label htmlFor='featured_image'>Featured Image URL</label>
            <input
              type='text'
              name='featured_image'
              id='featured_image'
              required
              onChange={(e) => handleArticleChange(e)}
            />
          </div>
          <div className='form-field'>
            <label htmlFor='Description'>Description</label>
            <textarea
              name='content'
              id='description'
              required
              onChange={(e) => handleArticleChange(e)}
            />
          </div>
          <div className='form-field'>
            <label htmlFor='minutes'>Minutes to Read</label>
            <input
              type='number'
              name='minutes_to_read'
              id='minutes'
              min='0'
              required
              onChange={(e) => handleArticleChange(e)}
            />
          </div>
          <div className='checkbox-tick'>
            <input
              type='checkbox'
              name='is_free'
              id='is_free'
              onChange={(e) =>
                setNewArticles({ ...newArticle, is_free: !newArticle.is_free })
              }
            />
            <label htmlFor='is_free'>Premium</label>
          </div>
          <div className='form-field-buttons'>
            <button className='cancel-btn'>
              cancel <GiCancel className='tick-icon' />
            </button>
            <button type='submit'>
              save <VscSaveAs className='tick-icon' />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default DevArticles
