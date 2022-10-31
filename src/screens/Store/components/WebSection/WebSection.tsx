import React from "react";
import CinafBtn from "../../../../components/cinafBtn/CinafBtn";
import { StoreContainer } from "./../../../../components/container/container";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import hero from "./hero.png";


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
      <StoreContainer>
        <div
          className="webSection"
          ref={constraintsRef}
        >
          <div className="webSection-content">
            <div className="webSection-video">
              <img src={hero} alt="" />
            </div>
            {/**<div
              className="webSection-presentation"
            >
              <div className="webSection-presentation-content">
                <h2 className="webSection-presentation-content-title h2">
                  Regarder la vidéo en un{" "}
                  <strong className="primary">click</strong>
                </h2>
                <p className="webSection-presentation-content-body p">
                  Grace à l'interface utilisateur construit sur mesure par nos
                  meilleures designer, la navigation parmis dans le contenus
                  cinaf devient un reel plaisir.
                </p>
                <p>
                  <br />
                  <CinafBtn ext={true} hto="https://vod.cinaf.tv">Parcourir notre cathalogue</CinafBtn>
                </p>
              </div> 
            </div>**/}
          </div>
        </div>
      </StoreContainer>
    );
}

