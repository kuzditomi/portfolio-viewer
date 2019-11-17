import React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import { Theme, Container, Grid, Paper } from "@material-ui/core";
import PortfolioSummary from "./portfolio/PortfolioSummary.container";
import Filters from "./filters/Filters.component";
import ImportHistory from "./import/ImportHistory.container";
import Import from "./import/Import.container";
import { Report } from "./models";
import PortfolioTableComponent from "./portfolio/table/PortfolioTable.component";

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

export interface MainStateProps {
  report?: Report;
}

const MainComponent: React.FC<MainStateProps & WithStyles<typeof styles>> = ({
  report,
  classes
}) => {
  const renderPortfolio = () => {
    if (!report) {
      return null;
    }

    return (
      <>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <PortfolioSummary />
              </Grid>
              <Grid item xs={12} md={4}>
                <Filters />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PortfolioTableComponent report={report} />
          </Paper>
        </Grid>
      </>
    );
  };
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
          {renderPortfolio()}
        </Grid>
      </Container>
    </main>
  );
};

export default withStyles(styles)(MainComponent);