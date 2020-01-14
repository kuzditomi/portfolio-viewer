import { connect } from "react-redux";
import ColumnPickerComponent from './ColumnPicker.component';
import { AppState } from "../../store";
import { ColumnPickerStateProps, ColumnPickerDispatchProps } from './ColumnPicker.component';
import { Dispatch } from "redux";
import { columnsSelected } from '../options.actions';
import { selectedColumnsSelector } from "../options.selector";

const mapStateToProps = (state: AppState): ColumnPickerStateProps => ({
  selectedColumns: selectedColumnsSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): ColumnPickerDispatchProps => ({
  onColumnsSelected: (columns) => {
    dispatch(columnsSelected(columns));
  }
});

export default connect<ColumnPickerStateProps, ColumnPickerDispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(ColumnPickerComponent);
