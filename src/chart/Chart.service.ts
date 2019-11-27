import { TradeGroup, OptionType, Trade } from "../models";

export interface ChartPoints {
    points: [number, number][]
}

function getTradePLAtExpiry(underLyingPrice: number, trade: Trade): number {
    if (trade.strikePrice >= underLyingPrice) {
        return trade.position * trade.tradePrice * (trade.optionType === OptionType.Call ? -1 : 1);
    } else {
        return trade.position * (trade.optionType === OptionType.Call ? underLyingPrice - trade.strikePrice : trade.strikePrice - underLyingPrice);
    }
}

function getGroupPLAtExpiry(underLyingPrice: number, tradeGroup: TradeGroup): number {
    return tradeGroup.trades.reduce((sum, trade) => sum + getTradePLAtExpiry(underLyingPrice, trade), 0)
}

function getChartPointList(tradegroup: TradeGroup): ChartPoints {
    const middlePoint = tradegroup.trades.reduce((sum, t) => sum + t.strikePrice, 0) / tradegroup.trades.length;
    const strikes = tradegroup.trades.map(t => t.strikePrice);
    const min = Math.min(...strikes)
    const max = Math.max(...strikes)


    const from = min - ((middlePoint - min) / 2);
    const to = max + ((max - middlePoint) / 2);

    const points: [number, number][] = [];
    const d = Math.abs(to - from) / 500;

    for (let price = from; price < to; price += d) {
        const pl = getGroupPLAtExpiry(price, tradegroup);
        points.push([price, pl])
    }

    return {
        points
    }
}

export default {
    getChartPointList,
    getGroupPLAtExpiry,
    getTradePLAtExpiry
}