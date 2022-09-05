import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import "./blogList.css";
// import CommentCard from "../Comment/CommentCard";
// import Comment from "../Comment/Comment";

const BlogListUser = ({ users }) => {
  // if (!users.length) {
  //   return <h3>No Blogs Yet</h3>;
  // }

  return (
    <div>
      <h3></h3>
      {users &&
        users.map((user) => (
          <div key={user._id} className="container-blog">
            <div className="card">
              <div className="card-header">
                <div className="card-avatar"></div>
                <p className="card-author">{user.username}</p>
                <p className="createdAt">
                  {user.email}
                </p>
              </div>
              <div className="card-body">
                {/* <p className="card-text">{blog.blogText}</p> */}
              </div>
              <Link
              // className="btn btn-primary btn-block btn-squared"
              // to={`/blogs/${blog._id}`}
            >
              Join the discussion on this blogs.
            </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogListUser;