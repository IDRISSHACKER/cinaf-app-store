import React  from "react"
import { Link } from "react-router-dom"
import { StoreContainer } from "../../../components/container/container"
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import PersonalVideoOutlinedIcon from "@mui/icons-material/PersonalVideoOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import "./DownloadBody.scss"
import { AndroidOutlined } from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import appleSrc from "./AppleStore.png"
import androidSrc from "./playStore.png"
import CinafBtn from "../../../components/cinafBtn/CinafBtn";

function DownloadBody(){


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
                <br /><br />
                <DTitle icon={<PersonalVideoOutlinedIcon />}>
                  Smart TV
                </DTitle>
                <DDownloadContent />
              </div>
            </div>
          </StoreContainer>
        </div>
      </div>
    );
}

function DHeadBody(){

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


function DTitle({children, icon}:any){
    return (
      <div className="bloc-title">
        <div className="bloc-title-icon">{icon}</div>
        <div className="bloc-title-text">
          <h3>{children}</h3>
        </div>
      </div>
    );
}

function DDownloadContent(){
    return (
        <div className="DDownload">
            <div className="DDownload-body">
                <DDownloadItem to="/download/cinaf-ios" icon={<AndroidOutlined />} img={androidSrc}>Cinaf pour android</DDownloadItem>
                <DDownloadItem to="/download/cinaf-android" icon={<AppleIcon />} img={appleSrc}>Cinaf pour ios</DDownloadItem>
            </div>
        </div>
    )
}

function DDownloadItem({children, icon, to="", isLink=true, img=androidSrc}:any){
    return (
      <div className="DDownloadItem">
        <div className="DIcon">{icon}</div>
        <div className="DText">{children}</div>
        {isLink && (
          <div className="DLink">
            <DDownloadLink to={to} icon={<img src={img} alt="" />}>Telecharger sur le store</DDownloadLink>
            <MagnetDownloadLink to={to}>Telecharger</MagnetDownloadLink>
          </div>
        )}
      </div>
    );
}

export function DDownloadLink({to, children, icon}:any){
    return (
      <Link to={to} className="downloadLink">
        <div className="dlIcon">{icon}</div>
        <div className="dlText">{children}</div>
        <div>
            <LaunchOutlinedIcon />
        </div>
      </Link>
    );
}

export function MagnetDownloadLink({ to, children, variant, props }: any) {
  return (
    <CinafBtn variant={`dl applyH ${variant}`} downloadBtn to={to} props={props}>
      Telecharger
    </CinafBtn>
  );
}


export default DownloadBody