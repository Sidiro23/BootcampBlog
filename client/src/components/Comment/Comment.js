import React from "react";
import "./comment.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Comment = ({ blogId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          blogId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(event);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Button onClick={handleShow}>Comment</Button>
          <Modal show={show} id="modal">
            <Modal.Header>
              <h5>Comment</h5>
              <Button className="btn-close" onClick={handleClose}></Button>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3 userDiv">
                  <div className="avatar"></div>
                  <label className="col-form-label username"></label>
                </div>
                <div className="mb-3">
                  <p>This is where the post content will go</p>
                </div>
                <div className="mb-3">
                  <label className="col-form-label comment">Comment:</label>
                  <textarea
                    name="commentText"
                    className="form-control"
                    value={commentText}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Modal.Footer>
                  <Button type="submit">
                    Submit
                  </Button>
                  <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <p className="loggedInMessage">You need to be logged in to share your blogs.</p>
      )}
    </div>
  );
};

export default Comment;
