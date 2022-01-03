import React, { useContext } from "react";
import { UserContext } from "../component/context/UserContext";
import Login from "../component/Login";
import TaskManager from "../component/taskComponent/TaskManager";
import "../../assets/stylesheets/application.css";

const Home = () => {
  const { signedIn } = useContext(UserContext);
  return (
    <div className="home">
      {console.log(signedIn)}
      {signedIn ? <TaskManager /> : <Login />}
    </div>
  );
};

export default Home;
