import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./deleteblog.css";

export default function DeleteBlog() {
  return (
    <div className="deleteBlog">
      <button className="editBtn">
        {/* <FontAwesomeIcon className="trashCan" icon={faTrashCan}></FontAwesomeIcon> */}
        Delete
      </button>
    </div>
  );
}
