import { Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./plateforme.css";

function Plateforme({support}:any) {
  
  const dispatch = useDispatch()
  
  const selectPlateforme = (id: number): any => {
    dispatch({
      type: "plateforme/selectPlateforme",
      payload: id,
    })
  }

  const plateformes = useSelector((state: any) => state?.plateforme)

  return (
    <div
      className={
        support.id === plateformes[plateformes.length -1].id
          ? "plateforme plateforme-active"
          : "plateforme"
      }
      onClick={() => selectPlateforme(support.id)}
    >
      <div className="img">{support?.icon}</div>
      <Typography>{support?.name}</Typography>
    </div>
  );
}

export default Plateforme;
