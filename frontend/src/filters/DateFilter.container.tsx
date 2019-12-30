import { connect } from "react-redux";
import { Dispatch } from "redux";
import RadioFilter, {
  RadioFilterStateProps,
  RadioFilterDispatchProps
} from "./RadioFilter.component";
import React from "react";
import { DateFilter } from "./filters.models";
import { dateFilterSelector } from "./filters.selectors";
import { AppState } from "../store";
import { filterByDate } from "./filters.actioncreators";

const mapStateToProps = (state: AppState): RadioFilterStateProps => ({
  selectedValue: dateFilterSelector(state) as number
});

const mapDispatchToProps = (dispatch: Dispatch): RadioFilterDispatchProps => ({
  onSelected: (value: number) => {
    filterByDate(value as DateFilter)(dispatch);
  }
});

const dateOptions = {
  All: DateFilter.All,
  Expired: DateFilter.Expired,
  Open: DateFilter.Open
};

const DateFilterComponent: React.FC<
  RadioFilterStateProps & RadioFilterDispatchProps
> = ({ ...props }) => (
  <RadioFilter prefix={'date'} label={"By Date"} options={dateOptions} {...props} />
);

export default connect<
  RadioFilterStateProps,
  RadioFilterDispatchProps,
  {},
  AppState
>(
  mapStateToProps,
  mapDispatchToProps
)(DateFilterComponent);
