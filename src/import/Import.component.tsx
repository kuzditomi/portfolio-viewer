import React, { useState } from "react";
import "./Import.scss";

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
    <div className="import flex flex-column">
      <button onClick={() => onImportExample()}>Load example</button>
      <div className="flex flex-row">
        <input type="file" onChange={e => setFile(e.target.files)} />
        <button onClick={() => onImport()}>IMPORT!</button>
      </div>
    </div>
  );
};

export default Import;
