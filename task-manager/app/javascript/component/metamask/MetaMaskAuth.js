import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const MetaMaskAuth = () => {
  const { currentAccount, setCurrentAccount } = useContext(UserContext);
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
      setCurrentAccount(account);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkForConnection();
  });

  return <button onClick={connectWallet}>Connect Wallet</button>;
};

export default MetaMaskAuth;
