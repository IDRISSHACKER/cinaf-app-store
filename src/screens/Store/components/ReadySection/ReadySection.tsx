import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { StoreContainer } from "../../../../components/container/container";
import google from "./../../../../assets/google.svg"
import apple from "./../../../../assets/apple.svg"
import { Link } from "@mui/material";

function ReadySection(){

      const { scrollYProgress } = useViewportScroll();
      const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
      const constraintsRef = React.useRef(null);

    return (
      <React.Fragment>
        <div className="readySection">
          <StoreContainer>
            <div className="center ready">
              <h2 className="h2">Regardez aussi vos series préférés sur votre mobile et votre tablette.</h2>
              <br />
              <p className="p">Streamer sur votre téléphone ou votre tablette est rapide, facile et amusant</p>
              <br />
              <div className="links">
                <Link href="https://play.google.com/store/apps/details?id=com.cinaf.mobile.stream&hl=en&gl=US" className="storeIcon">
                  <img src={google} alt="google play store" />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.cinaf.mobile.stream&hl=en&gl=US" className="storeIcon">
                  <img src={apple} alt="apple store" />
                </Link>
              </div>
            </div>
          </StoreContainer>
        </div>
      </React.Fragment>
    );
}


export default ReadySection;
