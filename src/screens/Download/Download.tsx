// @ts-nocheck
import { Box, Typography } from "@mui/material";
import React from "react";
import HeadSection from "./HeadSection/HeadSection";
import DownloadBody from "./DownloadBody/DownloadBody";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import { getSoftware } from "./../../redux/slices/softwareSlice/softwareSlice";

function Download() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.software.loading);

  React.useEffect(() => {
    dispatch(getSoftware());
  }, [dispatch]);

  return (
    <Page title={"Téléchargements"}>
      <div className="download2">
        <div>
          <HeadSection />
          <DownloadBody />
          <Box sx={{ height: 200 }} />
        </div>
      </div>
    </Page>
  );
}

export default Download;
