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

export interface PriceColumnProps {
  price: number;
}

const getPriceString = (price: number) => {
  return price < 0 ? (price * -1).toFixed(2) : price.toFixed(2);
};

const PriceColumn: React.FC<PriceColumnProps & WithStyles<typeof styles>> = ({
  price,
  classes
}) => {
  return (
    <TableCell className={price > 0 ? classes.loss : classes.win}>
      {getPriceString(price)}
    </TableCell>
  );
};

export default withStyles(styles)(PriceColumn);
