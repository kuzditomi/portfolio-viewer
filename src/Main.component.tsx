import React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import { Theme, Container, Grid, Paper } from "@material-ui/core";
import Portfolio from "./portfolio/Portfolio.container";
import ImportHistory from "./import/ImportHistory.container";
import Import from "./import/Import.container";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column"
    }
  });

const MainComponent: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <ImportHistory />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Import />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Portfolio />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default withStyles(styles)(MainComponent);
