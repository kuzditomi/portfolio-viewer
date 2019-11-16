import React from "react";
import { TableCell } from '@material-ui/core';

export interface PriceColumnProps {
  price: number;
}

const getPriceString = (price: number) => {
    return price < 0 ? `C ${(price*-1).toFixed(2)}` : `D ${price.toFixed(2)}`;
}

const PriceColumn: React.FC<PriceColumnProps> = ({ price }) => {
  return (
    <TableCell className={`price ${price > 0 ? "loss" : "win"}`}>
      {getPriceString(price)}
    </TableCell>
  );
};

export default PriceColumn;
