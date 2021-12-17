import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({});
const UserProvider = (props) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [invalidSignIn, setInvalidSignIn] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

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
        id,
        setId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
