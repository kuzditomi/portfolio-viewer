import React from "react";
import { HistoryService } from "./HistoryService";
import { Report } from "../models";
import { ReportParser } from '../import/ReportParser';

let historyService: HistoryService;
let reportParser: ReportParser;

export interface HistoryProps {
  onImport(report: Report): void;
}

const History: React.FC<HistoryProps> = ({ onImport }) => {
  if (!historyService) {
    historyService = new HistoryService();
  }

  const savedRawImportKeys = historyService.GetRawImportKeys();

  const importReportWithKey = (key: string) => {
    const rawImport = historyService.GetRawImport(key);

    if(!reportParser){
        reportParser = new ReportParser()
    }

    const report = reportParser.ParseRawData(rawImport);

    onImport(report);
  };

  return (
    <div className="history">
      <ul>
        {savedRawImportKeys.map(key => (
          <li key={key}>
            <button onClick={() => importReportWithKey(key)}>
              {key}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
