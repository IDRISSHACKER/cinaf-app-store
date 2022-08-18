import React from "react";
import { Typography } from '@mui/material';
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@mui/material';

function DownloadProgress() {
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];

    const data = {
      labels,
      datasets: [
        {
          label: "Downloads",
          data: [10, 1],
          borderColor: "#ec8d30",
          backgroundColor: "#ec8d30",
        },
      ],
    };
  return (
    <div>
      <Card>
        <CardHeader title="Evolution des telechargements" />
        <CardContent>
          <div>
            <Line data={data} style={{ height: "400px" }} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DownloadProgress;
