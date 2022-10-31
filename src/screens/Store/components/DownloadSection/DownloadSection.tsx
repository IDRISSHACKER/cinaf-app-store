import React from "react";
import PresentationSection from "../PresentationSection/PresentationSection";
import { StoreContainer } from "./../../../../components/container/container";
import CinafBtn from "../../../../components/cinafBtn/CinafBtn";
import Button from '@mui/material/Button';
import DownloadingIcon from '@mui/icons-material/Downloading';
import { Link } from "react-router-dom";

function DownloadedSession() {
  return (
    <div className="download">
        <div className="downloadContent">
        <StoreContainer>
            <div className="download-body">
              <h2 className="h2">Nouveau sur l'application Cinaf</h2>
              <div className="box h10"></div>
              <p className="p">
                  Il est possible de telechargers vos series préférées et les consulter hors ligne sur l'application cinaf. Veiller telecharger la dernière version de votre application de streaming pour bénéficier de cette fonctionnalitées.
              </p>
              <br />
              <Link to={"/download"} className="link">
                <Button variant="contained" startIcon={<DownloadingIcon />}>Telecharge l'application</Button>
              </Link>
            </div>
          </StoreContainer>
        </div>
    </div>
  );
}

export default DownloadedSession;
