import { Dispatch } from "redux";
import { IParser } from './Parser/IParser.service';
import { FlexQueryParserService } from './Parser/FlexQueryParser.service';
import axios from 'axios';
import { Trade } from "../models";
import { reportLoaded } from "./import.actions";

const reportParserService: IParser = new FlexQueryParserService();

export const importFile = (file: File) => async (dispatch: Dispatch) => {
    const trades = await reportParserService.Parse(file);

    await Promise.all(trades.map(trade => axios.post("/api/trades", { Raw: JSON.stringify(trade) })));
}

export const loadTrades = async (dispatch: Dispatch) => {
    const tradesReponse = await axios.get("/api/trades");

    const trades = tradesReponse.data.map((t: any) => {
        const trade = JSON.parse(t.raw) as any;
        
        return {
            ...trade,
            expiration: new Date(trade.expiration),
            tradeDate: new Date(trade.tradeDate)
        } as Trade;
    }) as Trade[];

    const report = reportParserService.CreateReportFromTrades(trades);

    dispatch(reportLoaded(report));
}