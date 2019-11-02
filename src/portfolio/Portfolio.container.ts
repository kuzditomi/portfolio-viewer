import { connect } from "react-redux";
import { AppState } from "../store";
import { PortfolioStateProps } from "./Portfolio.component";
import Portfolio from './Portfolio.component';
import { filteredPortfolioSelector } from './portfolio.selector';

const mapStateToProps = (state: AppState): PortfolioStateProps => ({
    report: filteredPortfolioSelector(state)
})

export default connect<PortfolioStateProps, {}, {}, AppState>(
    mapStateToProps
)(Portfolio);