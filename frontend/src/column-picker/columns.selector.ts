import { AppState } from '../store';

export const selectedColumnsSelector = (state: AppState) => state.columns.selectedColumns;