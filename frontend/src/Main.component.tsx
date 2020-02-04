import React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import { Theme, Container, Grid, Paper } from "@material-ui/core";
import PortfolioSummary from "./portfolio/PortfolioSummary.container";
import Filters from "./filters/Filters.component";
import Import from "./import/Import.container";
import ResetAccount from "./reset-account/ResetAccount.container";
import { Report } from "./models";
import PortfolioTableComponent from "./portfolio/table/PortfolioTable.component";
import ChartPage from "./chart/ChartPage.container";
import SwitcherComponent from "./switcher/Switcher.component";
import SwitcherItemComponent from "./switcher/SwitcherItem.component";
import { ColumnsType } from './options/column-picker/models';
import Options from "./options/Options.component";

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
      flexDirection: "column",
      position: "relative"
    }
  });

export interface MainStateProps {
  report?: Report;
  isChartOpen: boolean;
  columnsToShow: ColumnsType[]
}

export interface MainDispatchProps {
  loadReport(): void;
}

const MainComponent: React.FC<MainStateProps & MainDispatchProps & WithStyles<typeof styles>> = ({
  report,
  isChartOpen,
  columnsToShow,
  loadReport,
  classes
}) => {
  if (!report) {
    loadReport();
    return null;
  }

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
              <Grid item xs={12} md={4}>
                <Options />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
            <SwitcherComponent activeKey={isChartOpen ? 'chart' : 'table'}>
              <SwitcherItemComponent switcherKey="table">
                <PortfolioTableComponent report={report} columnsToShow={columnsToShow} />
              </SwitcherItemComponent>
              <SwitcherItemComponent switcherKey="chart">
                {isChartOpen ? <ChartPage /> : null}
              </SwitcherItemComponent>
            </SwitcherComponent>
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
          <Grid item xs={12} md={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Import/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ResetAccount/>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {renderPortfolio()}
        </Grid>
      </Container>
    </main>
  );
};

export default withStyles(styles)(MainComponent);
