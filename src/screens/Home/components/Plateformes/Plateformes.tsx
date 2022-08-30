import { AndroidTwoTone, Apple, LaptopWindowsTwoTone, TvTwoTone } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import Plateforme from "./components/plateforme/plateforme";
import "./Plateformes.scss";

const plateformes = [
  {
    id: 2,
    name: "Smart TV",
    icon: <TvTwoTone />,
  },
  {
    id: 3,
    name: "Android",
    icon: <AndroidTwoTone />,
  },
  {
    id: 4,
    name: "IOS",
    icon: <Apple />,
  },
];

function Plateformes() {
  return (
    <>
      <div className="plateforme-title">
        <Typography variant="h5">Selectionner la plateforme de l'application</Typography>
      </div>
      <div className="Plateformes">
        {plateformes.map((support: any, index: any) => (
          <Plateforme support={support} key={index} />
        ))}
      </div>
    </>
  );
}

export default Plateformes;
