import React from "react";
import PresentationSection from "../PresentationSection/PresentationSection";
import "./DownloadSection.scss";
import { StoreContainer } from "./../../../../components/container/container";
import CinafBtn from "../../../../components/cinafBtn/CinafBtn";

function DownloadedSession() {
  return (
    <div className="download">
      <StoreContainer>
        <div className="downloadContent">
          <div className="download-body">
            <h2 className="h2">Nouveau sur l'application Cinaf</h2>
            <p className="p">
                Il est possible de telechargers vos series préférées et les consulter hors ligne sur l'application cinaf. Veiller telecharger la dernière version de votre application de streaming pour bénéficier de cette fonctionnalitées.
            </p>
            <br />
            <CinafBtn variant={"dl"} downloadBtn>Telecharger l'application cinaf</CinafBtn>
          </div>
        </div>
      </StoreContainer>
    </div>
  );
}

export default DownloadedSession;
