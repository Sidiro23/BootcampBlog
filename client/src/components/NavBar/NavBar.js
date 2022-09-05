import React from "react";
import "./NavBar.css";

function NavBar({ currentPage, handlePageChange }) {
  return (
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
          href="#dashboard"
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
    </ul>
  );
}

export default NavBar;
