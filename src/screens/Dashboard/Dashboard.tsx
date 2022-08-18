import React from "react";
import { Typography } from "@mui/material";
import "./Dashboard.scss";
import Container from './../../components/container/container';

function Dashboard() {
  return (
    <Container>
      <div className="Dashboard">
        <Typography variant="h4">
            <strong>Dashboard</strong>
        </Typography>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis illum libero rerum vero repellat aliquam assumenda sit repudiandae fugiat perspiciatis, minima minus itaque, reprehenderit odio eveniet. Ut, quod illo?
        </p>
      </div>
    </Container>
  );
}

export default Dashboard;
