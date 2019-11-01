import React from "react";
import "./App.scss";
import Portfolio from "./portfolio/Portfolio.container";
import ImportHistory from "./import/ImportHistory.container";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <header>IBKR report viewer</header>
      <div className="App">
        <ImportHistory />
        {/* <Import onImport={setReport} /> */}

        <Portfolio/>
      </div>
    </Provider>
  );
};

export default App;
