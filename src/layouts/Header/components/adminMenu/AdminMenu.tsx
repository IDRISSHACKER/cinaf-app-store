import React from "react"
import {Link} from "react-router-dom"
import { Avatar, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { getAdmin, setActiveMenu } from "../../../../redux/store";
import { DashboardCustomizeTwoTone, LogoutTwoTone, VerifiedUserTwoTone } from "@mui/icons-material";
import { useDispatch } from 'react-redux';

function AdminMenu(){
  const dispatch = useDispatch()
  const [adminData, setAdminData] = React.useState();
  const admin = useSelector((state:any) => state?.admin);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDisconect = () => {
    console.log("logOut")
  }

  const handleNavigate = ()=> {
    dispatch(setActiveMenu(0));
  }
    return (
      <div className="adminMenu">
        <div>
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {admin[0]?.avatar?.length > 0 ? (
              <Avatar src={`${admin[0].avatar}`} alt={`${admin[0].avatar}`} />
            ) : (
              <Avatar>
                <VerifiedUserTwoTone />
              </Avatar>
            )}
          </IconButton>
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
                to="/dashboard"
                style={{ textDecoration: "none" }}
                onClick={handleNavigate}
              >
                <Button startIcon={<DashboardCustomizeTwoTone />}>
                  Dashboard
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>{admin[0].username}</MenuItem>
            <MenuItem onClick={handleClose}>{admin[0].email}</MenuItem>
            <MenuItem onClick={handleClose}>
                <Button onClick={handleDisconect} startIcon={<LogoutTwoTone />} disableElevation variant="contained" color="error">
                  Deconnexion
                </Button>
            </MenuItem>
          </Menu>
        </div>
      </div>
    );
}

export default AdminMenu
