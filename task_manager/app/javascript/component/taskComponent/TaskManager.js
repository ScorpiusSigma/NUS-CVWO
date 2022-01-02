import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import TaskCard from "./TaskCard";
import AddTaskPanel from "./AddTaskPanel";
import get_tasks from "./GetTasks";
import UpdateTaskPanel from "./UpdateTaskPanel";
import SearchBar from "./SearchContent";

const TaskManager = () => {
  const {
    accountId,
    accountTasks,
    setAccountTasks,
    updateTaskId,
    searchVal,
    searchCat,
  } = useContext(UserContext);

  const tasks = accountTasks;

  useEffect(() => {
    get_tasks(accountId, setAccountTasks);
  }, []);

  const showContent = () => {
    if (tasks.length !== 0) {
      let showTask = tasks;
      if (searchVal) {
        showTask = showTask.filter((task) => {
          const val =
            searchCat === "title"
              ? task.attributes.title.toLowerCase()
              : task.attributes.category.toLowerCase();
          return val.includes(searchVal.toLowerCase());
        });
      }
      return showTask.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.attributes.title}
          category={task.attributes.category}
          body={task.attributes.body}
        />
      ));
    }
    return "There is no existing tasks!";
  };

  return (
    <div className="task-manager">
      <div className="task-manager-layout">
        {updateTaskId ? <UpdateTaskPanel /> : <AddTaskPanel />}
        <div className="task-panel">
          <SearchBar />
          {showContent()}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
