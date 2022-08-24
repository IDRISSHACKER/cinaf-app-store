import React from 'react';
import consts from '../../utils/consts';
import "./container.scss";

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
          <div
            className="container"
            style={{ marginLeft: `${consts.sidebarWidth + 20}px` }}
          >
            {children}
          </div>
      </>
    );
}
export function StoreContainer({ children }: any) {
  return (
    <div>
      <div className="store-container">{children}</div>
    </div>
  );
}

export default Container;
