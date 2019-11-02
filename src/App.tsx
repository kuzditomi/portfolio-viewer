import React from "react";
import "./App.scss";
import Portfolio from "./portfolio/Portfolio.container";
import ImportHistory from "./import/ImportHistory.container";
import { Provider } from "react-redux";
import store from "./store";
import Import from "./import/Import.container";
import './flex.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <header>IBKR report viewer</header>
      <div className="App">
        <ImportHistory />
        <Import />
        <Portfolio/>
      </div>
    </Provider>
  );
};

export default App;
