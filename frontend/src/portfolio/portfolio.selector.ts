import { AppState } from '../store';
import { isCommissionIncludedInPLSelector } from '../options/options.selector';

export const portfolioLoadingSelector = (state: AppState) => state.portfolio.isPortfolioLoading;
export const originalPortfolioSelector = (state: AppState) => state.portfolio.portfolio;
export const filteredPortfolioSelector = (state: AppState) => state.portfolio.filteredPortfolio;
export const filteredPortfolioSummary = (state: AppState) => {
    if (!state.portfolio.filteredPortfolio) {
        return undefined;
    }

    const includeCommission = isCommissionIncludedInPLSelector(state);

    const totalPL = state.portfolio.filteredPortfolio.tradeGroups.reduce((totalSum, tradeGroup) =>
        totalSum + tradeGroup.trades.reduce((tradeGroupSum, trade) => tradeGroupSum + trade.tradePrice, 0) + (includeCommission ? (tradeGroup.commission/100) : 0)
        , 0);

    return {
        TotalPL: -totalPL
    }
};

export const isChartOpenSelector = (state: AppState) => !!state.portfolio.chartData;
export const chartDataSelector = (state: AppState) => state.portfolio.chartData;
export const tradeIdsSelector = (state: AppState) => state.portfolio.portfolio && state.portfolio.portfolio.trades.map(t => t.id);
