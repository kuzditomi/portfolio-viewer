import { connect } from "react-redux";
import { AppState } from "./store";
import { filteredPortfolioSelector, isChartOpenSelector } from './portfolio/portfolio.selector';
import MainComponent, { MainStateProps, MainDispatchProps } from "./Main.component";
import { selectedColumnsSelector } from './options/options.selector';
import { Dispatch } from 'redux';
import { loadTrades } from "./import/import.actioncreators";

const mapStateToProps = (state: AppState): MainStateProps => ({
    report: filteredPortfolioSelector(state),
    isChartOpen: isChartOpenSelector(state),
    columnsToShow: selectedColumnsSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): MainDispatchProps => ({
    loadReport: ()=>{
        loadTrades(dispatch);
    }
});

export default connect<MainStateProps, MainDispatchProps, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);