import React from 'react';
import consts from '../../utils/consts';

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
        {adminPages.includes(currentPage) ? (
          <div
            className="container"
            style={{ marginLeft: `${consts.sidebarWidth + 20}px` }}
          >
            {children}
          </div>
        ) : (
          <div
            className="container"
          >
            {children}
          </div>
        )}
      </>
    );
}

export default Container;
