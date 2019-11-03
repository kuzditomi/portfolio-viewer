import React from "react";
import DateFilter from "./DateFilter.container";
import PositionFilter from "./PositionFilter.container";
import "./filters.scss";

export interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  return (
    <div className="filters">
      Filters
      <div className="flex">
        <DateFilter/>
        <PositionFilter/>
      </div>
    </div>
  );
};

export default Filters;
