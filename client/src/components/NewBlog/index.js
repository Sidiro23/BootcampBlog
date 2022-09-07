import "./newBlog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Button, Modal } from "react-bootstrap";
import { ADD_BLOG } from "../../utils/mutations";
import { QUERY_BLOGS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const NewBlog = () => {
  const [blogText, setBlogText] = useState("");

  const [addBlog, { error }] = useMutation(ADD_BLOG, {
    update(cache, { data: { addBlog } }) {
      try {
        const { blogs } = cache.readQuery({ query: QUERY_BLOGS });

        cache.writeQuery({
          query: QUERY_BLOGS,
          data: { blogs: [addBlog, ...blogs] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, blogs: [...me.blogs, addBlog] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBlog({
        variables: {
          blogText,
          blogAuthor: Auth.getProfile().data.username,
        },
      });

      setBlogText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "blogText" && value.length) {
      setBlogText(value);
    }
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="newClass">
      <button className="blogBtn" onClick={handleShow}>
        <FontAwesomeIcon className="faPlus" icon={faPlus}></FontAwesomeIcon> New Blog
      </button>
      <Modal show={show} id="modal">
        <Modal.Header>
          <Button className="btn-close" onClick={handleClose}></Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label className="col-form-label comment">Text:</label>
              <textarea
                name="blogText"
                className="form-control"
                value={blogText}
                onChange={handleChange}
              ></textarea>
            </div>
            <Modal.Footer>
              <Button style={{backgroundColor: "#5b5b62", border:"solid 1px black"}} onClick={handleClose} type="submit">
                Save
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewBlog;
