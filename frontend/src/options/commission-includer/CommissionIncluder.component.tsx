import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

export interface CommissionIncluderComponentStateProps {
    includeCommission: boolean
}

export interface CommissionIncluderComponentDispatchProps {
    onCommisionInclusionChanged(value: boolean): void;
}

const CommissionIncluderComponent: React.FC<CommissionIncluderComponentStateProps & CommissionIncluderComponentDispatchProps> = ({ includeCommission, onCommisionInclusionChanged }) => (
    <FormControlLabel
        control={
            <Switch checked={includeCommission} onChange={()=>onCommisionInclusionChanged(!includeCommission)} value="checkedA" />
        }
        label="Include commission to PL"
    />
);

export default CommissionIncluderComponent;
