import React from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import clsx from 'clsx';

const colorDepth = 700;
const styles = createStyles({
  badge: {
    borderRadius: 3,
    padding: '2px 5px',
    marginRight: 5
  },
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

const PriceColumn: React.FC<PriceColumnProps & WithStyles<typeof styles>> = ({
  price,
  classes
}) => {
  return (
    <>
      <span className={clsx(classes.badge, price > 0 ? classes.loss : classes.win)}>
        {price < 0 ? "C" : "D"}
      </span>
      <span>{price < 0 ? (price * -1).toFixed(2) : price.toFixed(2)}</span>
    </>
  );
};

export default withStyles(styles)(PriceColumn);
