import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import "./edit.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Auth from "../../utils/auth";
import { useMutation } from '@apollo/client';
import { UPDATE_BLOG } from '../../utils/mutations';
import { QUERY_BLOGS, QUERY_ME } from '../../utils/queries';

const Edit = (props) => {
const [blogText, setBlogText] = useState('');


const [updateBlog, { error }] = useMutation(UPDATE_BLOG, {
  update(cache, { data: { updateBlog } }) {
    try {
      const { blogs } = cache.readQuery({ query: QUERY_BLOGS });

      cache.writeQuery({
        query: QUERY_BLOGS,
        data: { blogs: [updateBlog, ...blogs] },
      });
    } catch (e) {
      console.error(e);
    }

    const { me } = cache.readQuery({ query: QUERY_ME });
    cache.writeQuery({
      query: QUERY_ME,
      data: { me: { ...me, blogs: [...me.blogs, updateBlog] } },
    });
  },
});

const handleFormSubmit = async (event) => {
  event.preventDefault();

  try {
    const { data } = await updateBlog({
      variables: {
      updateBlogId:props.id,
        blogText,
      },
    });

    setBlogText('');
  } catch (err) {
    console.error(err);
  }
};

const handleChange = (event) => {
  const { name, value } = event.target;

  if (name === 'blogText' && value.length) {
    setBlogText(value);
  }
};

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="editBlog">
      {Auth.loggedIn() ? (
        <>
          <button className="editBtn" onClick={handleShow}>
          <FontAwesomeIcon className="penToSquare" icon={faPenToSquare}></FontAwesomeIcon>
          </button>
          <Modal show={show} id="modal">
            <Modal.Header>
              <Button className="btn-close" onClick={handleClose}></Button>
            </Modal.Header>
            <Modal.Body>
              <form  onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="col-form-label comment">Edit Text:</label>
                  <textarea
                    name="blogText"
                    className="form-control"
                    value={blogText}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Modal.Footer>
                  <Button style={{backgroundColor: "#5b5b62", border:"solid 1px black"}} onClick={handleClose} type="submit">Update</Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <p className="loggedInMessage">
          You need to be logged in to share your blogs.
        </p>
      )}
    </div>
  );
};

export default Edit;
