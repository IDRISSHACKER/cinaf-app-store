import React from 'react';
import consts from '../../utils/consts';
import "./container.scss";
import {Container as MuiC} from "@mui/material";

function Container({children}:any) {
    const [currentPage, setCurrentPage] = React.useState(
      window.location.pathname
    );
    const [adminPages, setAdminPages] = React.useState(["/dashboard", "/upload"]);
    
    React.useEffect(() => {
      setCurrentPage(window.location.pathname);
      console.log(currentPage);
    })

    return (
      <>
          <div>
            {children}
          </div>
      </>
    );
}
export function StoreContainer({ children }: any) {
  return (
    <div>
      <MuiC
        maxWidth="lg"
        style={{ width: "auto" }}
      >
        {children}
      </MuiC>
    </div>
  );
}

export default Container;
