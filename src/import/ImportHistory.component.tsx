import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

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
      <ul>
        {history.map(key => (
          <li key={key}>
            <button onClick={() => importFromHistory(key)}>{key}</button>
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default ImportHistory;
