import { TradeGroup, OptionType, Trade } from "../models";

export interface ChartPoints {
    points: [number, number][]
}

function getTradePLAtExpiry(underLyingPrice: number, trade: Trade): number {
    const isLong = trade.position > 0;
    const isCall = trade.optionType === OptionType.Call;
    const isOverStrikePrice = trade.strikePrice < underLyingPrice;

    const isFixed =
        (isLong && isCall && !isOverStrikePrice) ||
        (isLong && !isCall && isOverStrikePrice) ||
        (!isLong && isCall && isOverStrikePrice) ||
        (!isLong && !isCall && !isOverStrikePrice)

    if (isFixed) {
        return trade.position * trade.tradePrice * 100 * (trade.optionType === OptionType.Call ? -1 : 1);
    } else {
        return trade.position * (trade.optionType === OptionType.Call ? underLyingPrice - trade.strikePrice - trade.tradePrice * 100 : trade.strikePrice - underLyingPrice + trade.tradePrice * 100);
    }
}

function getGroupPLAtExpiry(underLyingPrice: number, tradeGroup: TradeGroup): number {
    return tradeGroup.trades.reduce((sum, trade) => sum + getTradePLAtExpiry(underLyingPrice, trade), 0)
}

function getChartPointList(tradegroup: TradeGroup): ChartPoints {
    let from = 0;
    let to = 0;

    if (tradegroup.trades.length > 1) {
        const middlePoint = tradegroup.trades.reduce((sum, t) => sum + t.strikePrice, 0) / tradegroup.trades.length;
        const strikes = tradegroup.trades.map(t => t.strikePrice);
        const min = Math.min(...strikes)
        const max = Math.max(...strikes)

        from = min - ((middlePoint - min) / 2);
        to = max + ((max - middlePoint) / 2);
    } else {
        const distance = Math.abs(tradegroup.trades[0].tradePrice * 100)
        from = tradegroup.trades[0].strikePrice - 2 * distance;
        to = tradegroup.trades[0].strikePrice + 2 * distance;

    }
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