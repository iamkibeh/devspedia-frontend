import React from 'react'
import './free-articles.css'
import { useInView } from 'react-intersection-observer'
import OneArticle from './OneArticle'

const FreeArticles = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    // rootMargin: '-200px'
  })
  return (
    <>
      <div className='free-article-container'>
        <div className='free-articles-title'>
          <h1>Latest from DevsPedia</h1>
        </div>
        <div className={inView ? 'articles-container' : null} ref={ref}>
          <OneArticle />
          <OneArticle />
          <OneArticle />
        </div>
        <div className='show-more-button'>
          <button>read more</button>
        </div>
      </div>
    </>
  )
}

export default FreeArticles
