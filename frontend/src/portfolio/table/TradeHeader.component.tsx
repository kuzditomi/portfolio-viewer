import React from "react";
import { TableHead, TableCell, TableRow } from "@material-ui/core";
import { columnTitles } from '../../options/column-picker/models';
import { ColumnsType } from '../../options/column-picker/models';

export interface TradeHeaderProps {
  columnsToShow: ColumnsType[];
}
const TradeHeader: React.FC<TradeHeaderProps> = ({ columnsToShow }) => {
  return (
    <TableHead>
      <TableRow>
        {columnsToShow.map(column => (
          <TableCell key={column}>{columnTitles[column]}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TradeHeader;
