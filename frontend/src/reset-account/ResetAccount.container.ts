import { connect } from "react-redux";
import { AppState } from "../store";
import { Dispatch } from 'redux';
import ResetAccountComponent, { ResetAccountStateProps, ResetAccountDispatchProps } from './ResetAccount.component';
import { removeAllTrades } from "../portfolio/portfolio.actioncreators";
import { portfolioLoadingSelector } from '../portfolio/portfolio.selector';

const mapStateProps = (state: AppState): ResetAccountStateProps => ({
  loading: portfolioLoadingSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ResetAccountDispatchProps => ({
  resetAccount: () => {
    dispatch(removeAllTrades() as any)
  }
})

export default connect<ResetAccountStateProps, ResetAccountDispatchProps, {}, AppState>(
  mapStateProps, mapDispatchToProps
)(ResetAccountComponent);
