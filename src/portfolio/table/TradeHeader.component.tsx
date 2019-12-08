import React from "react";
import { TableHead, TableCell, TableRow } from "@material-ui/core";
import { columnTitles, columns } from './../../column-picker/models';

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
