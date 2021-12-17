import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { get_account } from "./GetAccount";

const PublicAuth = () => {
  const { currentAccount, setCurrentAccount, setSignedIn, setName, setId } =
    useContext(UserContext);

  const connectPulic = async () => {
    const publicAddress = "0x0000000000000000000000000000000000000000";
    const publicName = "Public";
    setName(publicName);
    setCurrentAccount(publicAddress);
    setSignedIn(true);

    const res = await get_account(publicAddress);
    setId(res.id);
    console.log("Connected:", currentAccount);
  };

  return (
    <button className="auth_button" onClick={connectPulic}>
      Public Login
    </button>
  );
};

export default PublicAuth;
