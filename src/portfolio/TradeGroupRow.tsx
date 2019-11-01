import { TradeGroup } from "../models";
import React, { useState } from "react";
import "./display.scss";
import { columns } from "./models";
import TradeRow from "./TradeRow";

export interface TradeGroupRowProps {
  tradeGroup: TradeGroup;
}

interface CollapseableTradeGroup extends TradeGroup {
  isOpen: boolean;
}

const getRemainingDays = (date: Date): number => {
  const now = new Date();

  return Math.floor((Number(date) - Number(now)) / 1000 / 60 / 60 / 24);
};

const empty = () => "";

const TradeGroupRow: React.FC<TradeGroupRowProps> = ({ tradeGroup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const columnDisplayers: {
    [key in columns]: (tradeGroup: CollapseableTradeGroup) => React.ReactNode;
  } = {
    action: tradeGroup => (
      <button className="collapse-btn" onClick={() => toggleIsOpen()}>
        {tradeGroup.isOpen ? "-" : "+"}
      </button>
    ),
    underlying: tradeGroup => tradeGroup.underlying,
    optionType: empty,
    optionTarget: empty,
    position: empty,
    expiration: tradeGroup => tradeGroup.expiration.toLocaleDateString(),
    remainingDays: tradeGroup =>
      getRemainingDays(tradeGroup.expiration).toString()
  };

  const group: CollapseableTradeGroup = { ...tradeGroup, isOpen };

  return (
    <>
      <tr className="trade-group-row">
        {columns.map(column => (
          <td key={column} className={column}>
            {columnDisplayers[column](group)}
          </td>
        ))}
      </tr>
      {isOpen
        ? tradeGroup.trades.map((trade, i) => (
            <TradeRow trade={trade} key={i} />
          ))
        : null}
    </>
  );
};

export default TradeGroupRow;
