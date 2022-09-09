import React from "react";
import {Routes, Route} from "react-router-dom"
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
              <Link to={"/store"}>
                <img src={cinafApp} alt="cinafApp" />
              </Link>
            </div>
            <div className="navigation">
              <Link
                to={"/home"}
                className={"link navItem txt-res"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                  <strong>Acceuil</strong>
              </Link>
              <Link
                to={"/download"}
                className={"link navItem txt-res"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                  <strong>Telecharger</strong>
              </Link>
            </div>
          </div>
          <div className="endNavigation">
            <CinafBtn
              hto={"https://cinaf.tv/fr/subscription/subscribe.html"}
              variant={"btn-nav sm hmobile"}
              noIcon
              ext={true}
            >
              S'abonner
            </CinafBtn>
            <AdminMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
