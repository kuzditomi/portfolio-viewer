import { connect } from "react-redux";
import { AppState } from "../store";
import ImportHistory, { ImportHistoryDispatchProps } from './ImportHistory.component';
import { Dispatch } from 'redux';
import { loadReport } from './import.actioncreators';

const mapDispatchToProps = (dispatch: Dispatch): ImportHistoryDispatchProps => ({
  onImport: (key: string) => { loadReport(key)(dispatch) }
})

export default connect<{}, ImportHistoryDispatchProps, {}, AppState>(
  null, mapDispatchToProps
)(ImportHistory);