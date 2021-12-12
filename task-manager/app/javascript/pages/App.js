import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TaskManager from "./TaskManager";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="task-manager" element={<TaskManager />} />
    </Routes>
  );
};

export default App;
