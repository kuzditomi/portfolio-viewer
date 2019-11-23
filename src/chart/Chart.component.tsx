import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { TradeGroup } from '../models';

const styles = createStyles({
  backIcon: {
    padding: 5
  }
});

export interface ChartStateProps {
  chartData?: TradeGroup;
}

export interface ChartDispatchProps {
  closeChart: () => void;
}

const ChartComponent: React.FC<ChartStateProps & ChartDispatchProps & WithStyles<typeof styles>> = ({ chartData, closeChart, classes }) => {
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
    
  </>
};

export default withStyles(styles)(ChartComponent);
