import React from "react";
import "./blog.css";
import { Button } from "react-bootstrap";
import CommentCard from "../Comment/CommentCard";
import Comment from "../Comment/Comment";
import Auth from "../../utils/auth";

// import { validateBlogPost} from "../utils/helpers";
// import {resolvers} from "../../../.././server/schemas/resolvers";

function Blog() {
  return (
    <div className="container-blog">
      <div className="card">
        <div className="card-header">Author</div>
        <div className="card-body">
          <p className="card-text ">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Button className="bg-dark">Comment</Button>
        </div>
      </div>
      <div>{/* <CommentCard /> */}</div>
    </div>
  );
}

export default Blog;

// onClick={[validateBlogPost, resolvers]}
