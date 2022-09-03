import React from "react";
import "./comment.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Comment() {
  return (
    <div>
      <Button onClick={useState}>Comment</Button>
      <Modal show={false} id="modal">
        <Modal.Header>
          <h5>Comment</h5>
          <Button className="btn-close"></Button>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 userDiv">
              <div className="avatar"></div>
              <label className="col-form-label username">Matt_05</label>
            </div>
            <div className="mb-3">
              <p>This is where the post content will go</p>
            </div>
            <div className="mb-3">
              <label className="col-form-label comment">Comment:</label>
              <textarea class="form-control"></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="submitBtn">Submit</button>
          <button className="closeBtn">Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
