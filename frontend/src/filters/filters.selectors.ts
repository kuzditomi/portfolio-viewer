import { AppState } from '../store';

export const filtersSelector = (state: AppState) => state.filters;

export const dateFilterSelector = (state: AppState) => state.filters.dateFilter;

export const positionFilterSelector = (state: AppState) => state.filters.positionFilter;
