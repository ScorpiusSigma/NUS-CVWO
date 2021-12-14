import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({});
const UserProvider = (props) => {
  const [currentAccount, setCurrentAccount] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  const [signIn, setSignIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ currentAccount, setCurrentAccount, signIn, setSignIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
