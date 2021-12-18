import React, { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

const TaskManager = () => {
  const { accountId, accountTasks, setAccountTasks } = useContext(UserContext);
  const tasks = accountTasks;

  const get_tasks = async () => {
    const res = await axios
      .get("/api/v1/accounts/" + accountId.toString() + "/tasks")
      .then((resp) => resp.data.data)
      .catch((error) => console.log(error));
    setAccountTasks(res);
    return res;
  };

  useEffect(() => {
    get_tasks();
  }, [tasks.length]);

  return (
    <div>
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.attributes.title}
            body={task.attributes.body}
          />
        ))
      ) : (
        <AddTask />
      )}
    </div>
  );
};

export default TaskManager;
