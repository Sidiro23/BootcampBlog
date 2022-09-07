import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./newBlog.css";
import Auth from "../../utils/auth";

const NewBlog = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="newClass">
      <button className="blogBtn" onClick={handleShow}>
        Create Blog
      </button>
      <Modal show={show} id="modal">
        <Modal.Header>
          <Button className="btn-close" onClick={handleClose}></Button>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="col-form-label comment">Text:</label>
              <textarea name="commentText" className="form-control"></textarea>
            </div>
            <Modal.Footer>
              <Button onClick={handleClose}>Save</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewBlog;
