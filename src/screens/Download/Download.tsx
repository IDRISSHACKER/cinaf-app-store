import { Box, Typography } from "@mui/material"
import React from "react"
import HeadSection from './HeadSection/HeadSection';
import DownloadBody from "./DownloadBody/DownloadBody";

function Download(){

    return (
        <div className="download">
            <div>
                <HeadSection />
                <DownloadBody />
                <Box sx={{height: 200}} />
            </div>
        </div>
    )
}

export default Download
