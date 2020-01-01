import { connect } from "react-redux";
import { Dispatch } from "redux";
import RadioFilter, {
  RadioFilterStateProps,
  RadioFilterDispatchProps
} from "./RadioFilter.component";
import React from "react";
import { PositionFilter } from "./filters.models";
import { AppState } from "../store";
import { positionFilterSelector } from "./filters.selectors";
import { filterByPosition } from "./filters.actioncreators";

const mapStateToProps = (state: AppState): RadioFilterStateProps => ({
  selectedValue: positionFilterSelector(state) as number
});

const mapDispatchToProps = (dispatch: Dispatch): RadioFilterDispatchProps => ({
  onSelected: (value: number) => {
    filterByPosition(value as PositionFilter)(dispatch);
  }
});

const positionOptions = {
  All: PositionFilter.All,
  Closed: PositionFilter.Closed,
  Open: PositionFilter.Open
};

const PositionFilterComponent: React.FC<
  RadioFilterStateProps & RadioFilterDispatchProps
> = ({ ...props }) => (
  <RadioFilter
    prefix={"position"}
    label={"By Position"}
    options={positionOptions}
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
)(PositionFilterComponent);
