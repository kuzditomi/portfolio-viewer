import { Report, TradeGroup } from '../models';
import { DateFilter, PositionFilter } from './filters.models';
import { FiltersState } from './filters.reducer';
import TradesCompareService from "../calculations/TradesCompare.service";
import PLService from '../calculations/PL.Service';

export class FilterService {
    public applyFilters(reportToFilter: Report, filters: FiltersState): Report {
        const filtersToApply = [
            this.filterByDate(filters.dateFilter),
            this.filterByPosition(filters.positionFilter),
        ];

        const filteredPortfolio = filtersToApply.reduce((report, filter) => filter(report), reportToFilter)

        return {
            ...filteredPortfolio,
            tradeGroups: filteredPortfolio.tradeGroups.map(PLService.setPLForGroup)
        };
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
            [PositionFilter.All]: (tradeGroup: TradeGroup) => tradeGroup,
            [PositionFilter.Closed]: (tradeGroup: TradeGroup) => {
                const filteredTrades = tradeGroup.trades
                    .filter(trade => tradeGroup.trades.find(TradesCompareService.isClosingCombinationWith(trade)))

                return {
                    ...tradeGroup,
                    trades: filteredTrades
                }
            },
            [PositionFilter.Open]: (tradeGroup: TradeGroup) => {
                const filteredTrades = tradeGroup.trades
                    .filter(trade => !tradeGroup.trades.find(TradesCompareService.isClosingCombinationWith(trade)))

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