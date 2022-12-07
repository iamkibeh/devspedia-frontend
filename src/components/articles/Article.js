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
    .then( (notes) => {
      console.log(notes)
      setArticles(notes)
    })
    }, [loggedIn, post])

    const deleteArticle = (id) => {
        const newArticles = articles.filter(note => note.id !== id)
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
