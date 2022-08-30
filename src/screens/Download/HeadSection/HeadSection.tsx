import { Button } from "@mui/material";
import React from "react"
import CinafBtn from "../../../components/cinafBtn/CinafBtn";
import { StoreContainer } from "../../../components/container/container"
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import "./HeadSection.scss"
import { AndroidOutlined } from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';

function HeadSection(){

    return (
      <React.Fragment>
        <div className="headSection2">
          <StoreContainer>
            <div className="headSection-body2">
              <h1 className="h1-title">
                <strong className="primary3">Téléchargements</strong>
              </h1>
              <div className="head-link">
                <DownloadBtn
                  to="/download/cinaf-for-android"
                  startIcon={<AndroidOutlined />}
                  key={"1"}
                >
                  Telecharger cinaf pour android
                </DownloadBtn>
                <DownloadBtn
                  to={"/download/cinaf-for-ios"}
                  startIcon={<AppleIcon />}
                  key={"2"}
                >
                  Telecharger cinaf pour ios
                </DownloadBtn>
                <p className="deskText">
                  Pas encore de compte Cinaf ?{" "}
                  <a href="https://vod.cinaf.tv">Abonnez-vous ici</a>
                </p>
              </div>
            </div>
          </StoreContainer>
        </div>
      </React.Fragment>
    );
}

export default HeadSection
