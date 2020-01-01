import { connect } from "react-redux";
import { AppState } from "../store";
import { filteredPortfolioSummary } from './portfolio.selector';
import PortfolioSummaryComponent, { PortfolioSummaryStateProps } from './PortfolioSummary.component';

const mapStateToProps = (state: AppState): PortfolioSummaryStateProps => ({
    summary: filteredPortfolioSummary(state)
})

export default connect<PortfolioSummaryStateProps, {}, {}, AppState>(
    mapStateToProps
)(PortfolioSummaryComponent);