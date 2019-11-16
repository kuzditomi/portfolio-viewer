import React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import { Theme, Container } from "@material-ui/core";
import Portfolio from "./portfolio/Portfolio.container";
import ImportHistory from "./import/ImportHistory.container";
import { Provider } from "react-redux";
import store from "./store";
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
    }
  });

const MainComponent: React.FC<WithStyles<typeof styles>> = ({classes}) => (
    <main className={classes.content}>
    <div className={classes.appBarSpacer} />
    <Container maxWidth="lg" className={classes.container}>
      <Provider store={store}>
        <div className="App">
          <div className="flex flex-row">
            <ImportHistory />
            <Import />
          </div>
          <Portfolio />
        </div>
      </Provider>
    </Container>
  </main>
);

export default withStyles(styles)(MainComponent);
