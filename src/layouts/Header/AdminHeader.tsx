import React from "react";
import {Routes, Route} from "react-router-dom"
import { Typography } from "@mui/material";
import cinafApp from "./cinaf-app.png";
import Sidebar from './../Sidebar/Sidebar';
import { Link } from "react-router-dom";
import AdminMenu from "./components/adminMenu/AdminMenu";
import { useDispatch } from 'react-redux';
import { setActiveMenu } from "../../redux/store";
import CinafBtn from "../../components/cinafBtn/CinafBtn";

function AdminHeader() {


  return (
    <div className="application">
      <div className="nav">
        <div className="Head">
          <div className="startNavigation">
            <div className="logo">
              <Link to={"/store"}>
                <img src={cinafApp} alt="cinafApp" />
              </Link>
            </div>
            <div className="navigation">

            </div>
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

export default AdminHeader;
