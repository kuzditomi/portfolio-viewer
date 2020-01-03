import React from "react";
import { AppBar, Toolbar, Typography, createStyles, WithStyles, withStyles } from "@material-ui/core";
import UserWelcome from './authentication/UserWelcome.container';

const styles = () =>
  createStyles({
    title: {
      flexGrow: 1
    },
  });

const HeaderComponent: React.FC<WithStyles<typeof styles>> = ({ classes }) => (
  <AppBar position="absolute">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        IBKR portfolio viewer
      </Typography>
      <UserWelcome />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(HeaderComponent);
