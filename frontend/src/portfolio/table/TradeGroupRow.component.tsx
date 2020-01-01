import { TradeGroup } from "../../models";
import React, { useState } from "react";
import { ColumnsType } from "../../column-picker/models";
import TradeRow from "./TradeRow.component";
import PriceColumn from "./PriceColumn.component";
import { TableRow, TableCell, IconButton, Theme } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BarChartIcon from "@material-ui/icons/BarChart";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import clsx from 'clsx';
import { grey, green } from '@material-ui/core/colors';
import PLColumn from "./PLColumn.component";

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      padding: 0,
    },
    expand: {
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
    },
    chartIcon: {
      "&:hover": {
        color: green[700]
      }
    }
  });

export interface TradeGroupRowOwnProps {
  columnsToShow: ColumnsType[];
  tradeGroup: TradeGroup;
}

export interface TradeGroupRowDispatchProps {
  showChart: (tradeGroup: TradeGroup) => void;
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
const empty = (key: string) => () => cell(key, "");

const TradeGroupRow: React.FC<TradeGroupRowOwnProps & TradeGroupRowDispatchProps &
  WithStyles<typeof styles>> = ({ tradeGroup, classes, showChart, columnsToShow }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
      setIsOpen(!isOpen);
    };

    const columnDisplayers: {
      [key in ColumnsType]: (tradeGroup: CollapseableTradeGroup) => React.ReactNode;
    } = {
      action: tradeGroup =>
        cell(
          "action",
          <>
            <IconButton
              title={tradeGroup.isOpen ? "Collapse trades" : "Show trades"}
              onClick={() => toggleIsOpen()}
              className={clsx(classes.icon, classes.expand, {
                [classes.expandOpen]: tradeGroup.isOpen
              })}
            >
              <ExpandMoreIcon />
            </IconButton>
            <IconButton
              title="Draw on chart"
              className={clsx(classes.icon, classes.chartIcon)}
              onClick={() => showChart(tradeGroup)}
            >
              <BarChartIcon />
            </IconButton>
          </>
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
          {columnsToShow.map(column => columnDisplayers[column](group))}
        </TableRow>
        {isOpen
          ? tradeGroup.trades.map((trade, i) => (
            <TradeRow trade={trade} key={i} columnsToShow={columnsToShow} />
          ))
          : null}
      </>
    );
  };

export default withStyles(styles)(TradeGroupRow);