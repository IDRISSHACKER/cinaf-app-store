// @ts-nocheck

import React from "react";
import PresentationSection from "../PresentationSection/PresentationSection";
import "./DownloadSection.scss";
import { StoreContainer } from "./../../../../components/container/container";
import CinafBtn from "../../../../components/cinafBtn/CinafBtn";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

function DownloadedSession() {
  return (
    <div className="download">
      <StoreContainer>
        <ScrollAnimation animateIn="animate__flipInX">
          <div className="downloadContent">
            <div className="download-body">
              <h2 className="h2">Nouveau sur l'application Cinaf</h2>
              <p className="p">
                Il est possible de telechargers vos series préférées et les
                consulter hors ligne sur l'application cinaf. Veiller
                telecharger la dernière version de votre application de
                streaming pour bénéficier de cette fonctionnalitées.
              </p>
              <br />
              <ScrollAnimation animateIn="animate__lightSpeedInRight">
                <CinafBtn variant={"dl"} downloadBtn>
                  Telecharger l'application cinaf
                </CinafBtn>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </StoreContainer>
    </div>
  );
}

export default DownloadedSession;
