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
import { dateFilterSelectedAction } from "./filters.actions";

const mapStateToProps = (state: AppState): RadioFilterStateProps => ({
  selectedValue: dateFilterSelector(state) as number
});

const mapDispatchToProps = (dispatch: Dispatch): RadioFilterDispatchProps => ({
  onSelected: (value: number) => {
    dispatch(dateFilterSelectedAction(value as DateFilter));
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
  <RadioFilter
    label={"By Date"}
    options={dateOptions}
    selectedValue={DateFilter.All}
    {...props}
  />
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
