import { Trade, TradeGroup } from '../models';

class TradesCompareService {
    hasClosingCombination(trade: Trade, tradeGroup: TradeGroup) {
        const totalTradePosition = tradeGroup.trades.reduce((numberOfTradesForSameTrade, currentTrade) => {
            if (currentTrade.optionType === trade.optionType && currentTrade.strikePrice === trade.strikePrice) {
                return numberOfTradesForSameTrade + currentTrade.position;
            }

            return numberOfTradesForSameTrade;
        }, 0);

        return totalTradePosition == 0;
    }
}

export const tradesCompareService = new TradesCompareService();