import { AppState } from '../store';

export const currentPortfolioSelector = (state: AppState) => state.portfolio.portfolio;