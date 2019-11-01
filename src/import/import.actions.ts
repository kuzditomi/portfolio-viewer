import { Report } from "../models";

export enum IMPORT_ACTIONS {
    IMPORT_FROM_HISTORY = "IMPORT/IMPORT_HISTORY"
}

export const importFromHistoryAction = (report: Report) => ({
    type: IMPORT_ACTIONS.IMPORT_FROM_HISTORY,
    payload: report
});
export type IMPORT_ACTION_FROM_HISTORY = ReturnType<typeof importFromHistoryAction>;

export type IMPORT_ACTION_TYPES = IMPORT_ACTION_FROM_HISTORY;