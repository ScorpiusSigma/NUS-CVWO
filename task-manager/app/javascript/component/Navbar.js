import React from "react";
import MetaMaskAuth from "./metamask/MetaMaskAuth";
import "../packs/index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="title">Task Manager</div>
      <MetaMaskAuth />
    </div>
  );
};

export default Navbar;
