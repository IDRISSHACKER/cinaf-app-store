import * as React from "react"
import { DDownloadLink, MagnetDownloadLink } from "../../Download/DownloadBody/DownloadBody";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ModalVersion from "../../../components/ModalVersion/ModalVersion";
import Skeleton from "@mui/material/Skeleton";
import "./AppHead.scss"
import paths from './../../../const/path';
import axios from "axios"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function AppHead({app}:any){
    const [opened, setOpened] = React.useState(false)
    const [load, setLoad] = React.useState(true)
    const [img, setImg] = React.useState("")

    const handleOpenVersion = function(e:any){
        setOpened(e)
    }

    React.useEffect(()=>{
          /*axios({
            url: "https://apps.cinaf.tv/favicon.ico",
            method: "GET",
            responseType: "blob",
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setImg(url);
            
          });*/
          setTimeout(()=>{
            setLoad(false);
          }, 3000)
    }, [])

    return (
      <div>
        <div className="appHead">
          <div className="appHeadBody">
            <div className="desc">
              <div className="appTitle">
                {app.loading && (
                  <Skeleton variant="rounded" width={410} height={50} />
                )}
                {!app.loading && (
                  <h1 className="dtitle">{app?.software2?.title}</h1>
                )}
                <div className="appAuth">
                  <span>CINAF</span>
                </div>
              </div>
              <div className="appMeta">
                {app?.loading && (
                  <Skeleton variant="rounded" width={80} height={60} />
                )}
                {app?.loading && (
                  <Skeleton variant="rounded" width={80} height={60} />
                )}
                {app?.loading && (
                  <Skeleton variant="rounded" width={80} height={60} />
                )}
                {!app?.loading && <MetaItem title="4.8" desc="~1k review" />}
                {!app?.loading && (
                  <MetaItem
                    title={app?.software2?.downloaded}
                    desc="Downloads"
                  />
                )}
                {!app?.loading && <MetaItem title="3+" desc="Rated for 3+" />}
              </div>
              <div className="appDownload">
                {!app.loading && (
                  <ModalVersion
                    opened={opened}
                    setOpened={handleOpenVersion}
                    link={""}
                    versions={app?.software2?.versions}
                  />
                )}
                {app.loading && (
                  <Skeleton variant="rounded" width={210} height={40} />
                )}
              </div>
            </div>
            <div className="logo">
              {!load && (
                <div className="cardLogo hm">
                  <img src="https://vod.cinaf.tv/favicon.ico" alt="" />
                </div>
              )}
              {load && <Skeleton className="hm" variant="rounded" width={260} height={260} />}
            </div>
          </div>
        </div>
        <div>
          {/**          <div className="imgDesc">
            {!app?.loading && app?.software2?.medias?.length > 0 && (
              <Splide
                style={{ overflow: "hidden !important" }}
                aria-label="Services"
                options={{
                  rewind: true,
                  autoplay: true,
                  perPage: 6,
                  perMove: 6,
                  gap: 15,
                  pagination: false,
                  breakpoints: {
                    623: {
                      perPage: 2,
                      perMove: 2,
                    },
                    935: {
                      perPage: 4,
                      perMove: 4,
                    },
                    1247: {
                      perPage: 5,
                      perMove: 5,
                    },
                  },
                }}
              >
                {app?.software2?.medias?.map((im: any, index: any) => (
                  <SplideSlide>
                    <img
                      className="imgCrop"
                      src={`${paths.api_url}/media/${im.id}`}
                      key={`${index}`}
                      alt={"image desc"}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </div>
           */}
        </div>
      </div>
    );
}


function MetaItem({title, desc}:any){
    return (
      <div className="metaItem">
        <div className="metaTitle">
          <span>{title}</span>
        </div>
        <div className="metaDesk">
          <span>{desc}</span>
        </div>
      </div>
    );
}

export function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">version</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>V1.9 - Latest</MenuItem>
          <MenuItem value={20}>V1.9 - Stable</MenuItem>
          <MenuItem value={30}></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default AppHead
