import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"
import Edit from "../Edit/Edit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/client';
import { DELETE_BLOG } from '../../utils/mutations';
import { QUERY_BLOGS, QUERY_ME } from '../../utils/queries';

const BlogListUser = ({blogs}) => {
  const [removeBlog, { error }] = useMutation(DELETE_BLOG, {
    refetchQueries: [{query: QUERY_ME}],
    awaitRefetchQueries: true,
  })

  const handleFormSubmit = async (event,id) => {
    event.preventDefault();

    try {
      const { data } = await removeBlog({
        variables: {
          blogId:id
        },
      });

    } catch (err) {
      console.error(err);
    }
  };

  if (!blogs.length) {
    return <h3>No Blogs Yet</h3>;
  }

  return (
    <div>
    {blogs &&
      blogs.map((blog) => (
        <div key={blog._id} className="container-blog">
          <div className="card">
            <div className="card-header">
              <div className="card-avatar"></div>
              <p className="cardAuthor">Username: {blog.blogAuthor}</p>
              <p className="createdAt">
                {blog.createdAt}
              </p>
            </div>
            <div className="card-body">
              <p className="card-text">{blog.blogText}</p>
              {/* prop to pass id to the edit */}
              <div className='editButtons'>
              <form  onSubmit={(e)=>handleFormSubmit(e,blog._id)}>
              <button className="editBtn" type="submit">
              {/* <FontAwesomeIcon className="trashCan" icon={faTrashCan}></FontAwesomeIcon> */}
              Delete
              </button>
              </form>
              <Edit id={blog._id}/>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
  );
};

export default BlogListUser;