import React, { useState } from "react";
import Auth from "../../utils/auth";
import Link from 'react-router-dom';

// import "./login.css";


const SignOut = () => {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
//       <div>
//       {Auth.loggedIn() ? (
//         <>
//           <Link className="btn btn-lg btn-info m-2" to="/me">
//             {Auth.getProfile().data.email}'s profile
//           </Link>
//           <button className="btn btn-lg btn-light m-2" onClick={logout}>
//             Logout
//           </button>
//         </>
// )
//       }
//       </div>
//* <div>
/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
</div> */

  
<button
className="btn btn-block btn-dark"
style={{ cursor: "pointer" }}
type="submit"
onSubmit={logout}
>
Login
</button>

       
     );
  };
  
  export default SignOut;