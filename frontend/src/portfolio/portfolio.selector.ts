import { AppState } from '../store';

export const portfolioLoadingSelector = (state: AppState) => state.portfolio.isPortfolioLoading;
export const originalPortfolioSelector = (state: AppState) => state.portfolio.portfolio;
export const filteredPortfolioSelector = (state: AppState) => state.portfolio.filteredPortfolio;
export const filteredPortfolioSummary = (state: AppState) => {
    if (!state.portfolio.filteredPortfolio) {
        return undefined;
    }

    const totalPL = state.portfolio.filteredPortfolio.tradeGroups.reduce((totalSum, tradeGroup) =>
        totalSum + tradeGroup.trades.reduce((tradeGroupSum, trade) => tradeGroupSum + trade.tradePrice, 0)
        , 0);

    return {
        TotalPL: -totalPL
    }
};

export const isChartOpenSelector = (state: AppState) => !!state.portfolio.chartData;
export const chartDataSelector = (state: AppState) => state.portfolio.chartData;
