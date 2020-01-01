import { connect } from "react-redux";
import { AppState } from "./store";
import { filteredPortfolioSelector, isChartOpenSelector } from './portfolio/portfolio.selector';
import MainComponent, { MainStateProps } from "./Main.component";
import { selectedColumnsSelector } from './column-picker/columns.selector';

const mapStateToProps = (state: AppState): MainStateProps => ({
    report: filteredPortfolioSelector(state),
    isChartOpen: isChartOpenSelector(state),
    columnsToShow: selectedColumnsSelector(state)
})

export default connect<MainStateProps, {}, {}, AppState>(
    mapStateToProps
)(MainComponent);