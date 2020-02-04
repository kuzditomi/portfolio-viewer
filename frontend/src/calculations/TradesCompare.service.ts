import { Trade, TradeGroup, TradeType } from '../models';

class TradesCompareService {
    hasClosingCombination(trade: Trade, tradeGroup: TradeGroup) {
        if (trade.type === TradeType.Stock){
            return false; // TODO
        }

        const totalTradePosition = tradeGroup.trades.reduce((numberOfTradesForSameTrade, currentTrade) => {
            if (currentTrade.type === TradeType.Option && currentTrade.optionType === trade.optionType && currentTrade.strikePrice === trade.strikePrice) {
                return numberOfTradesForSameTrade + currentTrade.position;
            }

            return numberOfTradesForSameTrade;
        }, 0);

        return totalTradePosition === 0;
    }
}

export const tradesCompareService = new TradesCompareService();