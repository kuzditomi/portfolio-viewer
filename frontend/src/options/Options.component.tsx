import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ColumnPicker from './column-picker/ColumnPicker.container';
import CommissionIncluder from './commission-includer/CommissionIncluder.container';

const Options: React.FC = () => {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Options
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ColumnPicker />
        </Grid>
        <Grid item xs={12}>
          <CommissionIncluder />
        </Grid>
      </Grid>
    </>
  );
};

export default Options;
