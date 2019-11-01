import React from "react";
import { ImportHistoryService } from "./ImportHistory.service";

let historyService: ImportHistoryService;

export interface ImportHistoryDispatchProps {
  onImport(reportKey: string):void;
}

const ImportHistory: React.FC<ImportHistoryDispatchProps> = ({ onImport }) => {
  if (!historyService) {
    historyService = new ImportHistoryService();
  }

  const savedRawImportKeys = historyService.GetRawImportKeys();

  return (
    <div className="history">
      <ul>
        {savedRawImportKeys.map(key => (
          <li key={key}>
            <button onClick={() =>  onImport(key)}>{key}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportHistory;
