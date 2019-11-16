import React from "react";
import "./App.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderComponent from "./Header.component";
import AppThemeComponent from "./AppTheme.component";
import MainComponent from "./Main.component";

const App: React.FC = () => (
  <AppThemeComponent>
    <div className="app">
      <CssBaseline />
      <HeaderComponent />
      <MainComponent />
    </div>
  </AppThemeComponent>
);

export default App;
