import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { TradeGroup } from '../models';
import { Chart } from "react-google-charts";
import ChartService from "./Chart.service";

const styles = createStyles({
});

export interface ChartProps {
    chartData: TradeGroup;
}

const ChartComponent: React.FC<ChartProps & WithStyles<typeof styles>> = ({ chartData, classes }) => {
    const pointlist = ChartService.getChartPointList(chartData);

    return <Chart
        width={'100%'}
        height={'500px'}
        chartType="LineChart"
        data={[
            ['x', chartData.underlying],
            ...pointlist.points
        ]}
        options={{
            hAxis: {
                title: 'Underlying price',
            },
            vAxis: {
                title: 'P/L',
            },
            series: {
                0: {
                    curveType: 'function'
                }
            }
        }}
        rootProps={{ 'data-testid': '1' }}
    />

};

export default withStyles(styles)(ChartComponent);
