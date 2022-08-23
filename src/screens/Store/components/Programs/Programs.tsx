// @ts-nocheck
import React from "react";
import { Button, Typography, Box, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/container";
import { getSoftware } from "./../../redux/slices/softwareSlice/softwareSlice";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

import Slider from "./components/slider/Slid.tsx";
import WebSection from "./components/WebSection/WebSection";
import DeskSection from "./components/DeskSection/DeskSection";
import ReadySection from "./components/ReadySection/ReadySection";

import "./Store.scss";
import path from "../../const/path";
import OfferSession from "./components/OfferSession/OfferSession";

const Programs = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.software.loading);

  React.useEffect(() => {
    dispatch(getSoftware());
  }, [dispatch]);

  const handleLoad = () => {
    dispatch(getSoftware());
  };

  const softwares = useSelector((state: any) => state.software);
  return (
    <div>
      <div className="content">
        <Container>
          <div className="Store">
            <Typography variant="h4">store</Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} minHeight={160}>
                {!loading &&
                  softwares?.software?.map((software: any) => (
                    <Grid item xs={12} sm={6} md={4} key={software.id}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5">
                          <Avatar
                            src={`${path.api_url}/media/${software?.medias[0]?.id}`}
                            sx={{ width: 86, height: 86 }}
                            alt=""
                          />
                          {software.title} |{" "}
                          {software.versions.length > 0 && (
                            <Typography>
                              V {software?.versions[0]?.versionTag}
                            </Typography>
                          )}
                        </Typography>
                        <Typography variant="body1">
                          {software.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                {softwares.loading && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5">Loading...</Typography>
                    </Box>
                  </Grid>
                )}
                {softwares.error && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5">
                        Une erreur c7 produite lors du chargement des
                        fichiers...
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Box>
            <Button variant="contained" color="primary" onClick={handleLoad}>
              reload
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Programs;
