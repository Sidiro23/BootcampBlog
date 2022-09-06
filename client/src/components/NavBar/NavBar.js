import React from "react";
import "./NavBar.css";
import Auth from "../../utils/auth";


  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    
  }
function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className="container-nav">
      <ul className="nav nav-tabs homeTabs">
      <li className="nav nav-tabs bg-dark homeTab">
        <a
          href="/"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav nav-tabs bg-dark dashboardTab">
        <a
          href="/dashboard"
          onClick={() => handlePageChange("Dashboard")}
          className={
            currentPage === "Dashboard" ? "nav-link active" : "nav-link"
          }
        >
          DashBoard
        </a>
      </li>
      <li className="nav nav-tabs bg-dark loginTab">
        <a
          href="/login"
          onClick={() => handlePageChange("Login")}
          className={currentPage === "Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </a>
      </li>
      <li className="nav nav-tabs bg-dark signupTab">
        <a
          href="/signup"
          onClick={() => handlePageChange("SignUp")}
          className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
        >
          Sign up
        </a>
      </li>
      <li className="nav nav-tabs bg-dark signupTab">

      <button
      className="btn btn-block btn-dark"
      style={{ cursor: "pointer" }}
      type="submit"
       onClick={logout}
    >
      Logout
    </button>
        {/* <a
          href="/SignOut"
          onClick={() => handlePageChange("SignOut")}
          className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
        >
          Logout
        </a> */}
      </li>
    </ul>
    </div>
    
  );
}

export default NavBar;
