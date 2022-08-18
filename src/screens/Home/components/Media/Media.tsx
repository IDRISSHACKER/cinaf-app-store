import { AddAPhotoTwoTone, CloseTwoTone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { removeMedia } from "../../../../redux/store";
import "./Media.scss"

function Media({identifier, uploading = false, mediaFile}:any){
    const dispatch = useDispatch();

    const selectImage = React.useRef<HTMLInputElement>(null);
    const [img, setImg] = React.useState(``)
    const [objImg, setObjImg] = React.useState(``)
    const [uid, setUid] = React.useState(identifier)

    const handleFile = (event:any) => {
         const urlImg = URL.createObjectURL(event.currentTarget.files[0]);
         setObjImg(urlImg)
         setImg(event.currentTarget.files[0])
         dispatch({
           type: "media/setMedia",
           payload: {
             id: uid,
             uri: URL.createObjectURL(event.currentTarget.files[0]),
             img: event.currentTarget.files[0],
           },
         });

         setUid(uid+1)
    }

    const handleRemove = ()=>{
        dispatch(removeMedia(identifier));
    }
    return (
      <div
        className="Media"
        onClick={() => (uploading ? selectImage.current?.click() : null)}
      >
        <div>
          {uploading && (
            <div>
              <div className="icon">
                <AddAPhotoTwoTone />
              </div>
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
    );
}

export default Media
