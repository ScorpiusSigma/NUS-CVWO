import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "../../packs/index.css";

const MetaMaskAuth = () => {
  const {
    setCurrentAccount,
    setSignIn,
    signIn,
    currentAccount,
    invalidSignIn,
    setInvalidSignIn,
    name,
  } = useContext(UserContext);

  const { ethereum } = window;
  const checkForConnection = async () => {
    try {
      if (!ethereum) {
        console.log("Please get MetaMask!");
      } else {
        console.log("We have an Ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setSignIn(true);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (name) {
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
        setSignIn(true);
        setCurrentAccount(account);
      } else {
        setInvalidSignIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkForConnection();
  });

  return signIn ? (
    <div className="account_name">{currentAccount}</div>
  ) : (
    <button className="auth_button" onClick={connectWallet}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Connect Wallet</p>
        <p style={{ fontWeight: "normal", fontSize: "12px" }}>
          Highly Recommended!
        </p>
      </div>
    </button>
  );
};

export default MetaMaskAuth;
