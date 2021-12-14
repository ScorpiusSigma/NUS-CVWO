import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({});
const UserProvider = (props) => {
  const [currentAccount, setCurrentAccount] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  return (
    <UserContext.Provider value={{ currentAccount, setCurrentAccount }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
