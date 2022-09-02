import React, {useState} from 'react'


function Login(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const errors = {
        userName: "invalid username",
        password: "invalid password"
      };
      const handleSubmit = (event) =>{
        event.preventDefault()
        var {userName, password} = document.forms[0];
        // const userData = database.find((user) => user.userName === userName.value);
        // if (userData) {
        //     if (userData.password !== password.value) {
        //       setErrorMessages({ name: "password", message: errors.password });
        //     } else {
        //       setIsSubmitted(true);
        //     }
        //   } else {
        //     setErrorMessages({ name: "userName", message: errors.userName });
        //   }
        }
        const renderForm =(
          <form>
          <input type="text"  name="login" placeholder="login"/>
          <input type="text"   name="login" placeholder="password"/>
          <button type='button'onClick= {handleSubmit}>Log In</button>
        </form>
        )
        return(
            <div id="formContent">
                <h2 className="active"> Sign In </h2>
                {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
                {renderForm}
            </div>
        ) 
      };

export default Login;





// //JSX code for error message
// const setErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );