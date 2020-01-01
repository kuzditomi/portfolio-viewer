import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const HeaderComponent: React.FC = () => (
  <AppBar position="absolute">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        IBKR portfolio viewer
      </Typography>
    </Toolbar>
  </AppBar>
);

export default HeaderComponent;
