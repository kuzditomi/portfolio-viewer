import { Dispatch } from "redux";
import { ImportHistoryService } from './ImportHistory.service';
import { ReportParserService } from "./ReportParser.service";
import { reportLoadedFromHistoryAction, historyLoadedAction } from './import.actions';

const importHistoryService = new ImportHistoryService();
const reportParserService = new ReportParserService();

export const loadReport = (reportKey: string) => (dispatch: Dispatch) => {
    const rawImport = importHistoryService.GetRawImport(reportKey);
    const report = reportParserService.ParseRawData(rawImport);

    return dispatch(reportLoadedFromHistoryAction(report));
}

export const loadHistory = () => (dispatch: Dispatch) => {
    const history = importHistoryService.GetRawImportKeys();

    return dispatch(historyLoadedAction(history));
}