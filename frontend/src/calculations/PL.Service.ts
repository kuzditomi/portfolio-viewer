import { TradeGroup } from '../models';
import TradesCompareService from './TradesCompare.service';

const getPLForGroup = (group: TradeGroup): number => {
    const pl = group.trades.reduce((summary, trade) => {
        const closingTrade = group.trades.find(TradesCompareService.isClosingCombinationWith(trade));

        if (closingTrade && closingTrade.tradeDate >= trade.tradeDate) {
            return summary + (-closingTrade.position * Math.abs(closingTrade.tradePrice)) + (-trade.position * Math.abs(trade.tradePrice));
        }

        return summary;
    }, 0);

    return pl;
}

const setPLForGroup = (group: TradeGroup): TradeGroup => {
    const pl = getPLForGroup(group);

    return {
        ...group,
        pl
    };
}

const PLService = {
    getPLForGroup,
    setPLForGroup
};

export default PLService;