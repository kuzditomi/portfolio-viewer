import { OptionType, Trade } from "../models";
import React from "react";
import { columns } from "./models";
import PriceColumn from "./PriceColumn.component";

export interface TradeRowProps {
  trade: Trade;
}

const tdWrapper = (key: string, node: React.ReactNode) => (
  <td className={key} key={key}>
    {node}
  </td>
);
const columnDisplayers: {
  [key in columns]: (trade: Trade) => React.ReactNode;
} = {
  action: () => tdWrapper("action",""),
  underlying: trade => tdWrapper("underlying", trade.underlying),
  optionType: trade =>
    tdWrapper(
      "optionType",
      trade.optionType === OptionType.Call ? "CALL" : "PUT"
    ),
  optionTarget: trade =>
    tdWrapper("optionTarget", trade.optionTarget.toString()),
  position: trade => tdWrapper("position", trade.position.toString()),
  expiration: trade =>
    tdWrapper("expiration", trade.expiration.toLocaleDateString()),
  price: trade => <PriceColumn key={'price'} price={trade.price} />,
  remainingDays: trade =>
    tdWrapper("remainingDays", getRemainingDays(trade.expiration).toString())
};

const getRemainingDays = (date: Date): number => {
  const now = new Date();

  return Math.floor((Number(date) - Number(now)) / 1000 / 60 / 60 / 24);
};

const TradeRow: React.FC<TradeRowProps> = ({ trade }) => {
  return <tr>{columns.map(column => columnDisplayers[column](trade))}</tr>;
};

export default TradeRow;
