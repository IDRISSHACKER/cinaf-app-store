import React from "react";
import { Typography, Box } from '@mui/material';
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@mui/material';
import "./DownloadProgress.scss"

function DownloadProgress({soft}:any) {
    const labels = [
      ...soft.software.map((downloadItem: any) => downloadItem.title),
    ];

    const data = {
      labels,
      datasets: [
        {
          label: "Telechargement ",
          data: [
            ...soft.software.map((downloadItem: any) =>
              parseInt(downloadItem.downloaded)
            ),
          ],
          borderColor: ["#ec8d30", "#141738", "#3c76d1"],
          backgroundColor: ["#ec8d30", "#141738", "#3c76d1"],
        },
      ],
    };
  return (
    <div>
      <Card>
        <CardHeader title="Resumer de téléchargement des apps" />
        <CardContent>
          <Box className="chart">
            <Pie
              data={data}
              className="chartPie"
              options={{ maintainAspectRatio: false }}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default DownloadProgress;
