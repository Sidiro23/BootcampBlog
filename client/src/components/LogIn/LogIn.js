import React, { useState } from "react";
import "./login.css";

export default function Login() {
  return (
    <div>
      <div className="container-login">
        <h2>Login</h2>
        <form>
          <div className="container-user">
            <input type="text" name="" required=""></input>
            <label>Username</label>
          </div>
          <div className="container-user">
            <input type="password" name="" required=""></input>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </div>
  );
}

// import {resolvers} from '../../../../server/schemas/resolvers'
// function Login(){
//     const [errorMessages, setErrorMessages] = useState({});
//     // const [isSubmitted, setIsSubmitted] = useState(false);
//     const errors = {
//         userName: "invalid username",
//         password: "invalid password"
//       };
//       const handleSubmit = (event) =>{
//         event.preventDefault()
//         var {userName, password} = document.forms[0];
//         // const userData = database.find((user) => user.userName === userName.value);
//         // if (userData) {
//         //     if (userData.password !== password.value) {
//         //       setErrorMessages({ name: "password", message: errors.password });
//         //     } else {
//         //       setIsSubmitted(true);
//         //     }
//         //   } else {
//         //     setErrorMessages({ name: "userName", message: errors.userName });
//         //   }
//         }
//         const renderForm =(
//           <form>
//           <input type="text"  name="login" placeholder="login"/>
//           <input type="text"   name="login" placeholder="password"/>
//           <Button>Log In</Button>
//         </form>
//         )
//         return(
//             <div id="formContent">
//                 <h2 className="active">Login</h2>
//                 {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
//                 {renderForm}
//             </div>
//         )
//       };

// export default Login;

// onClick= {[handleSubmit, resolvers]}

// //JSX code for error message
// const setErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );
