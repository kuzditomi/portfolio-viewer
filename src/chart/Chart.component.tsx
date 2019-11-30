import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { TradeGroup, Trade } from '../models';
import { Chart } from "react-google-charts";
import ChartService from "./Chart.service";

const styles = createStyles({
});

export interface ChartProps {
    chartData: TradeGroup;
    showMainStrategyOnly: boolean;
}

const ChartComponent: React.FC<ChartProps & WithStyles<typeof styles>> = ({ chartData, showMainStrategyOnly, classes }) => {
    const isStrategy = chartData.trades.length > 1;

    const getHeaderFromTrade = (trade: Trade) => `${trade.underlying} ${trade.strikePrice}`;

    const getChartPoints = () => {
        const points: number[][] = [];
        for (let x = 60; x < 90; x += 0.1) {
            const valuesForX = chartData.trades.map(t => ChartService.getTradePLAtExpiry(x, t));
            const strategyValue = ChartService.getGroupPLAtExpiry(x, chartData);

            if (showMainStrategyOnly) {
                points.push([x, strategyValue]);
            } else if (isStrategy) {
                points.push([x, ...valuesForX, strategyValue]);
            } else {
                points.push([x, ...valuesForX]);
            }
        }

        return points;
    }

    const getHeaders = () => {
        const headers = ['x'];

        if (showMainStrategyOnly) {
            headers.push(chartData.trades[0].underlying);
        } else {
            headers.push(...chartData.trades.map(getHeaderFromTrade));
            if (isStrategy) {
                headers.push('Trade');
            }
        }

        return headers;
    }

    return <Chart
        width={'100%'}
        height={'500px'}
        chartType="LineChart"
        data={[
            getHeaders(),
            ...getChartPoints()
        ]}
        options={{
            hAxis: {
                title: 'Underlying price',
            },
            vAxis: {
                title: 'P/L',
            }
        }}
    />

};

export default withStyles(styles)(ChartComponent);
