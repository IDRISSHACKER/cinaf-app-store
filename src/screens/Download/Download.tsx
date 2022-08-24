import { Box, Typography } from "@mui/material"
import React from "react"
import HeadSection from './HeadSection/HeadSection';
import DownloadBody from "./DownloadBody/DownloadBody";
import Page from "../../components/Page";

function Download(){

    return (
      <Page title={"Téléchargements"}>
        <div className="download">
          <div>
            <HeadSection />
            <DownloadBody />
            <Box sx={{ height: 200 }} />
          </div>
        </div>
      </Page>
    );
}

export default Download
