import React, { useState } from "react";
import { ReportParser, ReportException } from "./ReportParser";
import { Report } from "./Report";
import "./Report.scss";

let reportParser: ReportParser;

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
      reportParser = new ReportParser();
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