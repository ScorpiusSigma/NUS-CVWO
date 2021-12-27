import React, { useContext } from "react";
import "../../packs/index.css";
import { UserContext } from "../context/UserContext";

const AddTaskButton = (props) => {
  return (
    <button
      className="button"
      onClick={() => {
        if (props.click) {
          props.click();
        }
      }}
    >
      + Add Task
    </button>
  );
};

export default AddTaskButton;
