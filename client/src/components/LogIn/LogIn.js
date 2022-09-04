import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import "./login.css";
import Auth from "../../utils/auth";
const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
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
      const { data } = await login({
        variables: { ...formState},
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e)
    }
  };
  return (
    <div>
      <div className="container-login">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="container-user">
            <input
            className="form-input"
            placeholder=""
            name="email"
            type="text"
            value={formState.email}
            onChange={handleChange}
            required=""
            />
            <label>Email</label>
          </div>
          <div className="container-user">
            <input
            className="form-input"
            placeholder=""
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <button
            className="btn btn-block btn-dark"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
// import {resolvers} from '../../../../server/schemas/resolvers'
// function Login(){
//     const [errorMessages, setErrorMessages] = useState({});
//     // const [isSubmitt  ed, setIsSubmitted] = useState(false);
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
