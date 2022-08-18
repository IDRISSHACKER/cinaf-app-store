import { AddBoxTwoTone, NewReleasesTwoTone, UploadFileTwoTone } from "@mui/icons-material";
import { Typography, Card } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modes.scss";


function Modes() {
  const dispatch = useDispatch()

  const selectMode = (id:number):any=>{
    dispatch(({
      type: "mode/setSelectMode",
      payload: id
    }))
  }


  const modes = useSelector((state:any) => state?.mode)
  return (
    <div>
      <Typography variant="h3" className="center">
        Que souhaitez vous faire ?
      </Typography>
      <br />
      <br />
      <div className="Modes">
        <div onClick={() => selectMode(1)}>
          <Card
            className={`mode ${
              modes[modes.length - 1]?.id === 1 ? "mode-active" : ""
            }`}
          >
            <div className="img">
              <AddBoxTwoTone />
            </div>
            <Typography>Nouvelle App</Typography>
          </Card>
        </div>
        <div onClick={() => selectMode(2)}>
          <Card
            className={`mode ${
              modes[modes.length - 1]?.id === 2 ? "mode-active" : ""
            }`}
          >
            <div className="img">
              <NewReleasesTwoTone />
            </div>
            <Typography>Nouvelle Version</Typography>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Modes;
