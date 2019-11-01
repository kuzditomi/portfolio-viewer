import React, { useState } from "react";
import { ReportParserService, ReportException } from "./ReportParser.service";
import { Report } from "../models";
import "./Import.scss";
import { ImportHistoryService } from './ImportHistory.service';

let reportParser: ReportParserService;
let historyService: ImportHistoryService;

export interface ImportProps {
  onImport(report: Report): void;
}

const Import: React.FC<ImportProps> = ({ onImport }) => {
  const [report, setReport] = useState<Optional<Report>>(undefined);
  const [error, setError] = useState<string>("Please provide a file!");
  const [isDirty, setIsDirty] = useState(false);

  const onFileChange = async (files: FileList | null) => {
    if (!files || !files.length) {
      setReport(undefined);
      setError("Please provide a report file!");
      return;
    }

    if (!reportParser) {
      reportParser = new ReportParserService();
    }

    try {
      const report = await reportParser.Parse(files[0]);
      setReport(report);
      setError("");
    } catch (e) {
      const error = e as ReportException;

      setReport(undefined);
      setError(error.message);
    }
  };

  const renderError = () => {
    if (!isDirty || !error) {
      return null;
    }

    return <div className="error">{error}</div>;
  };

  const importFiles = () => {
    if (!report) {
      console.error("Something went wrong, report should not be undefined...");
      return;
    }

    if(!historyService){
      historyService = new ImportHistoryService();
    }
    historyService.SaveRawImport(reportParser.GetRawImport());
    onImport(report);
  };

  return (
    <div className="import">
      <input
        type="file"
        onBlur={() => setIsDirty(true)}
        onChange={e => onFileChange(e.target.files)}
      />
      <button onClick={() => importFiles()} disabled={error ? true : undefined}>
        IMPORT!
      </button>
      {renderError()}
    </div>
  );
};

export default Import;
