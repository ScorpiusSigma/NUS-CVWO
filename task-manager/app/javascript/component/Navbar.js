import React, { useContext } from "react";
import MetaMaskAuth from "./metamask/MetaMaskAuth";
import "../packs/index.css";
import { UserContext } from "./context/UserContext";

const Navbar = (props) => {
  const { currentAccount, signIn } = useContext(UserContext);
  return (
    <div>
      <div className="navbar">
        <div className="title">Task Manager</div>
        <div className="account_name">{signIn ? currentAccount : "Public"}</div>
        <MetaMaskAuth />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Navbar;
