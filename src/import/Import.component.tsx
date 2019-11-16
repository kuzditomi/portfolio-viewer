import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";

export interface ImportDispatchProps {
  importFile(file: File): void;
}

const Import: React.FC<ImportDispatchProps> = ({ importFile }) => {
  const [file, setFile] = useState<FileList | null>();

  const onImport = () => {
    if (!file || file.length !== 1) {
      alert("please provide a single file!");
      return;
    }

    importFile(file[0]);
  };

  const onImportExample = () => {
    const exampleFileUrl = "/example.xml";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", exampleFileUrl);
    xhr.responseType = "blob";
    xhr.onload = function() {
      importFile(xhr.response);
    };
    xhr.send();
  };

  return (
    <Grid>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Import flex query
      </Typography>
      <button onClick={() => onImportExample()}>Load example</button>
      <div className="flex flex-row">
        <input type="file" onChange={e => setFile(e.target.files)} />
        <button onClick={() => onImport()}>IMPORT!</button>
      </div>
    </Grid>
  );
};

export default Import;
