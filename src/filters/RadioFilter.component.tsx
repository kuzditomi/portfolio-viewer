import React from "react";
import Filter, { FilterProps } from "./Filter.component";

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

const RadioFilter: React.FC<
  RadioFilterProps & RadioFilterStateProps & RadioFilterDispatchProps
> = ({ prefix, options, selectedValue, onSelected, ...props }) => {
  return (
    <Filter {...props}>
      {Object.keys(options).map(key => (
        <label key={key}>
          {key}
          <input
            type="radio"
            name={`${prefix}-${key}`}
            value={options[key]}
            checked={selectedValue === options[key]}
            onChange={() => onSelected(options[key])}
          />
        </label>
      ))}
    </Filter>
  );
};

export default RadioFilter;
