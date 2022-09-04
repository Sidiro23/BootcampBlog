import React from "react";
import Blog from '../Blog/Blog';
import Comment from "../Comment/Comment";
import Dashboard from '../DashBoard/DashBoard';
import HomePageNav from "../NavBar/HomePageNav"

export default function Homepage() {
  return (
    <div className="container-home">
      <HomePageNav />
      <Blog />
      <Comment />
      <Dashboard />
    </div>
  );
}
