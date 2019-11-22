import React from "react";
import { Report } from "../../models";
import TradeHeader from "./TradeHeader.component";
import TradeGroupRow from "./TradeGroupRow.container";
import { Table, TableBody } from "@material-ui/core";

export interface PortfolioTableProps {
  report: Report;
}

const PortfolioTableComponent: React.FC<PortfolioTableProps> = ({ report }) => (
  <Table size="small">
    <TradeHeader />
    <TableBody>
      {report.tradeGroups.map((group, i) => (
        <TradeGroupRow tradeGroup={group} key={i}/>
      ))}
    </TableBody>
  </Table>
);

export default PortfolioTableComponent;
