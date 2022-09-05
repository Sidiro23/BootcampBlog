import React from "react";
import "./comment.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const CommentForm = ({ blogId }) => {
  const [commentText, setCommentText] = useState('');
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

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

 
  return (
    <div>
      <Button onClick={useState}>Comment</Button>
      <Modal show={false} id="modal">
        <Modal.Header>
          <h5>Comment</h5>
          <Button className="btn-close"></Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3 userDiv">
              <div className="avatar"></div>
              <label className="col-form-label username">Matt_05</label>
            </div>
            <div className="mb-3">
              <p>This is where the post content will go</p>
            </div>
            <div className="mb-3">
              <label className="col-form-label comment">Comment:</label>
              <textarea class="form-control" onChange={handleChange}></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CommentForm;