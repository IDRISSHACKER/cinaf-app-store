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
import { DialogContentText } from "@mui/material"
import { MagnetDownloadLink } from "../../screens/Download/DownloadBody/DownloadBody";
import "./ModalVersion.scss"

export default function ModalVersion({ opened, link, setOpened }: any) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [version, setVersion] = React.useState('');

  React.useEffect(() => {
    setOpen(opened);
  }, [opened]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const notify = () =>
    toast.success("Votre téléchargement vient de débuter", {
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
        navigator.clipboard.writeText(link);
        notify();
    };

    const handleChange = (event:any) => {
        setVersion(event.target.value);
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
        <DialogTitle id="responsive-dialog-title">
          {"Vous êtes sur le point de demarrer le téléchargement de cinaf"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Veillez selectionner la version propisse pour votre appareil
          </DialogContentText>
          <br />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Version</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={version}
                label="version"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value={10}>1.6 - dernière version</MenuItem>
                <MenuItem value={20}>1.4</MenuItem>
                <MenuItem value={30}>1.3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <Box sx={{ minWidth: 120 }}>
            <a href="" className="startDownload">
              <span>Demarrer le telechargement</span>
            </a>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

