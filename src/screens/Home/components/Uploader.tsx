import React from "react";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Stack
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import "./Uploader.css";
import defaultImage from "./defaultThumbnail.png";
import { CopyAllOutlined, ResetTvOutlined, UploadFileOutlined } from "@mui/icons-material";
import axios from "axios"
import Linker from "./Linker";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
  

function Uploader() {

  const dImg = `${defaultImage}`
  const [img, setImg] = React.useState("");
  const [apercu, setApercu] = React.useState(dImg)
  const [uploading, setUploading] = React.useState(false)
  const [imgSelected, setImgSelected] = React.useState(false)
  const [uploaded, setUploaded] = React.useState(0)
  const selectImage = React.useRef<HTMLInputElement>(null);
  const [imgName, setImgName] = React.useState("")
  const [imgSize, setImgSize] = React.useState(0)
  const [size, setSize] = React.useState(`${imgSize}`)
  const [link, setLink] = React.useState("")
  const [open, setOpen] = React.useState(false)
  
  const handleSelectImg = ()=> {
    selectImage?.current?.click()
  }

    const notify = () =>
      toast.success(
        'Fichier televerser sous les serveurs de guihon avec success',
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );


  const handleFile = async(event:any) => {
    if (event.currentTarget.files[0]){
        const convertionNumber = 1000;
        const acceptType = [
          "image/png",
          "image/jpg",
          "image/jpeg",
          "image/svg+xml",
          "image/webp",
        ];

        if (acceptType.includes(event.currentTarget.files[0].type)){
            const urlImg = URL.createObjectURL(event.currentTarget.files[0]);
            setImg(event?.currentTarget?.files[0]);
            setImgName(event?.currentTarget?.files[0]?.name);
            setImgSize(event?.currentTarget?.files[0]?.size);
            setApercu(urlImg);
            setImgSelected(true);
        }

        const sizeKo = Math.floor(
          event?.currentTarget?.files[0]?.size / convertionNumber
        );
        const sizeMo = Math.floor(sizeKo / convertionNumber)

        if (sizeMo < 1) {
          setSize(sizeKo + " KO");
        } else {
          setSize(sizeMo + " MO");
        }
        
    }
  }


  const handleReset = () => {
    setImg("")
    setApercu(dImg)
    setImgSelected(false)
    setImgName("")
    setImgSize(0)
    setUploaded(0)
  }

  const handleUpload = async()=>{
    setUploading(true)
    const url = `http://localhost:5000/upload`;
    const formData = new FormData();
    
    formData.append("file", img);

    const config = {
      onUploadProgress: (progressEvent: any) => {
        const { loaded, total } = progressEvent;
        const percent = Math.floor((loaded * 100) / total);
        setUploaded(percent);
      },
    };

    await axios
      .post(url, formData, config)
      .then((res) => {
        handleReset()
        setUploading(false)
        const path = `http://localhost:5000/${res.data.file}?quality=normal&compressed=true`
        setApercu(path)
        setLink(path)
        setOpen(true)
        notify()
      })
      .catch((err) => {
        console.log(err)
        setUploading(false);
      });
  }


  return (
    <div className="Upload-image">
      <input
        id="image"
        type="file"
        style={{ display: "none" }}
        ref={selectImage}
        onChange={handleFile}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <label htmlFor="image">
        <Card variant="outlined" className="Uploader">
          <CardMedia
            component="img"
            className="imgThumbnail dashered"
            image={apercu}
            alt="image uploader"
          />
          <br />
          {imgSelected ? (
            <CardContent>
              <List>
                <ListItem button>
                  <ListItemText className="imgTitle" primary={`${imgName}`} />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText className="imgSize" primary={`${size}`} />
                </ListItem>
              </List>
            </CardContent>
          ) : null}
          <CardActions>
            {imgSelected ? (
              <div>
                <Button
                  color="error"
                  disableElevation
                  startIcon={<ResetTvOutlined />}
                  onClick={handleReset}
                >
                  Annuler
                </Button>
                <LoadingButton
                  loading={uploading}
                  variant="contained"
                  loadingPosition="start"
                  startIcon={<UploadFileOutlined />}
                  disableElevation
                  onClick={handleUpload}
                >
                  {uploading ? (
                    <span>Televersement... {uploaded}%</span>
                  ) : (
                    <span>Televerser</span>
                  )}
                </LoadingButton>
              </div>
            ) : (
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                className="flexed"
              >
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleSelectImg}
                >
                  Selectionner l'image a televerser
                </Button>
                <Linker link={link} opened={open} setOpened={setOpen} />
              </Stack>
            )}
          </CardActions>
        </Card>
      </label>
    </div>
  );
}

export default Uploader;
