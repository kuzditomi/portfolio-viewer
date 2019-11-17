import { TradeGroup } from '../models';
import TradesCompareService from './TradesCompare.service';

const getPLForGroup = (group: TradeGroup): number => {
    const pl = group.trades.reduce((summary, trade) => {
        const closingTrade = group.trades.find(TradesCompareService.isClosingCombinationWith(trade));

        if (closingTrade && closingTrade.tradeDate >= trade.tradeDate) {
            return (-closingTrade.position * closingTrade.tradePrice) + (-trade.position * trade.tradePrice);
        }

        return summary;
    }, 0);

    return pl;
}

const PLService = {
    getPLForGroup
};

export default PLService;