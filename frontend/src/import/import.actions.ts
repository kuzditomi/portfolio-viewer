import { Report } from "../models";
import { AppAction } from '../actions';

export enum IMPORT_ACTIONS {
    REPORT_LOADED = "IMPORT/REPORT_LOADED",
}

export const reportLoaded: AppAction<IMPORT_ACTIONS.REPORT_LOADED, Report> = (report) => ({
    type: IMPORT_ACTIONS.REPORT_LOADED,
    payload: report
});

export type IMPORT_ACTION_TYPES = ReturnType<typeof reportLoaded>;