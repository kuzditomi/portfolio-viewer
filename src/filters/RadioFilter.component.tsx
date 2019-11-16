import React from "react";
import Filter, { FilterProps } from "./Filter.component";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

export interface RadioFilterProps extends FilterProps {
  prefix: string;
  options: {
    [key: string]: number;
  };
}

export interface RadioFilterStateProps {
  selectedValue: number;
}

export interface RadioFilterDispatchProps {
  onSelected(value: number): void;
}

const RadioFilter: React.FC<RadioFilterProps &
  RadioFilterStateProps &
  RadioFilterDispatchProps> = ({
  prefix,
  options,
  selectedValue,
  onSelected,
  ...props
}) => {
  return (
    <Filter {...props}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={selectedValue}
        onChange={event => onSelected(+event.target.value)}
      >
        {Object.keys(options).map(key => (
          <FormControlLabel
            key={key}
            value={options[key]}
            control={<Radio />}
            label={key}
          />
        ))}
      </RadioGroup>
    </Filter>
  );
};

export default RadioFilter;
