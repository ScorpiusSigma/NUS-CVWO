import React, { useContext } from "react";
import "../../../assets/stylesheets/application.css";
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
