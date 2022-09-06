import React from "react";
import "./edit.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Auth from "../../utils/auth";

const Edit = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Button className="btn-dark" onClick={handleShow}>
            Edit
          </Button>
          <Modal show={show} id="modal">
            <Modal.Header>
              <Button className="btn-close" onClick={handleClose}></Button>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label className="col-form-label comment">Edit Text:</label>
                  <textarea
                    name="commentText"
                    className="form-control"
                  ></textarea>
                </div>
                <Modal.Footer>
                  <Button onClick={handleClose}>Delete</Button>
                  <Button onClick={handleClose}>Update</Button>
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
