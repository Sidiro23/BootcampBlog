import React from "react";
import "./HomePageNav.css";
import { Nav } from "react-bootstrap";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs homepageTabs">
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
          className={currentPage === "Dashboard" ? "nav-link active" : "nav-link"}
        >
          DashBoard
        </a>
      </li>
      <li className="nav nav-tabs bg-dark blogTab">
        <a
          href="#blog"
          onClick={() => handlePageChange("Blog")}
          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </a>
      </li>

      {/* <li className='nav nav-tabs'>
                <a href='/signup'
                onClick={()=> handlePageChange('SignUp')}
                className={currentPage ==='SignUp'?'nav-link active':'nav-link'}
                >
                    Sign Up
                </a>
            </li>
            <li className='nav nav-tabs'>
                <a
                href='/login'
                onClick={()=> handlePageChange('LogIn')}
                className={currentPage === 'LogIn'? 'nav-link active':'nav-link'}
                >
                    Log In
                </a>
            </li> */}
    </ul>
  );
}

export default NavBar;
