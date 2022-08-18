import React from "react";
import { Typography } from "@mui/material";
import "./Header.scss";
import cinafApp from "./cinaf-app.png";

function Header() {
  return (
    <div className="Head">
      <div className="logo">
        <img src={cinafApp} alt="cinafApp" />
      </div>
    </div>
  );
}

export default Header;
