import React from "react";
import DateFilter from "./DateFilter.container";
import "./filters.scss";

export interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  return (
    <div className="filters">
      Filters
      <div className="flex">
        <DateFilter/>
      </div>
    </div>
  );
};

export default Filters;
