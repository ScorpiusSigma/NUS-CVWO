import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "../../../assets/stylesheets/application.css";
import { UserContext } from "../context/UserContext";
import UpdateTaskButton from "./UpdateTaskButton";
import get_tasks from "./GetTasks";

const UpdateTaskPanel = () => {
  const { accountId, setAccountTasks, updateTaskId, setUpdateTaskId } =
    useContext(UserContext);
  const default_obj = { task: { title: "", body: "", account_id: accountId } };
  const [obj, setObj] = useState(default_obj);

  const updateTask = async () => {
    try {
      const res = await axios.patch(
        "/api/v1/accounts/" +
          accountId.toString() +
          "/tasks/" +
          updateTaskId.toString(),
        obj
      );
      setObj(default_obj);
      if (res) {
        get_tasks(accountId, setAccountTasks);
        setUpdateTaskId("");
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    const tasks = await get_tasks(accountId, setAccountTasks);
    const task = tasks.filter((task) => task.id === updateTaskId)[0];
    const update_obj = {
      task: {
        title: task.attributes.title,
        body: task.attributes.body,
        account_id: accountId,
      },
    };
    setObj(update_obj);
  }, [updateTaskId]);

  return (
    <div className="add-task-panel">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Title:
      </div>
      <input
        style={{
          height: "30px",
          border: "2px solid gray",
          borderRadius: "5px",
          display: "flex",
        }}
        required
        value={obj.task.title}
        onChange={(event) =>
          setObj({ task: { ...obj.task, title: event.target.value } })
        }
      />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Category:
      </div>
      <input
        style={{
          height: "30px",
          border: "2px solid gray",
          borderRadius: "5px",
          display: "flex",
        }}
        required
        value="Category"
        onChange={(event) =>
          setObj({ task: { ...obj.task, title: event.target.value } })
        }
      />
      <br />
      <div>Description:</div>
      <textarea
        style={{
          height: "30px",
          border: "2px solid gray",
          borderRadius: "5px",
          display: "flex",
        }}
        required
        value={obj.task.body}
        onChange={(event) =>
          setObj({ task: { ...obj.task, body: event.target.value } })
        }
      />
      <br />
      <div className="update-panel-buttons">
        <button className="button" onClick={() => setUpdateTaskId("")}>
          {"<<"}
        </button>
        <UpdateTaskButton click={updateTask} />
      </div>
    </div>
  );
};

export default UpdateTaskPanel;
