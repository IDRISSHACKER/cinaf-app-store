import React from "react";
import { Typography } from "@mui/material";
import "./Dashboard.scss";
import Container from './../../components/container/container';
import DownloadProgress from "./components/DownloadProgress/DownloadProgress";
import AppManager from './components/appManager/appManager';

function Dashboard() {
  return (
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
        <AppManager />
        <br />
        <br />
      </div>
    </Container>
  );
}

export default Dashboard;
