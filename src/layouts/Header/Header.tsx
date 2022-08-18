import React from "react";
import { Typography } from "@mui/material";
import "./Header.scss";
import cinafApp from "./cinaf-app.png";
import Sidebar from './../Sidebar/Sidebar';
import { Link } from "react-router-dom";
import AdminMenu from "./components/adminMenu/AdminMenu";
import { useDispatch } from 'react-redux';
import { setActiveMenu } from "../../redux/store";

function Header() {


  return (
    <div className="application">
      <div className="nav">
        <div className="Head">
          <div className="logo">
            <a href={"/store"}>
              <img src={cinafApp} alt="cinafApp" />
            </a>
          </div>
          <div className="endNavigation">
            <AdminMenu />
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
