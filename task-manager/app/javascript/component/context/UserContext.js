import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({});
const UserProvider = (props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [invalidSignIn, setInvalidSignIn] = useState(false);
  const [name, setName] = useState("");

  return (
    <UserContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        signIn,
        setSignIn,
        invalidSignIn,
        setInvalidSignIn,
        name,
        setName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
