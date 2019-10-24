import React, { useState } from 'react';
import './App.scss';
import Import from './import/Import';
import { Report } from './import/Report';

const App: React.FC = () => {
  const [report, setReport] = useState<Optional<Report>>(undefined);

  return (
    <div className="App">
     HELLO
     <Import onImport={(report)=>{
       setReport(report);
     }}/>

     { report && report.name }
    </div>
  );
}

export default App;