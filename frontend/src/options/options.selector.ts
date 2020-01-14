import { AppState } from "../store";

export const selectedColumnsSelector = (state: AppState) => state.options.selectedColumns;

export const isCommissionIncludedInPLSelector = (state: AppState) => state.options.includeCommissionToPL;
