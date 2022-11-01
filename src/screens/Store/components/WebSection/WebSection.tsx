import React from "react";
import Typography from "@mui/material/Typography";
import { StoreContainer } from "./../../../../components/container/container";
import { useViewportScroll, useTransform } from "framer-motion";
import allDevices from "./../../../../assets/all-devices.svg"
import CheckCircleOutlineOutlined from "@mui/icons-material/CheckCircleOutlineOutlined"

export default function WebSection(){

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
    const constraintsRef = React.useRef(null);

    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    };

    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };

    return (
      
        <div
          className="webSection"
          ref={constraintsRef}
        >
          <div className="webSection-content">
            <StoreContainer>
              <div className="webSection-video">
                <img src={allDevices} alt="Tous les apareils" />
                <h2 className="h2 white center">Un Compte  pour profiter du VOD partout</h2>
                <ul className="devices white">
                  <li> 
                    <CheckCircleOutlineOutlined className="green" />
                    <span>MOBILE</span> 
                  </li>
                  <li>
                    <CheckCircleOutlineOutlined className="green" />
                    <span>ORDINATEUR</span>
                  </li>
                  <li>
                    <CheckCircleOutlineOutlined className="green" />
                    <span>TABLETE</span>
                  </li>
                  <li>
                    <CheckCircleOutlineOutlined className="green" />
                    <span>SMART TV</span>
                  </li>
                  <li>
                    <CheckCircleOutlineOutlined className="green" />
                    <span>LECTEUR WEB</span>
                  </li>
                </ul>
            </div>
            </StoreContainer>
          </div>
        </div>
    );
}
