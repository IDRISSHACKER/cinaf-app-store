// @ts-nocheck
import { AddAPhotoTwoTone, CloseTwoTone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import CircularProgress from "@mui/material/CircularProgress";
import {Box} from "@mui/material"
import { removeMedia } from "../../../../redux/store";
import "./Media.scss";
import paths from './../../../../const/path';

function Media({ identifier, uploading = false, mediaFile, handleMedia }: any) {
  const dispatch = useDispatch();

  const selectImage = React.useRef<HTMLInputElement>(null);
  const [img, setImg] = React.useState(``);
  const [objImg, setObjImg] = React.useState(``);
  const [uid, setUid] = React.useState(identifier);
  const [onUpload, setOnUpload] = React.useState(false)
  const [uploaded, setUploaded] = React.useState(0)

  const handleFile = (event: any) => {
    setOnUpload(true)
    const urlImg = URL.createObjectURL(event.currentTarget.files[0]);

    setObjImg(urlImg);
    setOnUpload(true)
    setImg(event.currentTarget.files[0]);
    dispatch({
      type: "media/setMedia",
      payload: {
        id: uid,
        uri: URL.createObjectURL(event.currentTarget.files[0]),
        img: URL.createObjectURL(event.currentTarget.files[0]),
      },
    });

    setUid(uid + 1);

    console.log(localStorage.getItem("post"));

    const formData = new FormData()
    formData.append("file", event.currentTarget.files[0]);
    formData.append("software", localStorage.getItem("post"))
    formData.append("iscover", 0)
    formData.append("type", "image")

    const config = {
      onUploadProgress: (progressEvent: any) => {
        const { loaded, total } = progressEvent;
        const percent = Math.floor((loaded * 100) / total);
        setUploaded(percent);
      },
    };
  
    axios.post(paths.api_url + "/media", formData, config).then(res=>{
        console.log(res.data)
        setOnUpload(false)
    }).catch(err => {
      setOnUpload(false)
      console.log(err)
    })
  }


  const handleRemove = () => {
    dispatch(removeMedia(identifier));
  };

  const upload = useSelector((state: any) => state?.uploading);

  React.useEffect(()=>{
    console.log(img)
  }, [upload])

  return (
    <div>
      {upload === true ? (
        <div
          className="Media"
          onClick={() => (uploading ? selectImage.current?.click() : null)}
        >
          <div>
            {uploading && (
              <div>
                {onUpload ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress variant="determinate" value={uploaded} />
                  </Box>
                ) : (
                  <div className="icon">
                    <AddAPhotoTwoTone />
                  </div>
                )}
              </div>
            )}
            {!uploading && (
              <div className="menu-close">
                <IconButton className="icon-close" onClick={handleRemove}>
                  <CloseTwoTone />
                </IconButton>
              </div>
            )}
          </div>
          <input
            type="file"
            id="thumbnail"
            className="d-none"
            ref={selectImage}
            onChange={handleFile}
          />
          {!uploading && (
            <div className="img img-visible">
              <img src={mediaFile?.uri} alt="" />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Media;
