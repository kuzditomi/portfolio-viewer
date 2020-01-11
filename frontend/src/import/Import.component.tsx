import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import FileUploadComponent from "./FileUpload.component";
import LoadingOverlayComponent from "../LoadingOverlay.component";

export interface ImportStateProps {
  isPortfolioLoading: boolean;
}

export interface ImportDispatchProps {
  importFile(file: File): void;
}

const Import: React.FC<ImportStateProps & ImportDispatchProps> = ({ importFile, isPortfolioLoading }) => {
  const importFileFromPath = (filepath: string) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", filepath);
    xhr.responseType = "blob";
    xhr.onload = function () {
      importFile(xhr.response);
    };
    xhr.send();
  }

  const onImportMock = () => {
    importFileFromPath("mock.xml");
  };

  return (
    <>
      <LoadingOverlayComponent isLoading={isPortfolioLoading}/>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Import flex query
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FileUploadComponent upload={importFile} disabled={isPortfolioLoading}/>
        </Grid>
        <Grid item xs={12}>
          If you have no flex queries exported yet:&nbsp;
          <Button
            onClick={() => onImportMock()}
            disabled={isPortfolioLoading}
            color="primary"
            variant="contained"
          >
            Load mock
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Import;
