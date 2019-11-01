import React, { useState } from "react";
import "./Import.scss";

export interface ImportDispatchProps {
  importFile(file: File): void;
}

const Import: React.FC<ImportDispatchProps> = ({ importFile }) => {
  const [file, setFile] = useState<FileList | null>();

  const onImport = () => {
    if(!file || file.length !== 1){
      alert('please provide a single file!');
      return;
    }

    importFile(file[0]);
  };

  return (
    <div className="import">
      <input type="file" onChange={e => setFile(e.target.files)} />
      <button onClick={() => onImport()}>IMPORT!</button>
    </div>
  );
};

export default Import;
