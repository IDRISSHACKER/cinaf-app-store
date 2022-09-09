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
import Skeleton from '@mui/material/Skeleton';

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
          to={`/download/cinaf-for-android`}
          icon={<AndroidOutlined />}
          img={androidSrc}
          loading={softwares.loading}
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
          to={`/download/cinaf-for-ios`}
          icon={<AppleIcon />}
          img={appleSrc}
          loading={softwares.loading}
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
          to={`/download/cinaf-for-tv`}
          icon={<AndroidOutlined />}
          img={androidSrc}
          inStore={false}
          variant={"fw"}
          loading={softwares.loading}
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
  loading = false
}: any) {

  const status = true;

  return (
    <div className="DDownloadItem">
      <div className="DIcon">
        {!loading && <div>{icon}</div>}
        {loading && (
          <div>
            <Skeleton variant="rounded" width={60} height={50} />
          </div>
        )}
      </div>
      <div className="DText">
        {!loading && <div>{children}</div>}
        {loading && (
          <div className="hm">
            <Skeleton variant="rounded" width={200} height={40} />
          </div>
        )}
      </div>
      {isLink && (
        <div className="DLink">
          {inStore && (
            <div>
              <div>
                {loading && <Skeleton  width={"100%"} height={70} />}
              </div>
              {!loading && <DDownloadLink to={toStore} icon={<img src={img} alt="" />}>
                Telecharger sur le store
              </DDownloadLink>}
            </div>
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
