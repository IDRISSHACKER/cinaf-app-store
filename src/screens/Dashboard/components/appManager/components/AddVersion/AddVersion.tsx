// @ts-nocheck
import * as React from "react";
import { ManageHistoryTwoTone } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { Divider, IconButton } from "@mui/material";
import { CopyAllTwoTone, CopyAllOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import { DialogContentText, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { LoadingButton } from "@mui/lab";
import CardContent from "@mui/material/CardContent";
import { ReactComponent as UploadElement } from "./file-upload.svg";
import imgUpload from "./upload.png";
import apk from "./apk.png"
import ios from "./iOS.jpg"
import success from "./success.jpg"
import "./AddVersion.scss";
import { CloudUploadTwoTone } from '@mui/icons-material';
import paths from './../../../../../../const/path';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSoftware } from './../../../../../../redux/slices/softwareSlice/softwareSlice';

export default function AddVersion({ opened, setOpened, post, props }: any) {
  const dispatch = useDispatch()

  const [saving, setSaving] = React.useState(false)
  const [versionTyped, setVersionTyped] = React.useState()
  const [next, setNext] = React.useState();
  const [file, setFile] = React.useState();
  const [fileSelected, setFileSelected] = React.useState(false);
  const [defaultThumb, setDefaultThumb] = React.useState(imgUpload);
  const [thumb, setThumb] = React.useState(defaultThumb);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [version, setVersion] = React.useState("");
  const [uploaded, setUploaded] = React.useState(0)
  const [end, setEnd] = React.useState(false)

  const acceptExt = [".apk", ".ipa"];

  React.useEffect(() => {
    setOpen(opened);
  }, [opened]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const notify = () =>
    toast.success("La nouvelle version de l'application à été ajouter avec success", {
      position: "bottom-right",
      autoClose: 5000,
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
    navigator.clipboard.writeText("");
    notify();
  };

  const handleChange = (event: any) => {
    setVersion(event.target.value);
  };

  const handleBinary = (event: any) => {
    const cfile = event.target.files[0];

    setFile(cfile);
    setFileSelected(true);

    if (cfile.type === "application/vnd.android.package-archive"){
        setThumb(apk)
    }else{
        setThumb(ios)
    }
      console.log(cfile);
  };

  const handleNext = ()=>{
    setNext(true)
  }

  const handleVersion = (e:any)=>{
    setVersion(e.target.value);

    if (e.target.value.length > 0) {
      setVersionTyped(true);
    } else {
      setVersionTyped(false);
    }
  }

  const handleSave = ()=>{
    setSaving(true)

    const formData = new FormData()
    formData.append("software", post?.id)
    formData.append("version", version);
    formData.append("file", file);

    
    const config = {
      onUploadProgress: (progressEvent: any) => {
        const { loaded, total } = progressEvent;
        const percent = Math.floor((loaded * 100) / total);
        setUploaded(percent);
      },
    };

    axios.post(paths.api_url + "/version", formData, config).then(res=>{
        setEnd(true)
        console.log(res.data)
        notify()
        const timer = setTimeout(()=>{
          dispatch(getSoftware());
          clearTimeout(timer)
        }, 5000)
    }).catch(err => console.log(err))
  }


  return (
    <div>
      <Button
        onClick={handleClickOpen}
        startIcon={<ManageHistoryTwoTone />}
        variant={"contained"}
      >
        Ajouter une version
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"lg"}
        fullWidth
      >
        <DialogTitle id="responsive-dialog-title">
          {!saving ? (
            <div>
              <h1 className="vh1">{`Selectionner la nouvelle version de l'appli ${post?.support[0].title}`}</h1>
            </div>
          ) : (
            <div>
              <h1 className="vh1">
                {!end ? (
                  <span>Televersement de l'app en cour</span>
                ) : (
                  <span>Televersement terminer</span>
                )}
              </h1>
            </div>
          )}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <UploadElement className="illus-upload" />
            </Grid>
            <Grid item md={7}>
              <div className="addSection">
                <input
                  type="file"
                  id="binary"
                  className="nvisible"
                  accept=".apk, .ipa"
                  onChange={handleBinary}
                />
                <label htmlFor="binary">
                  <Card className="uploadZone">
                    <CardContent>
                      <Box sx={{ minWidth: 120 }}>
                        {saving ? (
                          <div>
                            {!end ? (
                              <Box
                                sx={{ display: "flex" }}
                                className="uploadLoad"
                              >
                                <CircularProgress />
                                <h2 className="h2">{uploaded}%</h2>
                              </Box>
                            ) : (
                              <Box
                                sx={{ display: "flex" }}
                                className="upSuccess"
                              >
                                <img src={success} />
                                <h2 className="vh2">
                                  La nouvelle version a été ajouter avec success
                                  :-{")"}
                                </h2>
                              </Box>
                            )}
                          </div>
                        ) : (
                          <div className="uploadThumb">
                            <div className="uploadThumbContent">
                              <img src={`${thumb}`} className="uploadApercu" />
                              {!fileSelected ? (
                                <h2 className="vh2">
                                  Selectionner un fichier au format apk | ipa
                                </h2>
                              ) : (
                                <div>
                                  <h2 className="vh2"> {file?.name} </h2>
                                  {next && (
                                    <div>
                                      {!saving && (
                                        <TextField
                                          type="number"
                                          fullWidth
                                          autoFocus
                                          label="Entrez la version de l'app"
                                          value={version}
                                          onChange={handleVersion}
                                        />
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </label>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          {!next ? (
            <Button
              variant="contained"
              disabled={!fileSelected}
              onClick={handleNext}
            >
              suivant
            </Button>
          ) : (
            <div>
              {!saving ? (
                <Button
                  variant="contained"
                  disabled={!versionTyped}
                  onClick={handleSave}
                >
                  Ajouter la version
                </Button>
              ) : (
                <div>
                  {!end && <LoadingButton
                    loading
                    loadingPosition="start"
                    startIcon={<CloudUploadTwoTone />}
                    variant="outlined"
                  >
                    savegarde de {file?.name} en cour...
                  </LoadingButton>}
                </div>
              )}
            </div>
          )}
          <Button onClick={handleClose} autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
