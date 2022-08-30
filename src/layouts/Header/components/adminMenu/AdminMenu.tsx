// @ts-nocheck
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { setActiveMenu } from "../../../../redux/store";
import { getAdmin } from "../../../../redux/slices/adminSlice/adminSlice";
import {
  DashboardCustomizeTwoTone,
  DataUsageRounded,
  LogoutTwoTone,
  VerifiedUserTwoTone,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";

function AdminMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminData, setAdminData] = React.useState();
  const admin = useSelector((state: any) => state?.admin);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDisconect = () => {
    localStorage.removeItem("token");
    console.log("logOut");
    return navigate("/");
  };

  const handleNavigate = () => {
    dispatch(setActiveMenu(0));
  };

  React.useEffect(() => {
    dispatch(getAdmin());
  }, []);
  return (
    <div>
      {localStorage.getItem("token") ? (
        <div className="adminMenu">
          <div>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {admin[0]?.avatar?.length > 0 ? (
                <Avatar
                  src={`${admin[0]?.avatar}`}
                  alt={`${admin[0]?.avatar}`}
                />
              ) : (
                <Avatar>
                  <DataUsageRounded />
                </Avatar>
              )}
            </IconButton>
            {admin.loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    className="link"
                    to="/admin"
                    style={{ textDecoration: "none" }}
                    onClick={handleNavigate}
                  >
                    <Button startIcon={<DashboardCustomizeTwoTone />}>
                      Dashboard
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {admin?.admin?.username}
                </MenuItem>
                <MenuItem onClick={handleClose}>{admin?.admin?.email}</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    onClick={handleDisconect}
                    startIcon={<LogoutTwoTone />}
                    disableElevation
                    variant="contained"
                    color="error"
                  >
                    Deconnexion
                  </Button>
                </MenuItem>
              </Menu>
            )}
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default AdminMenu;
