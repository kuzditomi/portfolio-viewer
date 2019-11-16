import React from "react";
import { PortfolioSummary } from "./models";
import { Typography } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export interface PortfolioSummaryStateProps {
  summary?: PortfolioSummary;
}

const PortfolioSummaryComponent: React.FC<PortfolioSummaryStateProps> = ({
  summary
}) => {
  if (summary === undefined) {
    return null;
  }

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Summary
      </Typography>
      Total P/L: 
      <Typography
        component="span"
        style={{
          color: summary.TotalPL < 0 ? red[500] : green[500]
        }}
      >
        ${(summary.TotalPL * 100).toFixed(2)}
      </Typography>
    </>
  );
};

export default PortfolioSummaryComponent;
