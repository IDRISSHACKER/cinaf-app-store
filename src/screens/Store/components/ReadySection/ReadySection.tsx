// @ts-nocheck

import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { StoreContainer } from "../../../../components/container/container";
import "./ReadySection.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";


function ReadySection() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
  const constraintsRef = React.useRef(null);

  return (
    <React.Fragment>
      <div className="readySection">
        <StoreContainer>
          <motion.div className="readySection-content">
            <ScrollAnimation animateIn="animate__zoomInDown">
              <h2 className="readySection-content-title h2">
                Regardez la tv <strong className="primary">partout</strong>{" "}
              </h2>
            </ScrollAnimation>
            <p className="readySection-content-body p2">
              <ScrollAnimation animateIn="animate__lightSpeedInLeft">
                Accedez à cinaf depuis n'importequelle emplacement: depuis votre
                canappé, en deplacement, au bureau.
              </ScrollAnimation>
            </p>
          </motion.div>
        </StoreContainer>
      </div>
    </React.Fragment>
  );
}

export default ReadySection;
