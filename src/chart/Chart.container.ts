import { connect } from "react-redux";
import { Dispatch } from "redux";
import ChartComponent, { ChartDispatchProps } from "./Chart.component";
import { AppState } from "../store";
import { closeChart } from '../portfolio/portfolio.actions';

const mapDispatchToProps = (dispatch: Dispatch): ChartDispatchProps => ({
    closeChart: () => { dispatch(closeChart(undefined)) }
})

export default connect<{}, ChartDispatchProps, {}, AppState>(
    null,
    mapDispatchToProps
)(ChartComponent);