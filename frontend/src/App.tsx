import React from "react";
import "./App.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderComponent from "./Header.component";
import AppThemeComponent from "./AppTheme.component";
import Main from "./Main.container";
import store from "./store";
import { Provider } from "react-redux";
import AuthenticationWrapperComponent from "./authentication/AuthenticationWrapper.component";

const App: React.FC = () => (
  <AppThemeComponent>
    <Provider store={store}>
      <div className="app">
        <CssBaseline />
        <HeaderComponent />
        <AuthenticationWrapperComponent>
          <Main />
        </AuthenticationWrapperComponent>
      </div>
    </Provider>
  </AppThemeComponent>
);

export default App;
