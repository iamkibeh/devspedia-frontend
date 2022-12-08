import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs'

const OneArticle = () => {
  const [readMore, setReadMore] = useState(false)
  const info =
    'This is not just an article of the sort but a fantastic resource on what it takes to become a Web developer. It lists all the technologies and tools a Web developer should be familiar with.'

  return (
    <div className='article-card'>
      <div className='article-image'>
        <div className='article-image-myimage'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
        </div>
        <p>john doe</p>
      </div>

      <div className='article-content'>
        <div className='article-title'>
          <h4>Getting started with React</h4>
        </div>
        <div className='article-description'>
          <p>
            {readMore ? info : `${info.substring(0, 100)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          </p>
        </div>
        <div className='article-footer'>
          <p>22-12-2022</p>
          <p>
            <BsHeart />
          </p>
        </div>
      </div>
    </div>
  )
}

export default OneArticle