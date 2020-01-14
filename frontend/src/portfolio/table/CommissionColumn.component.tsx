import React from "react";
import { TableCell } from "@material-ui/core";

export interface CommissionColumnProps {
    commission: number;
}

const CommissionColumn: React.FC<CommissionColumnProps> = ({ commission }) => {
    return (
        <TableCell align="right">
            {commission.toFixed(2)} $
        </TableCell>
    );
};

export default CommissionColumn;
