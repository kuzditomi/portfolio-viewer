import { connect } from "react-redux";
import TradeGroupRowComponent from "./TradeGroupRow.component";
import { TradeGroupRowDispatchProps, TradeGroupRowOwnProps } from './TradeGroupRow.component';
import { Dispatch } from "redux";
import { AppState } from "../../store";
import { openChart } from '../portfolio.actions';
import { TradeGroup, Trade } from '../../models';
import { removeTrades } from "../portfolio.actioncreators";

const mapDispatchToProps = (dispatch: Dispatch): TradeGroupRowDispatchProps => ({
    showChart: (tradeGroup: TradeGroup) => { dispatch(openChart(tradeGroup)) },
    onRemoveTrades: (trades: Trade[]) => removeTrades(trades)(dispatch)
})

export default connect<{}, TradeGroupRowDispatchProps, TradeGroupRowOwnProps, AppState>(
    null,
    mapDispatchToProps
)(TradeGroupRowComponent);