import { Dispatch } from "redux";
import { Trade } from "../models";
import axios from 'axios';
import { loadTrades } from '../import/import.actioncreators';

export const removeTrades = (trades: Trade[]) => async (dispatch: Dispatch) => {
    const tradeIds = trades.map(t => `ids=${t.id}`).join('&')
    await axios.delete(`/api/trades?${tradeIds}`);

    loadTrades(dispatch);
}