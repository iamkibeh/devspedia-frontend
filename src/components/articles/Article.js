import React from 'react'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from '../signup/Signup';
import Login from '../login/Login';



function Article() {

  const [loggedIn, setLoggedIn] = useState({})
  const [articles, setArticles] = useState([])
  const [post, setPosts] = useState(true)

  const addNewUser = (newUser) => setLoggedIn(newUser);


  useEffect(() => {
    fetch(`http://localhost:`)
    .then(r => r.json())
    .then( (articles) => {
      console.log(articles)
      setArticles(articles)
    })
    }, [loggedIn, post])

    const deleteArticle = (id) => {
        const newArticles = articles.filter(article => article.id !== id)
        setArticles(newArticles)
    }

    function handleNewPost() {
      setPosts((post) => !post)
    }



  return (
    <div className="App">
      <Routes>
          <Route path='/home' element= {
          <Article articles={articles} 
          loggedIn={loggedIn}
           deleteArticle={deleteArticle} 
           handleNewPost={handleNewPost}/>
           }/> 
          <Route path='/users/new' element = {<Signup addNewUser={addNewUser}/>}/>
          <Route path='/login' element = { <Login setLoggedIn={setLoggedIn} />}/>
      </Routes>
    </div>
  );
}

export default Article
