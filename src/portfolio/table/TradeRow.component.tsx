import { OptionType, Trade } from "../../models";
import React from "react";
import { columns } from "../models";
import PriceColumn from "./PriceColumn.component";
import PLColumn from "./PLColumn.component";
import { TableRow, TableCell } from '@material-ui/core';

export interface TradeRowProps {
  trade: Trade;
}

const cell = (key: string, node: React.ReactNode) => (
  <TableCell className={key} key={key}>
    {node}
  </TableCell>
);

const columnDisplayers: {
  [key in columns]: (trade: Trade) => React.ReactNode;
} = {
  action: () => cell("action", ""),
  underlying: trade => cell("underlying", trade.underlying),
  optionType: trade =>
    cell(
      "optionType",
      trade.optionType === OptionType.Call ? "CALL" : "PUT"
    ),
  optionTarget: trade =>
    cell("optionTarget", trade.strikePrice.toString()),
  position: trade => cell("position", trade.position.toString()),
  pl: trade => <PLColumn key={"pl"} pl={trade.pl} />,
  tradeDate: trade => cell('tradeDate', trade.tradeDate.toLocaleDateString()),
  expiration: trade =>
    cell("expiration", trade.expiration.toLocaleDateString()),
  price: trade => <PriceColumn key={"price"} price={trade.tradePrice} />,
  remainingDays: () => cell("remainingDays", "")
};

const TradeRow: React.FC<TradeRowProps> = ({ trade }) => {
  return <TableRow>{columns.map(column => columnDisplayers[column](trade))}</TableRow>;
};

export default TradeRow;
