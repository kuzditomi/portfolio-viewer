import React from "react";
import {
  TableCell,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const colorDepth = 700;
const styles = createStyles({
  win: {
    background: green[colorDepth],
    color: "white"
  },
  loss: {
    background: red[colorDepth],
    color: "white"
  }
});

export interface PLColumnProps {
  pl: number;
}

const getPLString = (pl: number) => {
  return pl < 0 ? (pl * -1).toFixed(2) : pl.toFixed(2);
};

const PLColumn: React.FC<PLColumnProps & WithStyles<typeof styles>> = ({
  pl,
  classes
}) => {
  return (
    <TableCell className={pl > 0 ? classes.loss : classes.win}>
      {getPLString(pl)}
    </TableCell>
  );
};

export default withStyles(styles)(PLColumn);
