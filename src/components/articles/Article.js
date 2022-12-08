import React from 'react'
import OneArticle from '../free-articles/OneArticle'

const Article = () => {
  return (
    <>
      <div className='free-article-container'>
        <div className='free-articles-title'>
          <h2>Welcome to our articles pages</h2>
        </div>
        <div className='articles-container'>
          <OneArticle />
          <OneArticle />
          <OneArticle />
          <OneArticle />
          <OneArticle />
          <OneArticle />
          <OneArticle />
        </div>
      </div>
    </>
  )
}

export default Article
