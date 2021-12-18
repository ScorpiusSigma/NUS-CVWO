import axios from "axios";
import React, { useContext } from "react";
import "../../packs/index.css";
import { UserContext } from "../context/UserContext";

const DeleteTask = (props) => {
  const { accountId } = useContext(UserContext);

  const deleteTask = async () => {
    const res = await axios.delete(
      "/api/v1/accounts/" +
        accountId.toString() +
        "/tasks/" +
        props.id.toString()
    );
    return res;
  };
  return (
    <button
      className="button"
      style={{ backgroundColor: "red" }}
      onClick={deleteTask}
    >
      Delete
    </button>
  );
};

export default DeleteTask;
