import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const defaultTheme = createMuiTheme();

const AppThemeComponent: React.FC = ({children}) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
);

export default AppThemeComponent;
