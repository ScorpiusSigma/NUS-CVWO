import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "../../../assets/stylesheets/application.css";
import { get_account } from "./GetAccount";
import axios from "axios";

const MetaMaskAuth = () => {
  const {
    setCurrentAccount,
    setSignedIn,
    signedIn,
    setInvalidSignIn,
    name,
    setName,
    setAccountId,
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

  const { ethereum } = window;
  const checkForConnection = async () => {
    try {
      if (!ethereum) {
        console.log("Please get MetaMask!");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        await addAccount(account);
        setSignedIn(true);
      } else {
        setName("");
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (name && name !== "Public") {
        setInvalidSignIn(false);

        if (!ethereum) {
          console.log("Get MetaMask!");
          window.open("https://metamask.io/download", "_blank");
          return;
        }

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = accounts[0];
        console.log("Connected:", account);
        await addAccount(account);
        setSignedIn(true);
      } else {
        setInvalidSignIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkForConnection();
  }, []);

  return signedIn ? (
    <div className="account-name">{name}</div>
  ) : (
    <button className="button" onClick={connectWallet}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Connect Wallet</p>
        <p style={{ fontWeight: "normal", fontSize: "12px", color: "yellow" }}>
          Highly Recommended!
        </p>
      </div>
    </button>
  );
};

export default MetaMaskAuth;
