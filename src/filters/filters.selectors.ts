import { AppState } from '../store';

export const dateFilterSelector = (state: AppState) => state.filters.dateFilter;