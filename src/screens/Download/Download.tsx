// @ts-nocheck
import { Box, Typography } from "@mui/material";
import React from "react";
import HeadSection from "./HeadSection/HeadSection";
import DownloadBody from "./DownloadBody/DownloadBody";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import { getSoftware } from "../../redux/slices/softwareSlice/softwareSlice";
import {StoreContainer} from "../../components/container/container";

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
          <StoreContainer>
            <HeadSection />
          </StoreContainer>
          <DownloadBody/>
        </div>
      </div>
    </Page>
  );
}

export default Download;
