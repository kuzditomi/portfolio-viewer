import React from "react";
import DateFilter from "./DateFilter.container";
import PositionFilter from "./PositionFilter.container";
import "./filters.scss";
import { Grid, Typography } from "@material-ui/core";

const Filters: React.FC = () => {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Filters
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DateFilter />
        </Grid>
        <Grid item xs={4}>
          <PositionFilter />
        </Grid>
      </Grid>
    </>
  );
};

export default Filters;
