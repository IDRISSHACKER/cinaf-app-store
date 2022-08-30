// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSoftware } from "../../../redux/slices/softwareSlice/softwareSlice";
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
  Stack, Stepper,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import "./Uploader.scss";
import defaultImage from "./defaultThumbnail.png";
import {
  CopyAllOutlined,
  ResetTvOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
import axios from "axios";
import Linker from "./Linker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import short from "./../../../utils";
import Plateforme from "./Plateformes/Plateformes";
import Media from "./Media/Media";
import Medias from "./Medias/Medias";
import path from "../../../const/path";

const acceptTypeImg = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/svg+xml",
  "image/webp",
];

function Uploader() {
  const dispatch = useDispatch();
  const plateformes = useSelector((state: any) => state?.plateforme);
  const softwares = useSelector((state: any) => state?.software);
  const softwaresId = useSelector((state: any) => state?.softwareIdSlice);

  const dImg = `${defaultImage}`;
  const [img, setImg] = React.useState("");
  const [apercu, setApercu] = React.useState(dImg);
  const [uploading, setUploading] = React.useState(false);
  const [imgSelected, setImgSelected] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(0);
  const selectImage = React.useRef<HTMLInputElement>(null);
  const [imgName, setImgName] = React.useState("");
  const [imgSize, setImgSize] = React.useState(0);
  const [size, setSize] = React.useState(`${imgSize}`);
  const [link, setLink] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [softwareId, setSoftwareId] = React.useState({ softwareId : 4});
  const [step, setStep] = React.useState(true);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [fkSupport, setFkSupport] = React.useState(
    plateformes[plateformes.length - 1].id
  );
  const [resData, setResdata] = React.useState({id: 4});

  React.useEffect(() => {
    setFkSupport(plateformes[plateformes.length - 1].id);
  }, [plateformes]);


  const notify = () =>
    toast.success("L'application à été ajoutée avec succès !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
  const handlePostSoftware = async () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("version", version);
    formData.append("fkSupport", fkSupport);

    axios
      .post(`${path.api_url}/software`, formData, {})
      .then((res) => {
        dispatch({
          type: "softwareIdSlice",
          payload: { softwareId: res.data.softwareId },
        });
        setUploading(false);
        setTitle("");
        setDescription("");
        setVersion("");
        setFkSupport("1");
        dispatch(getSoftware());
            const formData2 = new FormData();
            formData2.append("file", img);
            formData2.append("type", "image");
            formData2.append("iscover", "1");
            formData2.append("software", `${res.data.softwareId}`);
            localStorage.setItem("post", res.data.softwareId);

            axios
              .post(`${path.api_url}/media`, formData2)
              .then((res) => {
                setUploaded(uploaded + 1);
                setImgSelected(false);
                setImg("");
                setApercu(dImg);
                dispatch({
                  type: "uploading/setUploading",
                  payload: true,
                });
                notify();
              })
              .catch((err) => {
                console.log(err);
              });
        
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  const handleSelectImg = () => {
    selectImage?.current?.click();
  };

  const handleFile = async (event: any) => {
    if (event.currentTarget.files[0]) {
      const convertionNumber = 1000;

      if (acceptTypeImg.includes(event.currentTarget.files[0].type)) {
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
      const sizeMo = Math.floor(sizeKo / convertionNumber);

      if (sizeMo < 1) {
        setSize(sizeKo + " KO");
      } else {
        setSize(sizeMo + " MO");
      }
    }
  };

  const handleReset = () => {
    setImg("");
    setApercu(dImg);
    setImgSelected(false);
    setImgName("");
    setImgSize(0);
    setUploaded(0);
  };

  const handleUpload = async () => {
    setUploading(true);
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
        handleReset();
        setUploading(false);
        const path = `http://localhost:5000/${res.data.file}?quality=normal&compressed=true`;
        setApercu(path);
        setLink(path);
        setOpen(true);
        notify();
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  return (
    <div className="form2cols">
      <div className="Upload-image">
        <Typography variant="h5">
          Captures des differentes fonctionnalités
        </Typography>
        <br />
        <br />
        <input
          id="image"
          type="file"
          style={{ display: "none" }}
          ref={selectImage}
          onChange={handleFile}
          accept={`.png, .jpg, .jpeg, .svg, .webp`}
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
        <Card variant="outlined" className="">
          <CardContent className="Uploader">
            <label htmlFor="image">
              <CardMedia
                component="img"
                className="imgThumbnail dashered"
                image={apercu}
                alt="image uploader"
              />
            </label>
            <Medias />
          </CardContent>
          <br />
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
              </div>
            ) : (
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                className="flexed"
              >
                {/**<Button
                  variant="contained"
                  disableElevation
                  onClick={handleSelectImg}
                >
                  Selectionner l'image a televerser
            </Button>
                <Linker link={link} opened={open} setOpened={setOpen} />*/}
              </Stack>
            )}
          </CardActions>
        </Card>
      </div>
      <div className="col">
        <Plateforme />
        <div className="plateforme-title">
          <Typography variant="h5">
            Information détaillés sur l'application
          </Typography>
        </div>
        <div className="fields">
          <Card variant="outlined" className="texts">
            <CardContent>
              <TextField
                variant="outlined"
                label="titre de l'application"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
              />
              <br /> <br />
              <TextField
                variant="outlined"
                label="Lien de l'application sur le store"
                type="text"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                fullWidth
              />
              <br /> <br />
              <TextField
                variant="outlined"
                label="donner un resumer bref de l'application"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                multiline
                rows={5}
              />
            </CardContent>
          </Card>
        </div>
        <LoadingButton
          loading={uploading}
          variant="contained"
          loadingPosition="start"
          startIcon={<UploadFileOutlined />}
          disableElevation
          onClick={handlePostSoftware}
          size="large"
        >
          {uploading ? (
            <span>Televersement... {uploaded}%</span>
          ) : (
            <span>Publier sur le store</span>
          )}
        </LoadingButton>
      </div>
    </div>
  );
}

export default Uploader;
