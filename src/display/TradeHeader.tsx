import React from "react";
import { columns } from "./models";

const columnTitles: { [key in columns]: string } = {
  underlying: "Underlying",
  optionTarget: "Option Target",
  optionType: "Option Type",
  position: "Position",
  expiration: "Expiration",
  remainingDays: "Remaining days"
};

const TradeHeader: React.FC = () => {
  return (
    <tr>
      {columns.map(column => (
        <th key={column}>{columnTitles[column]}</th>
      ))}
    </tr>
  );
};

export default TradeHeader;
