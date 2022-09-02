import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/Homepage/Homepage'
// import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/LogIn/LogIn'
import Signup from './components/SignUp/SignUp'



function App(){
  return (
    <div >
      <Homepage />
      {/* <Header/> */}
      <Login />
      <Signup />
      <Footer/>
    </div>
  )
}

export default App;