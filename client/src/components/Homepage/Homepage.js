import React from "react";
import Blog from './components/Blog/Blog';
import Comment from './components/Comment/Comment'

export default function Homepage() {
  return (
    <div className="container-home">
      <h1>Home</h1>
      <Blog />
      <Comment />
    </div>
  );
}
