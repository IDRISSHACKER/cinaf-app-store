import React from "react";
import EastIcon from "@mui/icons-material/East";
import {motion} from 'framer-motion'
import "./CinafBtn.scss";
import { DownloadOutlined } from "@mui/icons-material";

function CinafBtn({children, variant="c-primary", downloadBtn=false}:any){

    return (
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
      >
        <button className={`cinaf-btn ${variant}`}>
          {downloadBtn && (
            <div className="icon">
              <DownloadOutlined />
            </div>
          )}
          <div className="text">{children}</div>
          {!downloadBtn && (
            <div className="icon">
              <EastIcon />
            </div>
          )}
        </button>
      </motion.div>
    );
}

export default CinafBtn;
