import { AppState } from '../store';

export const importHistorySelector = (state: AppState) => state.importHistory.history;