import React from "react"
import { Typography, IconButton } from "@mui/material";
import { StoreContainer } from "./../../../../components/container/container";
import { motion} from "framer-motion";
import "./Slider.scss"
import Player from "./Player.svg"
import { AndroidOutlined } from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";

function Slider(){
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

    const item2 = {
        hidden: { y: 30, opacity: .2 },
        visible: {
        y: 0,
        opacity: 1,
        },
    };
    return (
      <div className="slider-container">
        <motion.div
          className="slider"
          whileTap={{
            scale: 1,
          }}
        >
          <StoreContainer>
            <motion.div
              className="slider-content"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="slider-content-text" variants={item}>
                <h1 className="slider-title h1">
                  VOD CINAF TV
                </h1>
                <p className="slider-desk p">
                  Profitez de la meilleure qualité de{" "}
                  <strong>streaming video</strong> camerounais en ligne
                  disponible sur toute les plateformes.
                </p>
                <motion.div
                  className="slider-text-button"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton aria-label="ios" size="large">
                      <LaptopWindowsIcon fontSize="inherit" />
                    </IconButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton aria-label="ios" size="large">
                      <AppleIcon fontSize="inherit" />
                    </IconButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton aria-label="ios" size="large">
                      <AndroidOutlined fontSize="inherit" />
                    </IconButton>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="slider-content-media"
                variants={item2}
                whileHover={{ scale: 1.04 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "100%",
                }}
              >
                <img src={Player} alt="" />
              </motion.div>
            </motion.div>
          </StoreContainer>
        </motion.div>
      </div>
    );
}

export default Slider;