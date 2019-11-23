import { connect } from "react-redux";
import TradeGroupRowComponent from "./TradeGroupRow.component";
import { TradeGroupRowDispatchProps, TradeGroupRowOwnProps } from './TradeGroupRow.component';
import { Dispatch } from "redux";
import { AppState } from "../../store";
import { openChart } from '../portfolio.actions';
import { TradeGroup } from '../../models';

const mapDispatchToProps = (dispatch: Dispatch): TradeGroupRowDispatchProps => ({
    showChart: (tradeGroup: TradeGroup) => { dispatch(openChart(tradeGroup)) }
})

export default connect<{}, TradeGroupRowDispatchProps, TradeGroupRowOwnProps, AppState>(
    null,
    mapDispatchToProps
)(TradeGroupRowComponent);