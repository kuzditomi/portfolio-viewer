import { connect } from "react-redux";
import { AppState } from "../store";
import ImportHistory, { ImportHistoryDispatchProps, ImportHistoryStateProps } from './ImportHistory.component';
import { Dispatch } from 'redux';
import { loadReport, loadHistory, deleteReport } from './import.actioncreators';
import { importHistorySelector } from "./import.selectors";

const mapStateToProps = (state: AppState): ImportHistoryStateProps => ({
  history: importHistorySelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ImportHistoryDispatchProps => ({
  importFromHistory: (key: string) => { loadReport(key)(dispatch) },
  deleteFromHistory: (key: string) => { deleteReport(key)(dispatch) },
  loadHistory: ()=> loadHistory()(dispatch)
})

export default connect<ImportHistoryStateProps, ImportHistoryDispatchProps, 
{}, AppState>(
  mapStateToProps, mapDispatchToProps
)(ImportHistory);