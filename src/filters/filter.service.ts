import { Report, TradeGroup, Trade } from "../models";
import { DateFilter, PositionFilter } from './filters.models';
import { FiltersState } from './filters.reducer';

export class FilterService {
    public applyFilters(reportToFilter: Report, filters: FiltersState): Report {
        const filtersToApply = [
            this.filterByDate(filters.dateFilter),
            this.filterByPosition(filters.positionFilter),
        ];

        const filteredPortfolio = filtersToApply.reduce((report, filter) => filter(report), reportToFilter)

        return filteredPortfolio;
    }

    private filterByDate = (filter: DateFilter) => (portfolio: Report): Report => {
        const dateFilters = {
            [DateFilter.All]: () => true,
            [DateFilter.Expired]: (tradeGroup: TradeGroup) => tradeGroup.expiration < new Date(),
            [DateFilter.Open]: (tradeGroup: TradeGroup) => tradeGroup.expiration > new Date(),
        }

        const filteredPortfolio: Report = {
            ...portfolio,
            tradeGroups: portfolio.tradeGroups.filter(dateFilters[filter])
        };

        return filteredPortfolio;
    }

    private filterByPosition = (filter: PositionFilter) => (portfolio: Report): Report => {
        const isClosingCombinationWith = (trade: Trade) =>(otherTrade: Trade) =>
            trade.optionType === otherTrade.optionType &&
            trade.strikePrice === otherTrade.strikePrice &&
            trade.position === (-1 * otherTrade.position);

        const positionFilters = {
            [PositionFilter.All]: (tradeGroup: TradeGroup) => tradeGroup,
            [PositionFilter.Closed]: (tradeGroup: TradeGroup) => {
                const filteredTrades = tradeGroup.trades
                    .filter(trade => tradeGroup.trades.find(isClosingCombinationWith(trade)))

                return {
                    ...tradeGroup,
                    trades: filteredTrades
                }
            },
            [PositionFilter.Open]: (tradeGroup: TradeGroup) => {
                const filteredTrades = tradeGroup.trades
                    .filter(trade => !tradeGroup.trades.find(isClosingCombinationWith(trade)))

                return {
                    ...tradeGroup,
                    trades: filteredTrades
                }
            }
        }

        const filteredPortfolio: Report = {
            ...portfolio,
            tradeGroups: portfolio.tradeGroups
                .map(positionFilters[filter])
                .filter(tg => tg.trades.length > 0)
        };

        return filteredPortfolio;
    }
}