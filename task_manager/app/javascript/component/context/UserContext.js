import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({});
const UserProvider = (props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [invalidSignIn, setInvalidSignIn] = useState(false);
  const [name, setName] = useState("");
  const [accountId, setAccountId] = useState("");
  const [accountTasks, setAccountTasks] = useState([]);
  const [updateTaskId, setUpdateTaskId] = useState("");

  return (
    <UserContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        signedIn,
        setSignedIn,
        invalidSignIn,
        setInvalidSignIn,
        name,
        setName,
        accountId,
        setAccountId,
        accountTasks,
        setAccountTasks,
        updateTaskId,
        setUpdateTaskId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
