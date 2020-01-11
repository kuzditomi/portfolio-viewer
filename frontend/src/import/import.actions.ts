import { Report } from "../models";
import { AppAction } from '../actions';

export enum IMPORT_ACTIONS {
    REPORT_LOADING = "IMPORT/REPORT_LOADING",
    REPORT_LOADED = "IMPORT/REPORT_LOADED",
    REPORT_LOAD_ERROR = "IMPORT/REPORT_LOAD_ERROR",
}

export const reportLoading: AppAction<IMPORT_ACTIONS.REPORT_LOADING> = () => ({
    type: IMPORT_ACTIONS.REPORT_LOADING,
    payload: undefined
});

export const reportLoadError: AppAction<IMPORT_ACTIONS.REPORT_LOAD_ERROR> = () => ({
    type: IMPORT_ACTIONS.REPORT_LOAD_ERROR,
    payload: undefined
});

export const reportLoaded: AppAction<IMPORT_ACTIONS.REPORT_LOADED, Report> = (report) => ({
    type: IMPORT_ACTIONS.REPORT_LOADED,
    payload: report
});

export type IMPORT_ACTION_TYPES = ReturnType<typeof reportLoaded> | ReturnType<typeof reportLoading> | ReturnType<typeof reportLoadError>;