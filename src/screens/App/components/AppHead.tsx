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
import paths from './../../../const/path';

function AppHead({app}:any){
    const [opened, setOpened] = React.useState(false)

    const handleOpenVersion = function(e:any){
        setOpened(e)
    }

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
                <MetaItem title="4.8" desc="676 review" />
                <MetaItem title="100K+" desc="Downloads" />
                <MetaItem title="3+" desc="Rated for 3+" />
              </div>
              <div className="appDownload">
                <ModalVersion
                  opened={opened}
                  setOpened={handleOpenVersion}
                  link={""}
                  versions={app?.software2?.versions}
                />
              </div>
            </div>
            <div className="logo">
              <div className="cardLogo hm">
                <img src="https://cinaf.tv/favicon.ico" alt="Cinf Icon" />
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* app?.software2?.medias?.map((im:any, index:any)=>(
            <img src={`${paths.api_url}/media/${im.id}`} key={`${index}`} />
          ))
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
