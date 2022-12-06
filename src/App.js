import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
      <Routes>
          <Route path='/users/new' element = {<Signup/>}/>
          <Route path='/login' element = { <Login/>}/>
      </Routes>
  </>
)
}

export default App
