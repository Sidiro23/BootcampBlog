import React from "react";
<<<<<<< HEAD
import {resolvers} from "../../../.././server/schemas/resolvers";
import {ADD_BLOG} from '../../utils/mutations'



function Blog(){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <textarea className="form-control-lg" placeholder="What's on your mind?"/>
                </div>
                <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={resolvers}>Button</button>
                </div> 
            </form>
=======
import "./blog.css";
import { Button } from "react-bootstrap";
import CommentCard from "../Comment/CommentCard";
import Comment from "../Comment/Comment";

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
>>>>>>> 88868ff6d3dc5f784be247058951a2b0cd0f1786
        </div>
      </div>
      <div>{/* <CommentCard /> */}</div>
    </div>
  );
}

export default Blog;


