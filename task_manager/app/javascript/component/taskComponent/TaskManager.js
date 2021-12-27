import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TaskCard from "./TaskCard";
import AddTaskPanel from "./AddTaskPanel";
import get_tasks from "./GetTasks";
import UpdateTaskPanel from "./UpdateTaskPanel";

const TaskManager = () => {
  const { accountId, accountTasks, setAccountTasks, updateTaskId } =
    useContext(UserContext);

  const tasks = accountTasks;

  useEffect(() => {
    get_tasks(accountId, setAccountTasks);
  }, []);

  return (
    <div className="task-manager">
      <div className="task-manager-layout">
        {updateTaskId ? <UpdateTaskPanel /> : <AddTaskPanel />}
        <div className="task-panel">
          {tasks.length !== 0
            ? tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.attributes.title}
                  body={task.attributes.body}
                />
              ))
            : "There is no existing tasks!"}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
