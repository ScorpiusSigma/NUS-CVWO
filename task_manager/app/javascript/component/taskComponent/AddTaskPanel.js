import axios from "axios";
import React, { useContext, useState } from "react";
import "../../packs/index.css";
import { UserContext } from "../context/UserContext";
import AddTaskButton from "./AddTaskButton";
import get_tasks from "./GetTasks";

const AddTaskPanel = () => {
  const { accountId, setAccountTasks } = useContext(UserContext);

  const default_obj = {
    task: { title: "", category: "", body: "", account_id: accountId },
  };
  const [obj, setObj] = useState(default_obj);

  const addTask = async () => {
    const res = await axios.post(
      "/api/v1/accounts/" + accountId.toString() + "/tasks",
      obj
    );

    setObj(default_obj);
    if (res) {
      get_tasks(accountId, setAccountTasks);
    }
    return res;
  };

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
        value={obj.task.category}
        onChange={(event) =>
          setObj({ task: { ...obj.task, category: event.target.value } })
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
      <AddTaskButton click={addTask} />
    </div>
  );
};

export default AddTaskPanel;
