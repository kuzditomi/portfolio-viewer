import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

const styles = createStyles({});

export interface ChartDispatchProps {
  closeChart: () => void;
}

const ChartComponent: React.FC<ChartDispatchProps & WithStyles<typeof styles>> = ({ closeChart }) => (
  <>
    <Typography variant="h6" component="h2" color="primary">
      Chart
    </Typography>
    <Button onClick={() => { closeChart() }}>Back</Button>
  </>
);

export default withStyles(styles)(ChartComponent);
