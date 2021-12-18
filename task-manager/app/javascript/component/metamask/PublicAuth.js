import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { get_account } from "./GetAccount";

const PublicAuth = () => {
  const {
    currentAccount,
    setCurrentAccount,
    setSignedIn,
    setName,
    setAccountId,
    accountId,
  } = useContext(UserContext);

  const connectPulic = async () => {
    const publicAddress = "0x0000000000000000000000000000000000000000";
    const publicName = "Public";
    setName(publicName);
    setCurrentAccount(publicAddress);

    const res = await get_account(publicAddress);
    setAccountId(res.id);
    console.log("Connected:", publicAddress);
    setSignedIn(true);
  };

  return (
    <button className="button" onClick={connectPulic}>
      Public Login
    </button>
  );
};

export default PublicAuth;
