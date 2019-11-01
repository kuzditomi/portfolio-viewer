import React, { useEffect } from "react";

export interface ImportHistoryStateProps {
  history: string[];
}

export interface ImportHistoryDispatchProps {
  importFromHistory(reportKey: string): void;
  loadHistory(): void;
}

const ImportHistory: React.FC<
  ImportHistoryStateProps & ImportHistoryDispatchProps
> = ({ history, importFromHistory, loadHistory }) => {
  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  return (
    <div className="history">
      <ul>
        {history.map(key => (
          <li key={key}>
            <button onClick={() => importFromHistory(key)}>{key}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportHistory;
