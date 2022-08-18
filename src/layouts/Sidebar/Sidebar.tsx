import React from "react";
import { Typography } from "@mui/material";
import "./Sidebar.scss";
import { CloudUploadTwoTone, DashboardTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import consts from "../../utils/consts";


function Sidebar() {
    const [active, setActive] = React.useState(0);

    React.useEffect(() => {
        if(window.location.pathname === "/dashboard") {
            setActive(0);
        }else{
            setActive(1);
        }
    } , [window.location.pathname]);

  return (
    <div className="Sidebar" style={{ width: consts.sidebarWidth + "px" }}>
      <div className="sidebar-items">
        <Link
          to={"/dashboard"}
          className={`item ${
            window.location.pathname === "/dashboard" ? "active-it" : null
          } ${active === 0 ? "active-it" : "disabled-it"}`} onClick={() => setActive(0)}
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
            window.location.pathname === "/upload" ? "active-it" : null
          } ${active === 1 ? "active-it" : "disabled-it"}`}
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
  );
}

export default Sidebar;
