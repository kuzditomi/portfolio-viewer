import React from "react";
import { Report } from "../../models";
import TradeHeader from "./TradeHeader.component";
import TradeGroupRow from "./TradeGroupRow.container";
import { Table, TableBody } from "@material-ui/core";
import { ColumnsType } from '../../column-picker/models';

export interface PortfolioTableProps {
  report: Report;
  columnsToShow: ColumnsType[];
}

const PortfolioTableComponent: React.FC<PortfolioTableProps> = ({ report, columnsToShow }) => (
  <Table size="small">
    <TradeHeader columnsToShow={columnsToShow} />
    <TableBody>
      {report.tradeGroups.map((group, i) => (
        <TradeGroupRow tradeGroup={group} key={i} columnsToShow={columnsToShow} />
      ))}
    </TableBody>
  </Table>
);

export default PortfolioTableComponent;
