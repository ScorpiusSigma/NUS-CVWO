import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.childeren}
    </div>
  );
};

export default Layout;
