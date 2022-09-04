import React from "react";
import Blog from '../Blog/Blog';
import Comment from "../Comment/Comment";
import Dashboard from '../DashBoard/DashBoard';
import Header from '../Header/Header';
// import Header from "../Header/Header";
import HomePageNav from "../NavBar/HomePageNav"

export default function Homepage() {
  return (
    <div className="container-home">
      <Header />
      <HomePageNav />
      <Blog />
      <Comment />
      <Dashboard />
    </div>
  );
}
