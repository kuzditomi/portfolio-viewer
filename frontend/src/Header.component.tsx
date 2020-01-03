import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import UserWelcome from './authentication/UserWelcome.container';

const HeaderComponent: React.FC = () => (
  <AppBar position="absolute">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        IBKR portfolio viewer
      </Typography>
      <UserWelcome/>
    </Toolbar>
  </AppBar>
);

export default HeaderComponent;
