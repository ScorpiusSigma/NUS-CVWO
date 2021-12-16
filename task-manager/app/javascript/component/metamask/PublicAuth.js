import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PublicAuth = () => {
  const { currentAccount, setCurrentAccount } = useContext(UserContext);
  const connectPulic = () => {
    setCurrentAccount("0x0000000000000000000000000000000000000000");
    console.log("Connected:", currentAccount);
  };
  return (
    <button className="auth_button" onClick={connectPulic}>
      Public Login
    </button>
  );
};

export default PublicAuth;
