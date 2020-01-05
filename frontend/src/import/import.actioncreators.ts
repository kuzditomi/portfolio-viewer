import { Dispatch } from "redux";
import { ImportHistoryService } from './ImportHistory.service';
import { IParser } from './Parser/IParser.service';
import { FlexQueryParserService } from './Parser/FlexQueryParser.service';
import axios from 'axios';

const importHistoryService = new ImportHistoryService();
const reportParserService: IParser = new FlexQueryParserService();

export const importFile = (file: File) => async (dispatch: Dispatch) => {
    const trades = await reportParserService.Parse(file);

    await Promise.all(trades.map(trade => axios.post("/api/trades", { Raw: JSON.stringify(trade) })));
    // importHistoryService.SaveRawImport(rawImport);
}