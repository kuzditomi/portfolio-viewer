import { Dispatch } from "redux";
import { ImportHistoryService } from './ImportHistory.service';
import { ReportParserService } from "./ReportParser.service";
import { IMPORT_ACTIONS, IMPORT_ACTION_FROM_HISTORY } from "./import.actions";

const importHistoryService = new ImportHistoryService();
const reportParserService = new ReportParserService();

export const loadReport = (reportKey: string) => (dispatch: Dispatch): IMPORT_ACTION_FROM_HISTORY => {
    const rawImport = importHistoryService.GetRawImport(reportKey);
    const report = reportParserService.ParseRawData(rawImport);

    return dispatch({
        type: IMPORT_ACTIONS.IMPORT_FROM_HISTORY,
        payload: report
    });
}