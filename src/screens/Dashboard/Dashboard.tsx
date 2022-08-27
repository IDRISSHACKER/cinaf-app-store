// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import "./Dashboard.scss";
import Container from "./../../components/container/container";
import DownloadProgress from "./components/DownloadProgress/DownloadProgress";
import AppManager from "./components/appManager/appManager";
import Page from "../../components/Page";
import { getSoftware } from "./../../redux/slices/softwareSlice/softwareSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.software.loading);

  React.useEffect(() => {
    dispatch(getSoftware());
  }, [dispatch]);

  const softwares = useSelector((state: any) => state.software);

  return (
    <Page title="Tableau de bord | Administration">
      <Container>
        <div className="Dashboard">
          <Typography variant="h4">
            <strong>Dashboard</strong>
          </Typography>
          <br />
          <br />
          <DownloadProgress />
          <br />
          <br />
          <AppManager soft={softwares} />
          <br />
          <br />
        </div>
      </Container>
    </Page>
  );
}

export default Dashboard;
