import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import MetaMaskAuth from "./metamask/MetaMaskAuth";
import PublicAuth from "./metamask/PublicAuth";
import "../../assets/stylesheets/application.css";

const Login = () => {
  const { setName, invalidSignIn, setInvalidSignIn } = useContext(UserContext);

  const bool_nameInputted = () => {
    if (invalidSignIn) {
      return <p className="alert-input">Please input your name!</p>;
    }
  };

  return (
    <div className="login-options">
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Sign in
      </div>

      <div
        style={{
          marginTop: "2px",
          marginBottom: "2px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          placeholder="Please input your name"
          style={
            invalidSignIn
              ? {
                  height: "30px",
                  border: "2px solid red",
                  borderRadius: "5px",
                  display: "flex",
                }
              : {
                  height: "30px",
                  border: "2px solid gray",
                  borderRadius: "5px",
                  display: "flex",
                }
          }
          onChange={(val) => {
            setName(val.target.value);
            val.target.value ? setInvalidSignIn(false) : setInvalidSignIn(true);
          }}
        />
        {bool_nameInputted()}
      </div>

      <MetaMaskAuth />

      <div className="or-container">
        <div className="dash" />
        <div
          style={{ marginLeft: "5px", marginRight: "5px", fontSize: "14px" }}
        >
          or
        </div>
        <div className="dash" />
      </div>

      <PublicAuth />
    </div>
  );
};

export default Login;
