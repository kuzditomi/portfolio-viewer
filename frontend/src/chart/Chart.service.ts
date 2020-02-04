import { TradeGroup, OptionType, Trade, TradeType } from '../models';

export interface ChartPoints {
    points: [number, number][]
}

function getTradePLAtExpiry(underLyingPrice: number, trade: Trade): number {
    if (trade.type === TradeType.Option) {
        const isCall = trade.optionType === OptionType.Call;
        const isOverStrikePrice = trade.strikePrice < underLyingPrice;
        const tradeAbsPrice = Math.abs(trade.tradePrice);

        const isFixed = (isCall && !isOverStrikePrice) || (!isCall && isOverStrikePrice);

        if (isFixed) {
            return -trade.position * tradeAbsPrice * 100;
        } else {
            return trade.position * ((-1 * tradeAbsPrice * 100) + ((trade.strikePrice - underLyingPrice) * 100 * (trade.optionType === OptionType.Call ? -1 : 1)))
        }
    } else {
        return 0; // TODO
    }

}

function getGroupPLAtExpiry(underLyingPrice: number, tradeGroup: TradeGroup): number {
    return tradeGroup.trades.reduce((sum, trade) => sum + getTradePLAtExpiry(underLyingPrice, trade), 0)
}

export default {
    getGroupPLAtExpiry,
    getTradePLAtExpiry
}