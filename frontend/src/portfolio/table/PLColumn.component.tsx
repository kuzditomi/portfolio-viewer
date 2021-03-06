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
  const amount = pl * 100;
  return amount < 0 ? (amount * -1).toFixed(2) : amount.toFixed(2);
};

const PLColumn: React.FC<PLColumnProps & WithStyles<typeof styles>> = ({
  pl,
  classes
}) => {
  return (
    <TableCell
      align="right"
      className={pl > 0 ? classes.win : pl < 0 ? classes.loss : ""}
    >
      {getPLString(pl)} $
    </TableCell>
  );
};

export default withStyles(styles)(PLColumn);
