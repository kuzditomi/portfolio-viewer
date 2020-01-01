import React, { useState } from "react";
import {
  Button,
  WithStyles,
  createStyles,
  withStyles,
  TextField
} from "@material-ui/core";

const styles = () =>
  createStyles({
    input: {
      display: "none"
    }
  });

export interface FileUploadProps {
  upload(file: File): void;
}

const FileUploadComponent: React.FC<FileUploadProps &
  WithStyles<typeof styles>> = ({ upload, classes }) => {
  const [file, setFile] = useState<FileList | null>();

  const onImport = () => {
    if (!file || file.length !== 1) {
      alert("please provide a single file!");
      return;
    }

    upload(file[0]);
  };

  return (
    <>
      <input
        className={classes.input}
        id="raised-button-file"
        type="file"
        onChange={e => setFile(e.target.files)}
      />
      <TextField
        value={file && file.length ? file[0].name : undefined}
        placeholder="No file chosen"
      />

      <label htmlFor="raised-button-file">
        <Button component="span">Select file</Button>
      </label>
      {file && file.length ? (
        <Button onClick={() => onImport()} color="primary" variant="contained">
          Import
        </Button>
      ) : null}
    </>
  );
};

export default withStyles(styles)(FileUploadComponent);
