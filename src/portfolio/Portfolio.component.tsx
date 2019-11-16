import { Report } from "../models";
import React from "react";
import Filters from "../filters/Filters.component";
import PortfolioSummary from "./PortfolioSummary.container";
import { Grid } from "@material-ui/core";
import PortfolioTable from "./PortfolioTable.component";

export interface PortfolioStateProps {
  report?: Report;
}

const Portfolio: React.FC<PortfolioStateProps> = ({ report }) => {
  if (!report) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PortfolioSummary />
      </Grid>
      <Grid item xs={12} md={6}>
        <Filters />
      </Grid>
      <Grid item xs={12}>
        <PortfolioTable report={report} />
      </Grid>
    </Grid>
  );
};

export default Portfolio;
