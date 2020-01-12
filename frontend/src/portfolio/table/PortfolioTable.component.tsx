import React from "react";
import { Report } from "../../models";
import TradeHeader from "./TradeHeader.component";
import TradeGroupRow from "./TradeGroupRow.container";
import { Table, TableBody, createStyles, withStyles } from "@material-ui/core";
import { ColumnsType } from '../../column-picker/models';
import { WithStyles } from '@material-ui/styles';

const styles = () => createStyles({
  container: {
    overflowX: 'auto'
  }
});

export interface PortfolioTableProps {
  report: Report;
  columnsToShow: ColumnsType[];
}

const PortfolioTableComponent: React.FC<PortfolioTableProps & WithStyles<typeof styles>> = ({ report, columnsToShow, classes }) => (
  <div className={classes.container}>
    <Table size="small">
      <TradeHeader columnsToShow={columnsToShow} />
      <TableBody>
        {report.tradeGroups.map((group, i) => (
          <TradeGroupRow tradeGroup={group} key={i} columnsToShow={columnsToShow} />
        ))}
      </TableBody>
    </Table>
  </div>
);

export default withStyles(styles)(PortfolioTableComponent);
