import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LogIn from './components/Login/Login'
import SignUp from './components/Signup/Signup'



function App(){
  return (
    <div >
      <Header/>
      <LogIn />
      <SignUp />
      <Footer/>
    </div>
  )
}

export default App