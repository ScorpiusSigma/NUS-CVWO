import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "./Home";
import TaskManager from "./TaskManager";
import UserProvider from "../component/context/UserContext";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div>
      <UserProvider>
        <Layout
          route={
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="task-manager" element={<TaskManager />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          }
        />
      </UserProvider>
    </div>
  );
};

export default App;
