import { connect } from "react-redux";
import TradeGroupRowComponent from "./TradeGroupRow.component";
import { TradeGroupRowDispatchProps, TradeGroupRowOwnProps } from './TradeGroupRow.component';
import { Dispatch } from "redux";
import { AppState } from "../../store";
import { openChart } from '../portfolio.actions';

const mapDispatchToProps = (dispatch: Dispatch): TradeGroupRowDispatchProps => ({
    showChart: () => { dispatch(openChart(undefined)) }
})

export default connect<{}, TradeGroupRowDispatchProps, TradeGroupRowOwnProps, AppState>(
    null,
    mapDispatchToProps
)(TradeGroupRowComponent);