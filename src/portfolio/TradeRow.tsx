import { OptionType, Trade } from "../models";
import React from "react";
import "./display.scss";
import { columns } from './models';

export interface TradeRowProps {
  trade: Trade;
}

const columnDisplayers: { [key in columns]: (trade: Trade) => string } = {
  action: trade => '',
  underlying: trade => trade.underlying,
  optionType: trade => (trade.optionType === OptionType.Call ? "CALL" : "PUT"),
  optionTarget: trade => trade.optionTarget.toString(),
  position: trade => trade.position.toString(),
  expiration: trade => trade.expiration.toLocaleDateString(),
  remainingDays: trade => getRemainingDays(trade.expiration).toString()
};

const getRemainingDays = (date: Date): number => {
  const now = new Date();

  return Math.floor((Number(date) - Number(now)) / 1000 / 60 / 60 / 24);
};

const TradeRow: React.FC<TradeRowProps> = ({ trade }) => {
  return (
    <tr>
      {columns.map(column => (
        <td key={column} className={column}>{columnDisplayers[column](trade)}</td>
      ))}
    </tr>
  );
};

export default TradeRow;