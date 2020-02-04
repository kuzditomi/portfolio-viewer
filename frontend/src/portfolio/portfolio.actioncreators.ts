import { Dispatch } from "redux";
import { Trade } from "../models";
import axios from 'axios';
import { loadTrades } from '../import/import.actioncreators';
import { AppState } from '../store';
import { tradeIdsSelector } from "./portfolio.selector";
import { reportLoading } from '../import/import.actions';

export const removeTrades = (trades: Trade[]) => async (dispatch: Dispatch) => {
    const tradeIds = trades.map(t => `ids=${t.id}`).join('&')
    await axios.delete(`/api/trades?${tradeIds}`);

    await loadTrades(dispatch);
}

export const removeAllTrades = () => async (dispatch: Dispatch, getState: () => AppState) => {
    const tradeIds = tradeIdsSelector(getState());
    if (!tradeIds) {
        return;
    }

    const tradeIdParams = tradeIds.map(id => `ids=${id}`).join('&');
    
    dispatch(reportLoading(undefined));

    await axios.delete(`/api/trades?${tradeIdParams}`);

    await loadTrades(dispatch);
}