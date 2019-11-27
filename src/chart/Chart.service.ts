import { TradeGroup, OptionType } from "../models";

export interface ChartPoints {
    points: [number, number][]
}

function getPLAtExpiryWithPrice(price: number, tradeGroup: TradeGroup): number {
    return tradeGroup.trades.reduce((sum, trade) => {
        const plOfTrade = trade.optionType === OptionType.Call ? price - trade.strikePrice : trade.strikePrice - price;
        return sum + plOfTrade;
    }, 0);
}

function getChartPointList(tradegroup: TradeGroup): ChartPoints {
    const middlePoint = tradegroup.trades.reduce((sum, t) => sum + t.strikePrice, 0) / tradegroup.trades.length;
    const strikes = tradegroup.trades.map(t => t.strikePrice);
    const min = Math.min(...strikes)
    const max = Math.max(...strikes)


    const from = min - ((middlePoint - min) / 2);
    const to = max + ((max - middlePoint) / 2);

    const points: [number, number][] = [];
    for (let price = from; price < to; price++) {

        const pl = getPLAtExpiryWithPrice(price, tradegroup);

        points.push([price, pl])
    }

    return {
        points
    }
}

export default {
    getChartPointList,
    getPLAtExpiryWithPrice
}