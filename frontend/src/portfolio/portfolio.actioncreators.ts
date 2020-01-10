import { Dispatch } from "redux";
import { Trade } from "../models";
import axios from 'axios';
import { loadTrades } from '../import/import.actioncreators';

export const removeTrade = (trade: Trade) => async (dispatch: Dispatch) => {
    await axios.delete(`/api/trades/${trade.id}`);

    loadTrades(dispatch);
}