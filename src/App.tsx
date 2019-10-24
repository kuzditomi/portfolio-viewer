import React, { useState } from "react";
import "./App.scss";
import Import from "./import/Import";
import { Report } from "./models";
import Display from "./display/Display";

const App: React.FC = () => {
  const [report, setReport] = useState<Optional<Report>>(undefined);

  return (
    <>
      <header>IBKR report viewer</header>
      <div className="App">
        <Import
          onImport={report => {
            setReport(report);
          }}
        />

        {report && <Display report={report} />}
      </div>
    </>
  );
};

export default App;
