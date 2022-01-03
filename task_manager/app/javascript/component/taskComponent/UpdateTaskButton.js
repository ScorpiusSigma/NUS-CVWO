import React, { useContext } from "react";
import "../../../assets/stylesheets/application.css";
import { UserContext } from "../context/UserContext";

const UpdateTaskButton = (props) => {
  return (
    <button
      className="update-button"
      onClick={() => {
        if (props.click) {
          props.click();
        }
        return;
      }}
    >
      Update
    </button>
  );
};

export default UpdateTaskButton;
