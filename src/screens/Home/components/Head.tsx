import React from "react";
import { Typography } from "@mui/material";
import "./Head.css"
import cinafApp from "./cinaf-app.png"

function Head() {
  return (
    <div className="Head">
      <div className="logo">
        <img src={cinafApp} alt="cinafApp" />
      </div>
    </div>
  );
} 

export default Head;
