import React from "react";
import { PortfolioSummary } from "./models";
import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";

const styles = createStyles({
  win: {
    color: green[700]
  },
  loss: {
    color: red[700]
  }
});

export interface PortfolioSummaryStateProps {
  summary?: PortfolioSummary;
}

const PortfolioSummaryComponent: React.FC<PortfolioSummaryStateProps &
  WithStyles<typeof styles>> = ({ summary, classes }) => {
  if (summary === undefined) {
    return null;
  }

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Summary
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell> Total P/L:</TableCell>
            <TableCell
              align="right"
              className={summary.TotalPL < 0 ? classes.loss : classes.win}
            >
              ${(summary.TotalPL * 100).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(PortfolioSummaryComponent);
