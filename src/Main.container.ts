import { connect } from "react-redux";
import { AppState } from "./store";
import { filteredPortfolioSelector, isChartOpenSelector } from './portfolio/portfolio.selector';
import MainComponent, {MainStateProps} from "./Main.component";

const mapStateToProps = (state: AppState): MainStateProps => ({
    report: filteredPortfolioSelector(state),
    isChartOpen: isChartOpenSelector(state)
})

export default connect<MainStateProps, {}, {}, AppState>(
    mapStateToProps
)(MainComponent);