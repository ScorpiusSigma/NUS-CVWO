import React, { useContext } from "react";
import "../../../assets/stylesheets/application.css";
import { UserContext } from "../context/UserContext";

const EditTaskButton = (props) => {
  const { setUpdateTaskId } = useContext(UserContext);
  return (
    <button className="update-button" onClick={() => setUpdateTaskId(props.id)}>
      Edit
    </button>
  );
};

export default EditTaskButton;
