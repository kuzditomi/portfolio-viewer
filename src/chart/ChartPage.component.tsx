import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { TradeGroup } from '../models';
import ChartComponent from "./Chart.component";

const styles = createStyles({
  backIcon: {
    padding: 5
  }
});

export interface ChartPageStateProps {
  chartData?: TradeGroup;
}

export interface ChartPageDispatchProps {
  closeChart: () => void;
}

const ChartPageComponent: React.FC<ChartPageStateProps & ChartPageDispatchProps & WithStyles<typeof styles>> = ({ chartData, closeChart, classes }) => {
  if (!chartData) {
    throw Error('No chart data to show');
  }

  return <>
    <Typography variant="h6" component="h2" color="primary">
      <IconButton className={classes.backIcon} onClick={() => { closeChart() }}>
        <ArrowBackIcon />
      </IconButton>
      Chart
    </Typography>
    <ChartComponent chartData={chartData}/>
  </>
};

export default withStyles(styles)(ChartPageComponent);
