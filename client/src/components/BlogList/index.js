import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./blogList.css";
// import CommentCard from "../Comment/CommentCard";
// import Comment from "../Comment";

const BlogList = ({ blogs, title }) => {
  if (!blogs.length) {
    return <h3>No Blogs Yet</h3>;
  }

  return (
    <div className="container-blog">
      {/* <h3>{title}</h3> */}
      {blogs &&
        blogs.map((blog) => (
          <div key={blog._id} className="card">
            <div className="card-header">
              {/* <div className="card-avatar"></div> */}
              <p className="card-author">Username: {blog.blogAuthor}</p>
              <p className="createdAt">{blog.createdAt}</p>
            </div>
            <div className="card-body">
              <p className="card-text">{blog.blogText}</p>
            </div>
            <Link to={`/blogs/${blog._id}`}>
              <button className="readMe">Read More</button>
              <FontAwesomeIcon className="faCommet" icon={faComment}></FontAwesomeIcon>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
