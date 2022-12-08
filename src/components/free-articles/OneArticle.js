import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs'

const OneArticle = ({ article }) => {
  const {
    created_at,
    dev,
    featured_image,
    id,
    likes,
    minutes_to_read,
    title,
    content,
  } = article
  const [readMore, setReadMore] = useState(false)

  console.log(article)

  return (
    <div className='article-card'>
      <div className='article-image'>
        <div className='article-image-myimage'>
          <img src={featured_image} alt='profile pic' />
        </div>
        <p>{dev.username}</p>
      </div>

      <div className='article-content'>
        <div className='article-title'>
          <h4>{title}</h4>
        </div>
        <div className='article-description'>
          <p>
            {readMore ? { content } : `${content.substring(0, 100)}...`}
            <button onClick={() => setReadMore((readMore) => !readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          </p>
        </div>
        <div className='article-footer'>
          <p>{created_at}</p>
          <p>
            {likes} <BsHeart />
          </p>
        </div>
      </div>
    </div>
  )
}

export default OneArticle
