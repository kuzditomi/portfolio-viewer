import { connect } from "react-redux";
import { Dispatch } from "redux";
import ChartComponent, { ChartDispatchProps } from "./Chart.component";
import { AppState } from "../store";
import { closeChart } from '../portfolio/portfolio.actions';
import { ChartStateProps } from './Chart.component';
import { chartDataSelector } from '../portfolio/portfolio.selector';

const mapStateToProps = (state: AppState): ChartStateProps => ({
    chartData: chartDataSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ChartDispatchProps => ({
    closeChart: () => { dispatch(closeChart(undefined)) }
})

export default connect<ChartStateProps, ChartDispatchProps, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(ChartComponent);