import axios from "axios";
import React, { useContext } from "react";
import "../../../assets/stylesheets/application.css";
import { UserContext } from "../context/UserContext";

const DeleteTaskButton = (props) => {
  const { accountId, setAccountTasks, accountTasks } = useContext(UserContext);

  const deleteTask = async () => {
    const res = await axios.delete(
      "/api/v1/accounts/" +
        accountId.toString() +
        "/tasks/" +
        props.id.toString()
    );
    if (res) {
      const result = accountTasks.filter(
        (task) => task.id.toString() !== props.id.toString()
      );
      setAccountTasks(result);
    }
    return res;
  };
  return (
    <button className="del-button" onClick={deleteTask}>
      Delete
    </button>
  );
};

export default DeleteTaskButton;
