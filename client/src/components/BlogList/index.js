import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./blogList.css";
import CommentCard from "../Comment/CommentCard";
import Comment from "../Comment/Comment";

const BlogList = ({ blogs, title }) => {
  if (!blogs.length) {
    return <h3>No Blogs Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {blogs &&
        blogs.map((blog) => (

          <div key={blog._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {blog.blogAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                had this blogs on {blog.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{blog.blogText}</p>
            </div>
            <Button>Read More</Button>
            <Link

          <div key={blog._id} className="container-blog">
            <div className="card">
              <div className="card-header">
                <div className="card-avatar"></div>
                <p className="card-author">{blog.blogAuthor}</p>
                <p className="createdAt">
                  {blog.createdAt}
                </p>
              </div>
              <div className="card-body">
                <p className="card-text">{blog.blogText}</p>
                <Button>Read More</Button>
              </div>
              <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/blogs/${blog._id}`}
            >
              Join the discussion on this blogs.
            </Link>

            </Link>
            </div>

          </div>
        ))}
    </div>
  );
};

export default BlogList;
