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

  const addAccount = async (account) => {
    const res = await get_account(account);
    if (res) {
      setAccountId(res.id);
      setName(res.name);
      setCurrentAccount(res.user);
    } else {
      axios
        .post("/api/v1/accounts", {
          account: { user: account, name: name },
        })
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error));
    }
  };

  const connectPulic = async () => {
    const publicAddress = "0x0000000000000000000000000000000000000000";
    const publicName = "Public";
    setName(publicName);
    setCurrentAccount(publicAddress);
    addAccount(publicAddress);

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
