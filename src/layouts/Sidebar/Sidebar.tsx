import React from "react";
import { Typography } from "@mui/material";
import "./Sidebar.scss";
import { CloudUploadTwoTone, DashboardTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import consts from "../../utils/consts";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from "../../redux/store";

function Sidebar() {

    const dispatch = useDispatch()
    const activeMenu: any = useSelector((state: any) => state?.menu);

    const [active, setActive] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(
        window.location.pathname
      );
    const [adminPages, setAdminPages] = React.useState([
        "/dashboard",
        "/upload",
      ]);

      React.useEffect(() => {
        setCurrentPage(window.location.pathname);
        console.log(currentPage);
      });

      React.useEffect(() => {
        console.log(currentPage);
        if (window.location.pathname === "/dashboard") {
          setActive(0);
          dispatch(setActiveMenu(0));
        } else {
          setActive(1);
          dispatch(setActiveMenu(1));
        }
      }, [window.location.pathname]);

      const setActivatedMenu = (menuActive:number)=>{
        setActive(menuActive);
        dispatch(setActiveMenu(menuActive));
      }

      const reloadingPathTimer = 1000

      const reloadPath = setTimeout(() => {
        setCurrentPage(window.location.pathname);
        clearInterval(reloadPath);
      } , 1000)

  return (
    <>
      {currentPage !== "/store" && currentPage !== "/download" ? (
        <div className="Sidebar" style={{ width: consts.sidebarWidth + "px" }}>
          <div className="sidebar-items">
            <Link
              to={"/dashboard"}
              className={`item ${
                activeMenu[0]?.active === 0 ? "active-it" : null
              }`}
              onClick={() => setActive(0)}
            >
              <div className="item-icon">
                <DashboardTwoTone />
              </div>
              <div className="item-text">
                <Typography variant="body1">
                  <strong>Dashboard</strong>
                </Typography>
              </div>
            </Link>
            <Link
              to={"/upload"}
              className={`item ${
                activeMenu[0]?.active === 1 ? "active-it" : null
              }`}
              onClick={() => setActive(1)}
            >
              <div className="item-icon">
                <CloudUploadTwoTone />
              </div>
              <div className="item-text">
                <Typography variant="body1">
                  {" "}
                  <strong>Upload</strong>
                </Typography>
              </div>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;
