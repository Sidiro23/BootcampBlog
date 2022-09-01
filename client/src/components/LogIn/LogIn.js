import React, {useState} from 'react'


function LogIn(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const errors = {
        userName: "invalid username",
        password: "invalid password"
      };
      const handleSubmit = (event) =>{
        event.preventDefault()
        var {userName, password} = document.forms[0];
        const userData = database.find((user) => user.userName === userName.value);
        if (userData) {
            if (userData.password !== password.value) {
              setErrorMessages({ name: "password", message: errors.password });
            } else {
              setIsSubmitted(true);
            }
          } else {
            setErrorMessages({ name: "userName", message: errors.userName });
          }
        }
      };



//JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );