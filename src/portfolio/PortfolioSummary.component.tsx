import React from "react";
import { PortfolioSummary } from "./models";

export interface PortfolioSummaryStateProps {
  summary?: PortfolioSummary;
}

const PortfolioSummaryComponent: React.FC<PortfolioSummaryStateProps> = ({summary}) => {
  if (summary === undefined) {
    return null;
  }

  return (
    <div className="summary">
     Total P/L: <span className={summary.TotalPL < 0 ? 'loss' : 'win'}>{(summary.TotalPL * 100).toFixed(2)}</span>
    </div>
  );
};

export default PortfolioSummaryComponent;
