import React, {useState} from 'react'
import { checkPassword, validateEmail, validateName } from '../utils/helpers'
// const bcrypt = require ('bcrypt');
// const saltRounds = 10;

import {resolvers} from '../../../../server/schemas/resolvers'

function Signup(){
    const [email, setEmail]=useState('');
    const [userName, setUsername]=useState('');
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [password, setPassword]=useState('');
    const [errorMessage, setErrorMessage]=useState('');

    const handleInputChange = (e) =>{
        const {target}=e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email'){
            setEmail(inputValue);
        } else if (inputType === 'userName'){
            setUsername(inputValue);
        }else if (inputType === 'firstName'){
            setFirstName(inputValue);
        }else if (inputType ==='lastName'){
            setLastName(inputValue)
        }else if (inputType ==='password'){
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if (!validateEmail(email)|| !userName){
            setErrorMessage('Email or Username is invalid');
            return
        }
        if(!checkPassword(password)){
            setErrorMessage(
                `Choose a more secure password for ${userName}`
            );
            return 
        }
        if (!validateName(firstName)){
            setErrorMessage(
                'Please enter a first Name'
            );
            return
        }
        if(!validateName(lastName)){
            setErrorMessage(
                'Please enter a last name'
            );
            return
        }
        alert(`Welcome ${userName}`);
        setEmail('');
        setUsername('');
        setFirstName('');
        setLastName('');
        setPassword('');

    
    };
    return(
    <div className="row">
    <div className="col-md-12">
      <form action="index.html" method="post">
        <h1> Sign Up </h1>
        
           <label for = 'firstName'>First Name:</label> 
           <input 
           value ={firstName}
           type = 'text' 
           name ='firstName'
           onChange = {handleInputChange}
           /> 
           <label for = 'lastName'>Last Name:</label> 
           <input 
           value ={lastName}
           type = 'text' 
           name ='lastName'
           onChange = {handleInputChange}
           />     
           <label for="userName">Username:</label>
           <input 
           value={userName}
           type="text" 
           name="useName"
           onChange = {handleInputChange}
           />
           <label for="email">Email:</label>
           <input
           value ={email} 
           type="email" 
           name="email"
           onChange={handleInputChange}
           />
           <label for="password">Password:</label>
           <input
           value = {password} 
           type="password" 
           name="password"
           onChange ={handleInputChange}
           />
      
        <button type="button" onClick={[handleFormSubmit, resolvers]}>Sign Up</button>
        
    </form>
    {errorMessage &&(
        <div>
            <p className='error-text'>{errorMessage}</p>
        </div>
    )}
    </div>
    </div>
  )
}
export default Signup;