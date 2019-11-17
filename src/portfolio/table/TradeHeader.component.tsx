import React from "react";
import { columns } from "../models";
import { TableHead, TableCell, TableRow } from "@material-ui/core";

const columnTitles: { [key in columns]: string } = {
  action: "",
  underlying: "Underlying",
  strikePrice: "Strike Price",
  optionType: "Option Type",
  position: "Position",
  expiration: "Expiration",
  price: "Trade Price",
  pl: "Realized P/L",
  tradeDate: "Trade date",
  remainingDays: "Remaining days"
};

const TradeHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableCell key={column}>{columnTitles[column]}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TradeHeader;
