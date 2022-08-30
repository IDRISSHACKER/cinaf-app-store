// @ts-nocheck
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { Divider, IconButton } from "@mui/material";
import { CopyAllTwoTone, CopyAllOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import { DialogContentText, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { MagnetDownloadLink } from "../../screens/Download/DownloadBody/DownloadBody";
import axios from "axios";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import "./ModalVersion.scss";
import paths from "./../../const/path";
import downSucc from "./file-upload.svg"
import { useDispatch } from 'react-redux';
import { getSoftware } from './../../redux/slices/softwareSlice/softwareSlice';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}


export default function ModalVersion({
  opened,
  link,
  setOpened,
  versions,
}: any) {

  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [version, setVersion] = React.useState("");
  const [path, setPath] = React.useState("");
  const [uploaded, setUploaded] = React.useState(0)
  const [downloadStart, setDownloadStart] = React.useState(false)
  const [downEnd, setDownEnd] = React.useState(false);

  React.useEffect(()=>{
    versions && setVersion(versions[0]?.path);
  }, [versions])

  React.useEffect(() => {
    setOpen(opened);
  }, [opened]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const notify = () =>
    toast.success("Telechargement terminer, vous pouvez desormais lancer l'installation depuis le gestionnaire de fichier", {
      position: "bottom-right",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleClose = () => {
    setOpen(false);
    setOpened(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    notify();
  };

  const handleChange = (event: any) => {
    setVersion(event.target.value);
  };

  const downloadRef = React.useRef();

  const handleDownload = (e: any) => {
    e.preventDefault();

    setPath((paths.path + "/" + version));
    setDownloadStart(true)

    axios({
      url: paths.path + "/" + version,
      method: "GET",
      responseType: "blob",
      onDownloadProgress : (progressEvent: any) => {
       const loaded = progressEvent.loaded;
       const total =
         progressEvent.srcElement.getResponseHeader("Content-Length");
       const percent = Math.floor((loaded * 100) / total);
       setUploaded(percent);
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      downloadRef?.current?.setAttribute("href", url);
      downloadRef?.current?.setAttribute("download", version);
      downloadRef?.current?.click();
      setDownEnd(true)
      notify()

      const timer = setTimeout(()=>{
        dispatch(getSoftware())
        clearTimeout(timer)
      }, 9000)
    });
  };

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="Veillez selectionner une version propre à votre appareil"
        onClick={handleClickOpen}
      >
        <MagnetDownloadLink to="" variant={"smBtn"}>
          Telecharger
        </MagnetDownloadLink>
      </IconButton>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"xs"}
        fullWidth
      >
        <DialogTitle id="responsive-dialog-title" className="center">
          {!downloadStart ? (
            <span>
              Vous êtes sur le point de demarrer le téléchargement de cinaf
            </span>
          ) : (
            <span>Telechargement</span>
          )}
        </DialogTitle>
        <Divider />
        <DialogContent>
          {!downEnd ? (
            <div>
              {!downloadStart ? (
                <div>
                  <DialogContentText>
                    Veillez selectionner la version propisse pour votre appareil
                  </DialogContentText>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Version
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={version}
                        label="version"
                        onChange={handleChange}
                        fullWidth
                      >
                        {versions?.map((ver: any, index: number) => (
                          <MenuItem
                            key={`${ver.id}`}
                            value={ver.path}
                            onChange={(e: any) => setVersion(e.target.value)}
                          >
                            Version {ver.versionTag}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <a
                      href=""
                      className="startDownload"
                      onClick={handleDownload}
                    >
                      <span>Demarrer le telechargement</span>
                    </a>
                  </Box>
                </div>
              ) : (
                <div>
                  <Box sx={{ width: "100%" }} className="downStatus">
                    <br />
                    <CircularProgressWithLabel value={uploaded} />
                  </Box>
                  <br />
                  <LinearProgress variant="determinate" value={uploaded} />
                  <Box sx={{ width: "100%" }} className="downStatus">
                    <br />
                    <h2 className="h2">Telechargement en cour...</h2>
                  </Box>
                </div>
              )}
            </div>
          ) : (
            <div className="endSucc">
              <img src={downSucc} />
              <h2 className="h2">Telechargement terminer</h2>
            </div>
          )}
        </DialogContent>
        <Divider />
        <DialogActions>
          <a href={path} ref={downloadRef} download={version}></a>
          <Button onClick={handleClose} autoFocus>
            Minimiser
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
