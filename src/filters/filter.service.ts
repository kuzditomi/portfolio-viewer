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
        const positionFilters = {
            [PositionFilter.All]: () => true,
            [PositionFilter.Closed]: (trade: Trade) => trade.position === 0,
            [PositionFilter.Open]: (trade: Trade) => trade.position !== 0,
        }

        const filteredPortfolio: Report = {
            ...portfolio,
            tradeGroups: portfolio.tradeGroups.reduce((filteredTradeGroups, tradeGroup) => {
                const filteredTrades = tradeGroup.trades.filter(positionFilters[filter]);

                if (filteredTrades.length > 0) {
                    filteredTradeGroups.push({
                        ...tradeGroup,
                        trades: filteredTrades
                    })
                }

                return filteredTradeGroups;
            }, [] as TradeGroup[])
        };

        return filteredPortfolio;
    }
}