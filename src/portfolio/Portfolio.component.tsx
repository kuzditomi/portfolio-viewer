import { Report } from "../models";
import React from "react";
import "./portfolio.scss";
import TradeHeader from "./TradeHeader";
import TradeGroupRow from "./TradeGroupRow";
import Filters from "../filters/Filters.component";

export interface PortfolioStateProps {
  report?: Report;
}

const Portfolio: React.FC<PortfolioStateProps> = ({ report }) => {
  if (!report) {
    return null;
  }

  return (
    <div className="display">
      <Filters/>
      <table>
        <thead>
          <TradeHeader />
        </thead>
        <tbody>
          {report.tradeGroups.map((group, i) => (
            <TradeGroupRow tradeGroup={group} key={i} />
            // <TradeRow trade={trade} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
