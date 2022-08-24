import React from "react";
import { Typography } from "@mui/material";
import "./Header.scss";
import cinafApp from "./cinaf-app.png";
import Sidebar from './../Sidebar/Sidebar';
import { Link } from "react-router-dom";
import AdminMenu from "./components/adminMenu/AdminMenu";
import { useDispatch } from 'react-redux';
import { setActiveMenu } from "../../redux/store";
import CinafBtn from "../../components/cinafBtn/CinafBtn";

function Header() {


  return (
    <div className="application">
      <div className="nav">
        <div className="Head">
          <div className="startNavigation">
            <div className="logo">
              <a href={"/store"}>
                <img src={cinafApp} alt="cinafApp" />
              </a>
            </div>
            <div className="navigation">
              <a
                href={"/store"}
                className={"link navItem"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography>
                  <strong>Acceuil</strong>
                </Typography>
              </a>
              <a
                href={"/download"}
                className={"link navItem"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography>
                  <strong>Telecharger</strong>
                </Typography>
              </a>
            </div>
          </div>
          <div className="endNavigation">
            <CinafBtn variant={"btn-nav sm"} noIcon>
              S'abonner
            </CinafBtn>
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
