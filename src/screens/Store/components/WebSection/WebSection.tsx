// @ts-nocheck

import React from "react";
import CinafBtn from "../../../../components/cinafBtn/CinafBtn";
import { StoreContainer } from "./../../../../components/container/container";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import hero from "./hero.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

import "./WebSection.scss";

export default function WebSection() {
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
    <StoreContainer>
      <div className="webSection">
        <motion.div className="webSection-content">
          <div className="webSection-video">
            <ScrollAnimation animateIn="animate__backInLeft">
              <img src={hero} alt="" />
            </ScrollAnimation>
          </div>
          <div className="webSection-presentation">
            <div className="webSection-presentation-content">
              <ScrollAnimation animateIn="animate__bounceIn">
                <h2 className="webSection-presentation-content-title h2">
                  Regarder la vidéo en un{" "}
                  <strong className="primary">click</strong>
                </h2>
              </ScrollAnimation>
              <p className="webSection-presentation-content-body p">
                <ScrollAnimation animateIn="animate__fadeIn">
                  Grace à l'interface utilisateur construit sur mesure par nos
                  meilleures designer, la navigation parmis dans le contenus
                  cinaf devient un reel plaisir.
                </ScrollAnimation>
              </p>
              <p>
                <br />
                <CinafBtn ext={true} hto="https://vod.cinaf.tv">
                  Parcourir notre cathalogue
                </CinafBtn>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </StoreContainer>
  );
}
