import { TradeGroup } from "../../models";
import React, { useState } from "react";
import { columns } from "../models";
import TradeRow from "./TradeRow.component";
import PriceColumn from "./PriceColumn.component";
import { TableRow, TableCell, IconButton, Theme } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import clsx from 'clsx';
import { grey } from "@material-ui/core/colors";
import PLColumn from "./PLColumn.component";

const styles = (theme: Theme) =>
  createStyles({
    expand: {
      padding: 0,
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    groupRow: {
      background: grey[300]
    }
  });

export interface TradeGroupRowProps {
  tradeGroup: TradeGroup;
}

interface CollapseableTradeGroup extends TradeGroup {
  isOpen: boolean;
}

const getRemainingDays = (date: Date): string => {
  const now = new Date();

  const remainingDays = Math.floor(
    (Number(date) - Number(now)) / 1000 / 60 / 60 / 24
  );

  return remainingDays < 0 ? "EXPIRED" : remainingDays.toString();
};

const cell = (key: string, child: React.ReactNode) => (
  <TableCell key={key} className={key}>
    {child}
  </TableCell>
);
const empty = (key: string) => (_tradeGroup: TradeGroup) => cell(key, "");

const TradeGroupRow: React.FC<TradeGroupRowProps &
  WithStyles<typeof styles>> = ({ tradeGroup, classes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const columnDisplayers: {
    [key in columns]: (tradeGroup: CollapseableTradeGroup) => React.ReactNode;
  } = {
    action: tradeGroup =>
      cell(
        "action",
        <IconButton
          aria-label="share"
          onClick={() => toggleIsOpen()}
          className={clsx(classes.expand, {
            [classes.expandOpen]: tradeGroup.isOpen
          })}
        >
          <ExpandMoreIcon />
        </IconButton>
      ),
    underlying: tradeGroup => cell("underlying", tradeGroup.underlying),
    optionType: empty("optionType"),
    strikePrice: empty("strikePrice"),
    position: empty("position"),
    price: tradeGroup => (
      <PriceColumn
        key={"price"}
        price={tradeGroup.trades.reduce(
          (sum, trade) => (sum += trade.tradePrice),
          0
        )}
      />
    ),
    pl: tradeGroup => (
      <PLColumn
        key={"pl"}
        pl={tradeGroup.pl}
      />
    ),
    tradeDate: empty('tradeDate'),
    expiration: tradeGroup =>
      cell("expiration", tradeGroup.expiration.toLocaleDateString()),
    remainingDays: tradeGroup =>
      cell("remainingDays", getRemainingDays(tradeGroup.expiration))
  };

  const group: CollapseableTradeGroup = { ...tradeGroup, isOpen };

  return (
    <>
      <TableRow className={classes.groupRow}>
        {columns.map(column => columnDisplayers[column](group))}
      </TableRow>
      {isOpen
        ? tradeGroup.trades.map((trade, i) => (
            <TradeRow trade={trade} key={i} />
          ))
        : null}
    </>
  );
};

export default withStyles(styles)(TradeGroupRow);
