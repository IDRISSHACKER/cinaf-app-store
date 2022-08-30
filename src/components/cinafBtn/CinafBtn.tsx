import React from "react";
import EastIcon from "@mui/icons-material/East";
import {motion} from 'framer-motion'
import "./CinafBtn.scss";
import { DownloadOutlined } from "@mui/icons-material";
import { Link } from 'react-router-dom';

function CinafBtn({children, variant="c-primary", downloadBtn=false, noIcon=false, to="/download", props, hto="https://vod.cinaf.tv", ext=false}:any){

    return (
      <motion.div
        whileTap={{
          scale: 0.8,
        }}
      >
        {!ext ? <Link to={to} className={`cinaf-btn ${variant}`} {...props}>
          {downloadBtn && (
            <div className="icon">
              <DownloadOutlined />
            </div>
          )}
          <div className="text">{children}</div>
          {!downloadBtn && <div className="icon">{!noIcon && <EastIcon />}</div>}
        </Link> : <a href={hto} className={`cinaf-btn ${variant}`} {...props}>
          {downloadBtn && (
            <div className="icon">
              <DownloadOutlined />
            </div>
          )}
          <div className="text">{children}</div>
          {!downloadBtn && <div className="icon">{!noIcon && <EastIcon />}</div>}
        </a>}
      </motion.div>
    );
}

export default CinafBtn;
