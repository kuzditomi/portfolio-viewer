import React from "react";

export interface PriceColumnProps {
  price: number;
}

const getPriceString = (price: number) => {
    return price < 0 ? `C ${(price*-1).toFixed(2)}` : `D ${price.toFixed(2)}`;
}

const PriceColumn: React.FC<PriceColumnProps> = ({ price }) => {
  return (
    <td className={`price ${price > 0 ? "loss" : "win"}`}>
      {getPriceString(price)}
    </td>
  );
};

export default PriceColumn;
