import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../assets/stylesheets/application.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.route}</div>
      <Footer />
    </div>
  );
};

export default Layout;
