import React, {useState} from 'react'
import {resolvers} from '../../../../server/schemas/resolvers'


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
        const renderForm =(
          <form>
          <input type="text"  name="login" placeholder="login"/>
          <input type="text"   name="login" placeholder="password"/>
          <button type='button'onClick= {[handleSubmit, resolvers]}>Log In</button>
        </form>
        )
        render(
            <div id="formContent">
                <h2 class="active"> Sign In </h2>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        ) 
      };

export default LogIn;





// //JSX code for error message
// const setErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );