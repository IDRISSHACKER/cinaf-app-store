import React from "react";
import "./flexer.css";

function Flexer({children, col}:any) {
  return (
    <div className={`flexer-col`}>
        {children}
    </div>
  );
}

export default Flexer;
