import { Dispatch } from "redux";
import { ImportHistoryService } from './ImportHistory.service';
import { reportLoadedFromHistoryAction, historyLoadedAction } from './import.actions';
import { IParser } from './Parser/IParser.service';
import { FlexQueryParserService } from './Parser/FlexQueryParser.service';

const importHistoryService = new ImportHistoryService();
const reportParserService: IParser = new FlexQueryParserService();

export const loadReport = (reportKey: string) => (dispatch: Dispatch) => {
    const rawImport = importHistoryService.GetRawImport(reportKey);
    const report = reportParserService.ParseRawData(rawImport);

    return dispatch(reportLoadedFromHistoryAction(report));
}

export const deleteReport = (reportKey: string) => (dispatch: Dispatch) => {
    importHistoryService.DeleteReport(reportKey);

    return loadHistory()(dispatch);
}

export const loadHistory = () => (dispatch: Dispatch) => {
    const history = importHistoryService.GetRawImportKeys();

    return dispatch(historyLoadedAction(history));
}

export const importFile = (file: File) => async (dispatch: Dispatch) => {
    const rawImport = await reportParserService.Parse(file);
    importHistoryService.SaveRawImport(rawImport);
    loadHistory()(dispatch);
}