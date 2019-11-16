import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import FileUploadComponent from "./FileUpload.component";

export interface ImportDispatchProps {
  importFile(file: File): void;
}

const Import: React.FC<ImportDispatchProps> = ({ importFile }) => {
  const onImportExample = () => {
    const exampleFileUrl = "example.xml";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", exampleFileUrl);
    xhr.responseType = "blob";
    xhr.onload = function() {
      importFile(xhr.response);
    };
    xhr.send();
  };

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Import flex query
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FileUploadComponent upload={importFile} />
        </Grid>
        <Grid item xs={12}>
          If you have no flex queries exported yet:&nbsp;
          <Button
            onClick={() => onImportExample()}
            color="primary"
            variant="contained"
          >
            Load example
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Import;
