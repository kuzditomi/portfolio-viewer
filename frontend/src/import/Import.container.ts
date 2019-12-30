import { connect } from "react-redux";
import { AppState } from "../store";
import { Dispatch } from 'redux';
import Import, { ImportDispatchProps } from './Import.component';
import { importFile } from "./import.actioncreators";

const mapDispatchToProps = (dispatch: Dispatch): ImportDispatchProps => ({
  importFile: (file) => importFile(file)(dispatch)
})

export default connect<{}, ImportDispatchProps, {}, AppState>(
  null, mapDispatchToProps
)(Import);
