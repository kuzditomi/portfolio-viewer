import { connect } from "react-redux";
import { AppState } from "../store";
import { Dispatch } from 'redux';
import Import, { ImportDispatchProps } from './Import.component';
import { importFile } from "./import.actioncreators";
import { ImportStateProps } from './Import.component';
import { portfolioLoadingSelector } from '../portfolio/portfolio.selector';

const mapStateProps = (state: AppState): ImportStateProps => ({
  isPortfolioLoading: portfolioLoadingSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ImportDispatchProps => ({
  importFile: (file) => importFile(file)(dispatch)
})

export default connect<ImportStateProps, ImportDispatchProps, {}, AppState>(
  mapStateProps, mapDispatchToProps
)(Import);
