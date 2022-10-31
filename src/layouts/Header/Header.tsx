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

function Header() {


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
              <Link
                to={"/home"}
                className={"link navItem"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography>
                  <strong>Acceuil</strong>
                </Typography>
              </Link>
              <Link
                to={"/download"}
                className={"link navItem"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography>
                  <strong>Telecharger</strong>
                </Typography>
              </Link>
            </div>
          </div>
          <div className="endNavigation">
            <a href="https://cinaf.tv" className="btn btn-primary btn-head">CINAF TV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
