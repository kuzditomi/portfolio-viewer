import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from "@material-ui/core";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import DeleteIcon from "@material-ui/icons/Delete";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import red from "@material-ui/core/colors/red";

const styles = createStyles({
  delete: {
    "&:hover": {
      color: red[700]
    }
  }
});

export interface ImportHistoryStateProps {
  history: string[];
}

export interface ImportHistoryDispatchProps {
  importFromHistory(reportKey: string): void;
  deleteFromHistory(reportKey: string): void;
  loadHistory(): void;
}

const ImportHistory: React.FC<ImportHistoryStateProps &
  ImportHistoryDispatchProps &
  WithStyles<typeof styles>> = ({
  history,
  importFromHistory,
  loadHistory,
  deleteFromHistory,
  classes
}) => {
  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  return (
    <Grid>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Imported reports
      </Typography>
      <List component="nav" aria-label="Main mailbox folders">
        {history.map(key => (
          <ListItem button onClick={() => importFromHistory(key)} key={key}>
            <ListItemIcon>
              <FolderOpenIcon />
            </ListItemIcon>
            <ListItemText primary={key} />
            <IconButton
              className={classes.delete}
              onClick={event => {
                deleteFromHistory(key);
                event.stopPropagation();
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default withStyles(styles)(ImportHistory);
