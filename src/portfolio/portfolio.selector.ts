import { AppState } from '../store';

export const originalPortfolioSelector = (state: AppState) => state.portfolio.portfolio;
export const filteredPortfolioSelector = (state: AppState) => state.portfolio.filteredPortfolio;