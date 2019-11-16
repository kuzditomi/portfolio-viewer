import React from "react";
import { Report } from "../models";
import TradeHeader from './TradeHeader.component';
import TradeGroupRow from './TradeGroupRow.component';

export interface PortfolioTableProps {
  report: Report;
}

const PortfolioTableComponent: React.FC<PortfolioTableProps> = ({ report }) => (
  <table>
    <thead>
      <TradeHeader />
    </thead>
    <tbody>
      {report.tradeGroups.map((group, i) => (
        <TradeGroupRow tradeGroup={group} key={i} />
      ))}
    </tbody>
  </table>
);

export default PortfolioTableComponent;
