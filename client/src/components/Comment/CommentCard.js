import React from "react";
import { Button } from "react-bootstrap";

export default function commentCard() {
  return (
    <div className="container-commentCard">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">Comment Author</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Button className="bg-dark">Delete</Button>
        </div>
      </div>
    </div>
  );
}
