import { TradeGroup } from '../models';

const getPLForGroup = (group: TradeGroup): number => {
    const pl = group.trades.reduce((summary, trade) => {
        const tradePL = -trade.position * Math.abs(trade.tradePrice);

        return summary + tradePL;

        // TODO: this will miss the expired options when there is no closing trade
        // const closingTrade = group.trades.find(TradesCompareService.isClosingCombinationWith(trade));

        // if (closingTrade && closingTrade.tradeDate >= trade.tradeDate) {
        //     return summary + (-closingTrade.position * Math.abs(closingTrade.tradePrice)) + (-trade.position * Math.abs(trade.tradePrice));
        // }

        // return summary;
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