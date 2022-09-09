// @ts-nocheck

import React from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhonelinkTwoToneIcon from "@mui/icons-material/PhonelinkTwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";
import RocketTwoToneIcon from "@mui/icons-material/RocketTwoTone";
import { StoreContainer } from "./../../../../components/container/container";
import { Grid } from "@mui/material";
import Desk from "./components/Desk/Desk";
import "./DeskContent.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

function DeskSection() {
  return (
    <div className="dsk">
      <StoreContainer>
        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          alignItems="stretch"
        >
          <Grid item>
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <Desk
                title="Souscris à un abonnement"
                description="L'abonnement vous donne access à tout le contenus cinaf"
                icon={<RocketTwoToneIcon />}
              />
            </ScrollAnimation>
          </Grid>
          <Grid item>
            <ScrollAnimation animateIn="animate__flipInX">
              <Desk
                title="Multiplateforme"
                description="Que vous soyez sur pc mobile ipad, cinaf est faits pour vous"
                icon={<PhonelinkTwoToneIcon />}
              />
            </ScrollAnimation>
          </Grid>
          <Grid item>
            <ScrollAnimation animateIn="animate__fadeInRightBig">
              <Desk
                title="Video haute resolution"
                description="Lancez vous dans l'immertion totale grâce à nos contenus FHD"
                icon={<LiveTvTwoToneIcon />}
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
      </StoreContainer>
    </div>
  );
}

export default DeskSection;
