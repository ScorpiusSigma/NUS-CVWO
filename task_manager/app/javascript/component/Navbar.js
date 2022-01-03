import React, { useContext } from "react";
import MetaMaskAuth from "./metamask/MetaMaskAuth";
import "../../assets/stylesheets/application.css";
import { UserContext } from "./context/UserContext";

const Navbar = (props) => {
  const { name } = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="title">Task Manager</div>
      <MetaMaskAuth />
    </div>
  );
};

export default Navbar;
