import { OptionType, Trade } from "../../models";
import React from "react";
import { ColumnsType } from "../../column-picker/models";
import PriceColumn from "./PriceColumn.component";
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import TrashIcon from "@material-ui/icons/Delete";
import { WithStyles, createStyles, withStyles } from '@material-ui/styles';
import { red } from "@material-ui/core/colors";

const styles = () =>
  createStyles({
    deleteIconButton: {
      padding: 4,
    },
    deleteIcon: {
      height: 18,
      width: 18,

      '&:hover': {
        color: red[700]
      }
    }
  });

export interface TradeRowProps {
  trade: Trade;
  columnsToShow: ColumnsType[];
  onRemoveTrade: (trade: Trade) => void;
}

const TradeRow: React.FC<TradeRowProps & WithStyles<typeof styles>> = ({ trade, columnsToShow, onRemoveTrade, classes }) => {
  const cell = (key: string, node: React.ReactNode) => (
    <TableCell className={key} key={key}>
      {node}
    </TableCell>
  );

  const columnDisplayers: {
    [key in ColumnsType]: (trade: Trade) => React.ReactNode;
  } = {
    action: (trade) => removeTradeCell(trade),
    underlying: trade => cell("underlying", trade.underlying),
    optionType: trade =>
      cell(
        "optionType",
        trade.optionType === OptionType.Call ? "CALL" : "PUT"
      ),
    strikePrice: trade =>
      cell("strikePrice", trade.strikePrice.toFixed(1)),
    position: trade => cell("position", trade.position.toString()),
    pl: () => cell('pl', ''),
    tradeDate: trade => cell('tradeDate', trade.tradeDate.toLocaleDateString()),
    expiration: trade =>
      cell("expiration", trade.expiration.toLocaleDateString()),
    price: trade => <PriceColumn key={"price"} price={trade.tradePrice} />,
    remainingDays: () => cell("remainingDays", "")
  };

  const removeTradeCell = (trade: Trade) => (
    <TableCell className="action" key="action">
      <IconButton className={classes.deleteIconButton} onClick={() => onRemoveTrade(trade)}>
        <TrashIcon className={classes.deleteIcon} />
      </IconButton>
    </TableCell >
  );

  return (
    <TableRow>
      {
        columnsToShow.map(column => columnDisplayers[column](trade))
      }
    </TableRow>
  )
}

export default withStyles(styles)(TradeRow);
