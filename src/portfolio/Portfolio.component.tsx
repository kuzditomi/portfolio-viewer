import { Report } from "../models";
import React from "react";
import "./display.scss";
import TradeHeader from "./TradeHeader";
import TradeGroupRow from "./TradeGroupRow";

export interface PortfolioStateProps {
  report?: Report;
}

const Portfolio: React.FC<PortfolioStateProps> = ({ report }) => {
  if (!report) {
    return null;
  }

  return (
    <div className="display">
      <h2>{report.name}</h2>

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
