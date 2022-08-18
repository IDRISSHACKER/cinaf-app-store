import React from "react"
import { Card, CardContent, CardHeader, Typography, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ManageHistoryTwoTone } from "@mui/icons-material";

function AppManager() {
    return (
      <Card>
        <CardHeader title="Gestionnaire d'applications" />
        <CardContent>
          <div>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  <IconButton edge="end" aria-label="manage">
                    <ManageHistoryTwoTone />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar alt="CINAF" src="favicon.ico" />
                </ListItemAvatar>
                <ListItemText
                  primary="CINAF"
                  secondary={
                    <React.Fragment>
                      {"Download : 10 | Plateforme : Android"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </div>
        </CardContent>
      </Card>
    );
}

export default AppManager;
