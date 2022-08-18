import React from "react";
import { Typography } from "@mui/material";
import "./Header.scss";
import cinafApp from "./cinaf-app.png";
import Sidebar from './../Sidebar/Sidebar';

function Header() {
  return (
    <div className="application">
      <div className="nav">
      <div className="Head">
        <div className="logo">
          <img src={cinafApp} alt="cinafApp" />
        </div>
      </div>
      <div className="sider">
        <Sidebar />
      </div>
    </div>
    </div>
  );
}

export default Header;
