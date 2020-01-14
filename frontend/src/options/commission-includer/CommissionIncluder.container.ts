import { connect } from "react-redux";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import CommissionIncluderComponent from './CommissionIncluder.component';
import { CommissionIncluderComponentStateProps, CommissionIncluderComponentDispatchProps } from './CommissionIncluder.component';
import { isCommissionIncludedInPLSelector } from "../options.selector";
import { commissionIncludeChanged } from '../options.actions';
import { applyFilters } from "../../filters/filters.actioncreators";

const mapStateToProps = (state: AppState): CommissionIncluderComponentStateProps => ({
    includeCommission: isCommissionIncludedInPLSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): CommissionIncluderComponentDispatchProps => ({
    onCommisionInclusionChanged: (value: boolean) => {
        dispatch(commissionIncludeChanged(value));

        applyFilters(dispatch);
    }
});

export default connect<CommissionIncluderComponentStateProps, CommissionIncluderComponentDispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(CommissionIncluderComponent);
