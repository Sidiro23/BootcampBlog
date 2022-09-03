import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/Homepage/Homepage'
import Comment from './components/Comment/Comment'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog';
// import Login from './components/LogIn/LogIn'
// import Signup from './components/SignUp/SignUp'
// import Header from './components/Header/Header'



function App(){
  return (
    <div >
      <Homepage />
      <Blog />
      <Comment />
      {/* <Header/> */}
      {/* <Login />
      <Signup /> */}
      <Footer/>
    </div>
  )
}

export default App;