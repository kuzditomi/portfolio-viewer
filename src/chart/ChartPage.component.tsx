import React, { useState } from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { Typography, IconButton, FormControlLabel, Switch } from "@material-ui/core";
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

  const [showMainStrategyOnly, setShowMainStrategyOnly] = useState(true);

  return <>
    <Typography variant="h6" component="h2" color="primary">
      <IconButton className={classes.backIcon} onClick={() => { closeChart() }}>
        <ArrowBackIcon />
      </IconButton>
      Chart
    </Typography>
    <FormControlLabel
      control={
        <Switch
          checked={showMainStrategyOnly}
          onChange={event => setShowMainStrategyOnly(event.target.checked)}
          value="checkedB"
          color="primary"
        />
      }
      label="Hide legs"
    />
    <ChartComponent chartData={chartData} showMainStrategyOnly={showMainStrategyOnly} />
  </>
};

export default withStyles(styles)(ChartPageComponent);
