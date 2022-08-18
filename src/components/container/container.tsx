import React from 'react';
import consts from '../../utils/consts';

function Container({children}:any) {
    return (
      <div
        className="container"
        style={{ marginLeft: `${consts.sidebarWidth+20}px` }}
      >
        {children}
      </div>
    );
}

export default Container;
