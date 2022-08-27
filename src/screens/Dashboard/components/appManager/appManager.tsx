// @ts-nocheck
import React from "react"
import { Card, CardContent, CardHeader, Typography, IconButton, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ManageHistoryTwoTone } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import AddVersion from "./components/AddVersion/AddVersion";

function AppManager({soft}:any) {
    return (
      <Card>
        <CardHeader title="Gestionnaire d'applications" />
        <CardContent>
          {soft.loading ? (
            <CircularProgress disableShrink />
          ) : (
            <List sx={{ width: "90%", bgcolor: "background.paper" }}>
              {soft.software.map((app: any, index:number) => (
                <VItem app={app} key={`${index}`} />
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    );
}

function VItem({app}:any){

  const [opened, setOpened] = React.useState(false)

  const handleOpen = (openState:boolean)=>{
    setOpened(openState)
  }

  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <AddVersion opened={opened} setOpened={handleOpen} post={app} />
      }
    >
      <ListItemAvatar>
        <Avatar alt="CINAF" src="https://vod.cinaf.tv/favicon.ico" />
      </ListItemAvatar>
      <ListItemText
        primary={app.title}
        secondary={
          <React.Fragment>
            {`Download : ${app.downloaded} | Plateforme :  ${app.support[0].title}`}
          </React.Fragment>
        }
      />
      <Divider variant="inset" component="hr" />
    </ListItem>
  );
}

export default AppManager;
