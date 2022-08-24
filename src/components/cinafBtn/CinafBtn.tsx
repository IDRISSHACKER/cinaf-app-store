import React from "react";
import EastIcon from "@mui/icons-material/East";
import {motion} from 'framer-motion'
import "./CinafBtn.scss";
import { DownloadOutlined } from "@mui/icons-material";

function CinafBtn({children, variant="c-primary", downloadBtn=false, noIcon=false, to="/download"}:any){

    return (
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
      >
        <a href={to} className={`cinaf-btn ${variant}`}>
          {downloadBtn && (
            <div className="icon">
              <DownloadOutlined />
            </div>
          )}
          <div className="text">{children}</div>
          {!downloadBtn && <div className="icon">{!noIcon && <EastIcon />}</div>}
        </a>
      </motion.div>
    );
}

export default CinafBtn;
