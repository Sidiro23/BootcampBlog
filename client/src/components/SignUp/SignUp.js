import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import "./Signup.css";
import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      // data.addUser;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="container-signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="container-user">
            <input 
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="container-user">
            <input 
            className="form-input"
            placeholder="Your username"
            name="username"
            type="text"
            value={formState.name}
            onChange={handleChange}
            required=""
            />
            <label>Username</label>
          </div>
          <div className="container-user">
            <input
             className="form-input"
             placeholder="******"
             name="password"
             type="password"
             value={formState.password}
             onChange={handleChange}
             />
            <label>Pasword</label>
          </div>
          <button
            className="btn btn-block btn-dark"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
                  Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

// import { checkPassword, validateEmail, validateName } from '../utils/helpers'
// const bcrypt = require ('bcrypt');
// const saltRounds = 10;
// import {resolvers} from '../../../../server/schemas/resolvers'

// function Signup(){
//     const [email, setEmail]=useState('');
//     const [userName, setUsername]=useState('');
//     const [firstName, setFirstName]=useState('');
//     const [lastName, setLastName]=useState('');
//     const [password, setPassword]=useState('');
//     const [errorMessage, setErrorMessage]=useState('');

//     const handleInputChange = (e) =>{
//         const {target}=e;
//         const inputType = target.name;
//         const inputValue = target.value;

//         if (inputType === 'email'){
//             setEmail(inputValue);
//         } else if (inputType === 'userName'){
//             setUsername(inputValue);
//         }else if (inputType === 'firstName'){
//             setFirstName(inputValue);
//         }else if (inputType ==='lastName'){
//             setLastName(inputValue)
//         }else if (inputType ==='password'){
//             setPassword(inputValue);
//         }
//     };

//     const handleFormSubmit = (e) =>{
//         e.preventDefault();
//         if (!validateEmail(email)|| !userName){
//             setErrorMessage('Email or Username is invalid');
//             return
//         }
//         if(!checkPassword(password)){
//             setErrorMessage(
//                 `Choose a more secure password for ${userName}`
//             );
//             return
//         }
//         if (!validateName(firstName)){
//             setErrorMessage(
//                 'Please enter a first Name'
//             );
//             return
//         }
//         if(!validateName(lastName)){
//             setErrorMessage(
//                 'Please enter a last name'
//             );
//             return
//         }
//         alert(`Welcome ${userName}`);
//         setEmail('');
//         setUsername('');
//         setFirstName('');
//         setLastName('');
//         setPassword('');

//     };
//     return(
//     <div className="row">
//     <div className="col-md-12">
//       <form action="index.html" method="post">
//         <h1> Sign Up </h1>

//            <label for = 'firstName'>First Name:</label>
//            <input
//            value ={firstName}
//            type = 'text'
//            name ='firstName'
//            onChange = {handleInputChange}
//            />
//            <label for = 'lastName'>Last Name:</label>
//            <input
//            value ={lastName}
//            type = 'text'
//            name ='lastName'
//            onChange = {handleInputChange}
//            />
//            <label for="userName">Username:</label>
//            <input
//            value={userName}
//            type="text"
//            name="useName"
//            onChange = {handleInputChange}
//            />
//            <label for="email">Email:</label>
//            <input
//            value ={email}
//            type="email"
//            name="email"
//            onChange={handleInputChange}
//            />
//            <label for="password">Password:</label>
//            <input
//            value = {password}
//            type="password"
//            name="password"
//            onChange ={handleInputChange}
//            />

//         <button type="button" onClick={[handleFormSubmit, resolvers]}>Sign Up</button>

//     </form>
//     {errorMessage &&(
//         <div>
//             <p className='error-text'>{errorMessage}</p>
//         </div>
//     )}
//     </div>
//     </div>
//   )
// }
// export default Signup;