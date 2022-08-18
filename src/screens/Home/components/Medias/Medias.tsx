import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Media from "../Media/Media";

function Medias({ support }: any) {

  const medias:any = useSelector((state: any) => state?.media)

  return (
    <div className="thumbnailDesk">
      {medias &&
        medias?.map((media: any, index: number) => (
          <Media key={`${index}`} identifier={media?.id} mediaFile={media} />
        ))}
      <Media uploading={true} identifier={100} />
    </div>
  );
}

export default Medias;
