import React from "react";
import "./App.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderComponent from "./Header.component";
import AppThemeComponent from "./AppTheme.component";
import MainComponent from "./Main.component";
import store from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => (
  <AppThemeComponent>
    <Provider store={store}>
      <div className="app">
        <CssBaseline />
        <HeaderComponent />
        <MainComponent />
      </div>
    </Provider>
  </AppThemeComponent>
);

export default App;
