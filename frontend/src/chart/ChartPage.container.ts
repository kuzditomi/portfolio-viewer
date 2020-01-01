import { connect } from "react-redux";
import { Dispatch } from "redux";
import ChartPageComponent, { ChartPageDispatchProps } from "./ChartPage.component";
import { AppState } from "../store";
import { closeChart } from '../portfolio/portfolio.actions';
import { ChartPageStateProps } from './ChartPage.component';
import { chartDataSelector } from '../portfolio/portfolio.selector';

const mapStateToProps = (state: AppState): ChartPageStateProps => ({
    chartData: chartDataSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ChartPageDispatchProps => ({
    closeChart: () => { dispatch(closeChart(undefined)) }
})

export default connect<ChartPageStateProps, ChartPageDispatchProps, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(ChartPageComponent);