import React from "react";
import { FormControl, FormLabel } from "@material-ui/core";

export interface FilterProps {
  label: string;
}

const Filter: React.FC<FilterProps> = ({ label, children }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      {children}
    </FormControl>
  );
};

export default Filter;
