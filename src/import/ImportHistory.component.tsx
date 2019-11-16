import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";

export interface ImportHistoryStateProps {
  history: string[];
}

export interface ImportHistoryDispatchProps {
  importFromHistory(reportKey: string): void;
  loadHistory(): void;
}

const ImportHistory: React.FC<ImportHistoryStateProps &
  ImportHistoryDispatchProps> = ({
  history,
  importFromHistory,
  loadHistory
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
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary={key} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default ImportHistory;
