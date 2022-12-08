import React, {useState, useEffect} from "react"
import OneArticle from "../free-articles/OneArticle"


function Article() {
const [readMore, setReadMore] = useState(false)

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    fetch('/articles')
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      setArticles(data)
    })
  },[readMore])

return (
  <>
    <div className='free-article-container'>
      <div className='free-articles-title'>
        <h2>Welcome to our articles pages</h2>
      </div>
      <div className='articles-container'>
        {
          articles.map(article => <OneArticle key={article.id} article = {article} setReadMore={setReadMore} readMore= {readMore}/> )
        }
      </div>
    </div>
  </>
)
}

export default Article
