// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StoreContainer } from "../../../components/container/container";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import PersonalVideoOutlinedIcon from "@mui/icons-material/PersonalVideoOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import "./DownloadBody.scss";
import { AndroidOutlined } from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import appleSrc from "./AppleStore.png";
import androidSrc from "./playStore.png";
import CinafBtn from "../../../components/cinafBtn/CinafBtn";
import { getSoftware } from "./../../../redux/slices/softwareSlice/softwareSlice";
import { json } from "stream/consumers";

function DownloadBody() {
  return (
    <div className="mb-10">
      <div className="downloadBody">
        <StoreContainer>
          <div className="downloadBody-content">
            <div className="d-head">
              <DHeadBody />
            </div>
            <br />
            <div className="d-body">
              <DTitle icon={<PhoneAndroidOutlinedIcon />}>
                Smartphones et tablettes
              </DTitle>
              <DDownloadContent />
              <br />
              <br />
              <DTitle icon={<PersonalVideoOutlinedIcon />}>Smart TV</DTitle>
              <DDownloadContentTV />
            </div>
          </div>
        </StoreContainer>
      </div>
    </div>
  );
}

function DHeadBody() {
  return (
    <div className="d-head-body">
      <h2 className="h2 white bTitle">Toutes les applications CINAF</h2>
      <p className="whiteL">
        Nous avons des applications pour toutes les plateformes et appareils
        populaires. Installez tout simplement Cinaf sur votre écran préféré,
        connectez-vous à votre compte et lancez-vous !
      </p>
    </div>
  );
}

function DTitle({ children, icon }: any) {
  return (
    <div className="bloc-title">
      <div className="bloc-title-icon">{icon}</div>
      <div className="bloc-title-text">
        <h3>{children}</h3>
      </div>
    </div>
  );
}

function DDownloadContent() {
  
  const softwares = useSelector((state: any) => state.software);

  return (
    <div className="DDownload">
      <div className="DDownload-body">
        <DDownloadItem
          toStore={`${
            !softwares.loading &&
            !softwares.error &&
            softwares?.software[2]?.store
          }`}
          to={`/download/${
            !softwares.loading && !softwares.error && softwares?.software[2]?.id
          }-${
            !softwares.loading &&
            !softwares.error &&
            softwares?.software[2]?.slug
          }`}
          icon={<AndroidOutlined />}
          img={androidSrc}
        >
          {!softwares.loading &&
            !softwares.error &&
            softwares?.software[2]?.title}
        </DDownloadItem>
        <DDownloadItem
          toStore={`${
            !softwares.loading &&
            !softwares.error &&
            softwares?.software[0]?.store
          }`}
          to={`/download/${
            !softwares.loading && !softwares.error && softwares?.software[0]?.id
          }-${
            !softwares.loading &&
            !softwares.error &&
            softwares?.software[0]?.slug
          }`}
          icon={<AppleIcon />}
          img={appleSrc}
        >
          {!softwares.loading &&
            !softwares.error &&
            softwares?.software[0]?.title}
        </DDownloadItem>
      </div>
    </div>
  );
}

function DDownloadContentTV() {

  const softwares = useSelector((state: any) => state.software);

  return (
    <div className="DDownload">
      <div className="DDownload-body">
        <DDownloadItem
          to={`/download/${
            !softwares.loading &&
            !softwares.error &&
            softwares?.software[1]?.id
          }-${
            !softwares.loading &&
            !softwares.error &&
            softwares?.software[1]?.slug
          }`}
          icon={<AndroidOutlined />}
          img={androidSrc}
          inStore={false}
          variant={"fw"}
        >
          {!softwares.loading &&
            !softwares.error &&
            softwares?.software[1]?.title}
        </DDownloadItem>
      </div>
    </div>
  );
}

function DDownloadItem({
  children,
  icon,
  to = "",
  toStore="",
  isLink = true,
  img = androidSrc,
  inStore = true,
}: any) {
  return (
    <div className="DDownloadItem">
      <div className="DIcon">{icon}</div>
      <div className="DText">{children}</div>
      {isLink && (
        <div className="DLink">
          {inStore && (
            <DDownloadLink to={toStore} icon={<img src={img} alt="" />}>
              Telecharger sur le store
            </DDownloadLink>
          )}
          <MagnetDownloadLink to={to}>Telecharger</MagnetDownloadLink>
        </div>
      )}
    </div>
  );
}

export function DDownloadLink({ to, children, icon }: any) {
  return (
    <a href={to} className="downloadLink" target={"_blank"} rel="noreferrer">
      <div className="dlIcon">{icon}</div>
      <div className="dlText">{children}</div>
      <div>
        <LaunchOutlinedIcon />
      </div>
    </a>
  );
}

export function MagnetDownloadLink({ to, children, variant, props }: any) {
  return (
    <CinafBtn
      variant={`dl applyH ${variant}`}
      downloadBtn
      to={to}
      props={props}
    >
      Telecharger
    </CinafBtn>
  );
}

export default DownloadBody;
