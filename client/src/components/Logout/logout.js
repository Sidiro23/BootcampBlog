import React, { useState } from "react";
import Auth from "../../utils/auth";
import Link from "react-router-dom";



const SignOut = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <button
      className="btn btn-block btn-dark"
      style={{ cursor: "pointer" }}
      type="submit"
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default SignOut;
