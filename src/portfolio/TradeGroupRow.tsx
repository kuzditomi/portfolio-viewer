import { TradeGroup } from "../models";
import React, { useState } from "react";
import { columns } from "./models";
import TradeRow from "./TradeRow";
import PriceColumn from "./PriceColumn.component";

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

  return remainingDays < 0 ? 'EXPIRED' : remainingDays.toString();
};

const tdWrapper = (key: string, child: React.ReactNode) => (
  <td key={key} className={key}>
    {child}
  </td>
);
const empty = (key: string) => (_tradeGroup: TradeGroup) => tdWrapper(key, "");

const TradeGroupRow: React.FC<TradeGroupRowProps> = ({ tradeGroup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const columnDisplayers: {
    [key in columns]: (tradeGroup: CollapseableTradeGroup) => React.ReactNode;
  } = {
    action: tradeGroup =>
      tdWrapper(
        "action",
        <button className="collapse-btn" onClick={() => toggleIsOpen()}>
          {tradeGroup.isOpen ? "-" : "+"}
        </button>
      ),
    underlying: tradeGroup => tdWrapper("underlying", tradeGroup.underlying),
    optionType: empty("optionType"),
    optionTarget: empty("optionTarget"),
    position: empty("position"),
    price: tradeGroup => (
      <PriceColumn
        key={"price"}
        price={tradeGroup.trades.reduce(
          (sum, trade) => (sum += trade.price),
          0
        )}
      />
    ),
    expiration: tradeGroup =>
      tdWrapper("expiration", tradeGroup.expiration.toLocaleDateString()),
    remainingDays: tradeGroup =>
      tdWrapper("remainingDays", getRemainingDays(tradeGroup.expiration))
  };

  const group: CollapseableTradeGroup = { ...tradeGroup, isOpen };

  return (
    <>
      <tr className="trade-group-row">
        {columns.map(column => columnDisplayers[column](group))}
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
