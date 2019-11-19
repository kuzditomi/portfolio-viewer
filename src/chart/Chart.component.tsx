import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const styles = createStyles({});

const ChartComponent: React.FC<WithStyles<typeof styles>> = () => (
  <>
    <Typography variant="h6" component="h2" color="primary">
      Chart
    </Typography>
  </>
);

export default withStyles(styles)(ChartComponent);
