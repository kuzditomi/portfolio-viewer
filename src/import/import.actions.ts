import { Report } from "../models";
import { AppAction } from '../actions';

export enum IMPORT_ACTIONS {
    HISTORY_LOADED = "IMPORT/HISTORY_LOADED",
    REPORT_LOADED_FROM_HISTORY = "IMPORT/REPORT_LOADED_FROM_HISTORY",
}

export const historyLoadedAction: AppAction<IMPORT_ACTIONS.HISTORY_LOADED, string[]> = (history) => ({
    type: IMPORT_ACTIONS.HISTORY_LOADED,
    payload: history
});

export const reportLoadedFromHistoryAction: AppAction<IMPORT_ACTIONS.REPORT_LOADED_FROM_HISTORY, Report> = (report) => ({
    type: IMPORT_ACTIONS.REPORT_LOADED_FROM_HISTORY,
    payload: report
});

export type IMPORT_ACTION_TYPES = ReturnType<typeof historyLoadedAction> | ReturnType<typeof reportLoadedFromHistoryAction>;