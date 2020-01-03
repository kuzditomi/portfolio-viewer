import React from "react";
import "./App.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderComponent from "./Header.component";
import AppThemeComponent from "./AppTheme.component";
import Main from "./Main.container";
import store from "./store";
import { Provider } from "react-redux";
import AuthenticationWrapper from "./authentication/AuthenticationWrapper.container";

const App: React.FC = () => (
  <AppThemeComponent>
    <Provider store={store}>
      <div className="app">
        <CssBaseline />
        <HeaderComponent />
        <AuthenticationWrapper>
          <Main />
        </AuthenticationWrapper>
      </div>
    </Provider>
  </AppThemeComponent>
);

export default App;
