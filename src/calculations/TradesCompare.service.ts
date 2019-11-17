import { Trade } from "../models";

const isClosingCombinationWith = (trade: Trade) => (otherTrade: Trade) =>
    trade.optionType === otherTrade.optionType &&
    trade.strikePrice === otherTrade.strikePrice &&
    trade.position === (-1 * otherTrade.position);

const TradesCompareService = {
    isClosingCombinationWith
}
export default TradesCompareService;